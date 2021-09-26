import {
  ArchiveBlockDatabase,
  ArchiveBlockOfType,
  ArchiveGetBlockOptions,
  ArchiveTipDatabase,
  ArchiveTipRecord,
} from '@wholebuzz/archive-base'

export class ArchiveBlockDatabaseClient<X> extends ArchiveBlockDatabase {
  constructor(
    public directory: string,
    public parseItem: (x: string) => X,
    public fetchFn: (url: string) => Promise<string | null>
  ) {
    super()
  }

  getUrl(blockId: string) {
    // Work around https://issuetracker.google.com/u/1/issues/162906022
    return (
      `${this.directory}${blockId}.json` +
      (this.directory.startsWith('http://127.0.0.1:') ? '' : '.gz')
    )
  }

  /** @inheritDoc */
  async getBlock(
    blockId: string,
    options?: ArchiveGetBlockOptions
  ): Promise<ArchiveBlockOfType<X> | null> {
    const lines = (await this.fetchFn(this.getUrl(blockId)))?.split(/\r?\n/)?.filter((e) => !!e)
    if (!lines || lines.length < 1) return null
    const header = JSON.parse(lines.shift() || '')
    return { header, data: (options?.reverse ? lines : lines.reverse()).map(this.parseItem) }
  }

  /** @inheritDoc */
  async getBlockHeader(blockId: string): Promise<ArchiveBlockOfType<X> | null> {
    // XXX optimize with partial read
    const block = await this.getBlock(blockId)
    if (!block) return null
    return { header: block.header, data: block.data.length ? [block.data[0]] : [] }
  }
}

export class ArchiveTipDatabaseClient extends ArchiveTipDatabase {
  constructor(
    public directory: string,
    public hashFn: (x: string) => string,
    public fetchFn: (url: string) => Promise<string | null>
  ) {
    super()
  }

  getUrl(db: string, key: string, value: string) {
    const tipId = this.hashFn(`${db},${key},${value}`)
    return `${this.directory}${tipId}.json`
  }

  /** @inheritDoc */
  async getTip(db: string, key: string, value: string): Promise<ArchiveTipRecord | null> {
    const record = await this.fetchFn(this.getUrl(db, key, value))
    const ret = record ? JSON.parse(record) : null
    // console.log(`db(${db}).index(${key}=${value}).tip = ${ret?.blockId || ''}`)
    return ret
  }
}
