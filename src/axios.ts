import axios from 'axios'
import { Readable } from 'stream'
import { inflateConcatenatedGzip } from './fetch'

export function newAxiosCancelToken() {
  return axios.CancelToken.source()
}

export async function fetchContentWithAxiosAndPako(
  url: string,
  config: Record<string, any>
): Promise<string | null> {
  try {
    const result = await axios.get(url, { responseType: 'arraybuffer', ...config })
    if (url.endsWith('.gz') && result.headers['content-encoding'] !== 'gzip') {
      const ret = await inflateConcatenatedGzip(result.data)
      return ret
    } else {
      const utf8decoder = new TextDecoder()
      const ret = utf8decoder.decode(new Uint8Array(result.data))
      return ret
    }
  } catch (err) {
    console.log('axiosFetchContent', err)
    return null
  }
}

export async function fetchContentWithAxiosAndGzip(
  url: string,
  config: Record<string, any>
): Promise<string | null> {
  try {
    const result = await axios.get(url, { responseType: 'stream', ...config })
    let stream = result.data
    if (url.endsWith('.gz') && result.headers['content-encoding'] !== 'gzip') {
      const zlib = (await import('zlib')).default
      stream = stream.pipe(zlib.createGunzip())
    }
    return streamToString(stream)
  } catch (err) {
    console.log('axiosFetchContent', err)
    return null
  }
}

export function streamToString(stream: Readable): Promise<string> {
  const chunks: Buffer[] = []
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk: any) => chunks.push(Buffer.from(chunk)))
    stream.on('error', (err: Error) => reject(err))
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
  })
}
