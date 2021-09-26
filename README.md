# @wholebuzz/archive-client

Archive database client.  See [archive](https://github.com/wholebuzz/archive).

## Example

```
import { ArchiveDatabase } from '@wholebuzz/archive-base'
import { 
  ArchiveBlockDatabaseClient, 
  ArchiveTipDatabaseClient,
} from '@wholebuzz/archive-client/lib/archive'
import {
  fetchContentWithAxiosAndGzip,
  fetchContentWithAxiosAndPako,
  newAxiosCancelToken,
} from '@wholebuzz/archive-client/lib/axios'

const fetchFn = typeof window === 'undefined'
    ? fetchContentWithAxiosAndGzip
    : fetchContentWithAxiosAndPako,
const cancelToken = newAxiosCancelToken()
const disposableFetchFn = (url: string) => fetchFn(url, { cancelToken: cancelToken.token })

const archive = new ArchiveDatabase<Event>(
    'news',
    [
      {
        name: 'publisher',
        getter: getEventPublishers,
        sorter: compareEventReverse,
        blockDatabase: new ArchiveBlockDatabaseClient<Event>(
          'https://archive.storage.googleapis.com',
          parseNewsItem,
          disposableFetchFn
        ),
        tipDatabase: new ArchiveTipDatabaseClient(
          'https://archive-index.storage.googleapis.com',
          sha1,
          disposableFetchFn
        ),
      },
    ],
    {
      dispose: () => cancelToken.cancel(),
      strictOrdering: true,
    }
  )
}

const tipBlock = await archive.findTipBlock('publisher', 'theatlantic.com')

```

## Table of contents

### Modules

- [archive](docs/modules/archive.md)
- [axios](docs/modules/axios.md)
- [fetch](docs/modules/fetch.md)
