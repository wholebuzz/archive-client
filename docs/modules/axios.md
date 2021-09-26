[@wholebuzz/archive-client](../README.md) / [Exports](../modules.md) / axios

# Module: axios

## Table of contents

### Functions

- [fetchContentWithAxiosAndGzip](axios.md#fetchcontentwithaxiosandgzip)
- [fetchContentWithAxiosAndPako](axios.md#fetchcontentwithaxiosandpako)
- [newAxiosCancelToken](axios.md#newaxioscanceltoken)
- [streamToString](axios.md#streamtostring)

## Functions

### fetchContentWithAxiosAndGzip

▸ **fetchContentWithAxiosAndGzip**(`url`: *string*, `config`: *Record*<string, any\>): *Promise*<string \| ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `config` | *Record*<string, any\> |

**Returns:** *Promise*<string \| ``null``\>

Defined in: axios.ts:29

___

### fetchContentWithAxiosAndPako

▸ **fetchContentWithAxiosAndPako**(`url`: *string*, `config`: *Record*<string, any\>): *Promise*<string \| ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `config` | *Record*<string, any\> |

**Returns:** *Promise*<string \| ``null``\>

Defined in: axios.ts:9

___

### newAxiosCancelToken

▸ **newAxiosCancelToken**(): CancelTokenSource

**Returns:** CancelTokenSource

Defined in: axios.ts:5

___

### streamToString

▸ **streamToString**(`stream`: Readable): *Promise*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | Readable |

**Returns:** *Promise*<string\>

Defined in: axios.ts:47
