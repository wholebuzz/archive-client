[@wholebuzz/archive-client](../README.md) / [Exports](../modules.md) / [archive](../modules/archive.md) / ArchiveBlockDatabaseClient

# Class: ArchiveBlockDatabaseClient<X\>

[archive](../modules/archive.md).ArchiveBlockDatabaseClient

## Type parameters

| Name |
| :------ |
| `X` |

## Hierarchy

- *ArchiveBlockDatabase*

  ↳ **ArchiveBlockDatabaseClient**

## Table of contents

### Constructors

- [constructor](archive.archiveblockdatabaseclient.md#constructor)

### Properties

- [directory](archive.archiveblockdatabaseclient.md#directory)
- [fetchFn](archive.archiveblockdatabaseclient.md#fetchfn)
- [parseItem](archive.archiveblockdatabaseclient.md#parseitem)

### Methods

- [getBlock](archive.archiveblockdatabaseclient.md#getblock)
- [getBlockHeader](archive.archiveblockdatabaseclient.md#getblockheader)
- [getUrl](archive.archiveblockdatabaseclient.md#geturl)

## Constructors

### constructor

\+ **new ArchiveBlockDatabaseClient**<X\>(`directory`: *string*, `parseItem`: (`x`: *string*) => X, `fetchFn`: (`url`: *string*) => *Promise*<``null`` \| string\>): [*ArchiveBlockDatabaseClient*](archive.archiveblockdatabaseclient.md)<X\>

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | *string* |
| `parseItem` | (`x`: *string*) => X |
| `fetchFn` | (`url`: *string*) => *Promise*<``null`` \| string\> |

**Returns:** [*ArchiveBlockDatabaseClient*](archive.archiveblockdatabaseclient.md)<X\>

Overrides: ArchiveBlockDatabase.constructor

Defined in: archive.ts:9

## Properties

### directory

• **directory**: *string*

___

### fetchFn

• **fetchFn**: (`url`: *string*) => *Promise*<``null`` \| string\>

#### Type declaration

▸ (`url`: *string*): *Promise*<``null`` \| string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |

**Returns:** *Promise*<``null`` \| string\>

___

### parseItem

• **parseItem**: (`x`: *string*) => X

#### Type declaration

▸ (`x`: *string*): X

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | *string* |

**Returns:** X

## Methods

### getBlock

▸ **getBlock**(`blockId`: *string*, `options?`: ArchiveGetBlockOptions): *Promise*<``null`` \| ArchiveBlockOfType<X\>\>

**`inheritdoc`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockId` | *string* |
| `options?` | ArchiveGetBlockOptions |

**Returns:** *Promise*<``null`` \| ArchiveBlockOfType<X\>\>

Overrides: ArchiveBlockDatabase.getBlock

Defined in: archive.ts:27

___

### getBlockHeader

▸ **getBlockHeader**(`blockId`: *string*): *Promise*<``null`` \| ArchiveBlockOfType<X\>\>

**`inheritdoc`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockId` | *string* |

**Returns:** *Promise*<``null`` \| ArchiveBlockOfType<X\>\>

Overrides: ArchiveBlockDatabase.getBlockHeader

Defined in: archive.ts:38

___

### getUrl

▸ **getUrl**(`blockId`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockId` | *string* |

**Returns:** *string*

Defined in: archive.ts:18
