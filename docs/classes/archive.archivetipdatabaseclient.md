[@wholebuzz/archive-client](../README.md) / [Exports](../modules.md) / [archive](../modules/archive.md) / ArchiveTipDatabaseClient

# Class: ArchiveTipDatabaseClient

[archive](../modules/archive.md).ArchiveTipDatabaseClient

## Hierarchy

- *ArchiveTipDatabase*

  ↳ **ArchiveTipDatabaseClient**

## Table of contents

### Constructors

- [constructor](archive.archivetipdatabaseclient.md#constructor)

### Properties

- [directory](archive.archivetipdatabaseclient.md#directory)
- [fetchFn](archive.archivetipdatabaseclient.md#fetchfn)
- [hashFn](archive.archivetipdatabaseclient.md#hashfn)

### Methods

- [getTip](archive.archivetipdatabaseclient.md#gettip)
- [getUrl](archive.archivetipdatabaseclient.md#geturl)

## Constructors

### constructor

\+ **new ArchiveTipDatabaseClient**(`directory`: *string*, `hashFn`: (`x`: *string*) => *string*, `fetchFn`: (`url`: *string*) => *Promise*<``null`` \| string\>): [*ArchiveTipDatabaseClient*](archive.archivetipdatabaseclient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | *string* |
| `hashFn` | (`x`: *string*) => *string* |
| `fetchFn` | (`url`: *string*) => *Promise*<``null`` \| string\> |

**Returns:** [*ArchiveTipDatabaseClient*](archive.archivetipdatabaseclient.md)

Overrides: ArchiveTipDatabase.constructor

Defined in: archive.ts:46

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

### hashFn

• **hashFn**: (`x`: *string*) => *string*

#### Type declaration

▸ (`x`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | *string* |

**Returns:** *string*

## Methods

### getTip

▸ **getTip**(`db`: *string*, `key`: *string*, `value`: *string*): *Promise*<``null`` \| ArchiveTipRecord\>

**`inheritdoc`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | *string* |
| `key` | *string* |
| `value` | *string* |

**Returns:** *Promise*<``null`` \| ArchiveTipRecord\>

Overrides: ArchiveTipDatabase.getTip

Defined in: archive.ts:61

___

### getUrl

▸ **getUrl**(`db`: *string*, `key`: *string*, `value`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | *string* |
| `key` | *string* |
| `value` | *string* |

**Returns:** *string*

Defined in: archive.ts:55
