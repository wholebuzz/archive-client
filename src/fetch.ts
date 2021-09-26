export async function fetchContentWithFetchAndPako(
  url: string,
  _config?: Record<string, any>
): Promise<string | null> {
  const result = await fetch(url)
  // Work around https://issuetracker.google.com/u/1/issues/162906022
  if (url.endsWith('.gz') && result.headers.get('Content-Encoding') !== 'gzip') {
    return new Promise(async (resolve) => {
      const blob = await result.blob()
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        try {
          if (!event.target?.result) resolve(null)
          else {
            inflateConcatenatedGzip(event.target.result as ArrayBuffer)
              .then((decompress) => resolve(decompress))
              .catch((err) => {
                console.log('inflateConcatenatedGzip', err)
                resolve(null)
              })
          }
        } catch (err) {
          console.error('fetchJSON', err)
          resolve(null)
        }
      }
      fileReader.readAsArrayBuffer(blob)
    })
  } else {
    const text = await result.text()
    return text
  }
}

export async function inflateConcatenatedGzip(arrayBuffer: ArrayBuffer) {
  const pako = (await import('pako')).default
  const utf8decoder = new TextDecoder()
  let ret = ''
  let offset = 0
  let remaining = 1
  /// This pako usage only works in browser.
  while (remaining > 0 && offset < arrayBuffer.byteLength) {
    const inflator = new pako.Inflate()
    inflator.push(new Uint8Array(arrayBuffer, offset))
    if (inflator.err) throw inflator.msg
    ret += utf8decoder.decode(inflator.result as ArrayBufferLike)
    offset += (inflator as any).strm.total_in
    remaining = (inflator as any).strm.avail_in
  }
  return ret
}
