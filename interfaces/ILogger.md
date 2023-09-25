[gc-json-logger](../README.md) / [Exports](../modules.md) / ILogger

# Interface: ILogger

## Implemented by

- [`Logger`](../classes/Logger.md)

## Table of contents

### Methods

- [alert](ILogger.md#alert)
- [critical](ILogger.md#critical)
- [debug](ILogger.md#debug)
- [default](ILogger.md#default)
- [emergency](ILogger.md#emergency)
- [error](ILogger.md#error)
- [getLabels](ILogger.md#getlabels)
- [getName](ILogger.md#getname)
- [info](ILogger.md#info)
- [log](ILogger.md#log)
- [notice](ILogger.md#notice)
- [setLabels](ILogger.md#setlabels)
- [warning](ILogger.md#warning)

## Methods

### alert

▸ **alert**(`message`, `meta?`): `void`

A person must take an action immediately.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:48](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L48)

___

### critical

▸ **critical**(`message`, `meta?`): `void`

Critical events cause more severe problems or outages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:43](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L43)

___

### debug

▸ **debug**(`message`, `meta?`): `void`

Debug or trace information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:18](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L18)

___

### default

▸ **default**(`message`, `meta?`): `void`

The log entry has no assigned severity level.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:13](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L13)

___

### emergency

▸ **emergency**(`message`, `meta?`): `void`

One or more systems are unusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:53](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L53)

___

### error

▸ **error**(`message`, `meta?`): `void`

Error events are likely to cause problems.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:38](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L38)

___

### getLabels

▸ **getLabels**(): `Record`<`string`, `undefined` \| `string`\>

Returns default user labels

#### Returns

`Record`<`string`, `undefined` \| `string`\>

#### Defined in

[ILogger.ts:63](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L63)

___

### getName

▸ **getName**(): `string`

Returns logger name

#### Returns

`string`

#### Defined in

[ILogger.ts:68](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L68)

___

### info

▸ **info**(`message`, `meta?`): `void`

Routine information, such as ongoing status or performance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:23](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L23)

___

### log

▸ **log**(`severity`, `message`, `meta?`): `void`

Log an event by specifying severity level

#### Parameters

| Name | Type |
| :------ | :------ |
| `severity` | [`Severity`](../enums/Severity.md) |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:8](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L8)

___

### notice

▸ **notice**(`message`, `meta?`): `void`

Normal but significant events, such as start up, shut down, or a configuration change.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:28](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L28)

___

### setLabels

▸ **setLabels**(`labels`): `void`

Sets default user labels

#### Parameters

| Name | Type |
| :------ | :------ |
| `labels` | `Record`<`string`, `undefined` \| `string`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:58](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L58)

___

### warning

▸ **warning**(`message`, `meta?`): `void`

Warning events might cause problems.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:33](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/ILogger.ts#L33)
