[gc-json-logger](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

## Implements

- [`ILogger`](../interfaces/ILogger.md)

## Table of contents

### Methods

- [alert](Logger.md#alert)
- [alert](Logger.md#alert-1)
- [critical](Logger.md#critical)
- [critical](Logger.md#critical-1)
- [debug](Logger.md#debug)
- [debug](Logger.md#debug-1)
- [default](Logger.md#default)
- [default](Logger.md#default-1)
- [emergency](Logger.md#emergency)
- [emergency](Logger.md#emergency-1)
- [error](Logger.md#error)
- [error](Logger.md#error-1)
- [getLabels](Logger.md#getlabels)
- [getLabels](Logger.md#getlabels-1)
- [getLogger](Logger.md#getlogger)
- [info](Logger.md#info)
- [info](Logger.md#info-1)
- [log](Logger.md#log)
- [log](Logger.md#log-1)
- [notice](Logger.md#notice)
- [notice](Logger.md#notice-1)
- [setLabels](Logger.md#setlabels)
- [setLabels](Logger.md#setlabels-1)
- [setLevel](Logger.md#setlevel)
- [setLogger](Logger.md#setlogger)
- [warning](Logger.md#warning)
- [warning](Logger.md#warning-1)

### Constructors

- [constructor](Logger.md#constructor)

## Methods

### alert

▸ `Static` **alert**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:211](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L211)

___

### alert

▸ **alert**(`message`, `meta?`): `void`

A person must take an action immediately.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[alert](../interfaces/ILogger.md#alert)

#### Defined in

[Logger.ts:171](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L171)

___

### critical

▸ `Static` **critical**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:207](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L207)

___

### critical

▸ **critical**(`message`, `meta?`): `void`

Critical events cause more severe problems or outages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[critical](../interfaces/ILogger.md#critical)

#### Defined in

[Logger.ts:167](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L167)

___

### debug

▸ `Static` **debug**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:187](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L187)

___

### debug

▸ **debug**(`message`, `meta?`): `void`

Debug or trace information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[debug](../interfaces/ILogger.md#debug)

#### Defined in

[Logger.ts:147](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L147)

___

### default

▸ `Static` **default**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:183](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L183)

___

### default

▸ **default**(`message`, `meta?`): `void`

The log entry has no assigned severity level.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[default](../interfaces/ILogger.md#default)

#### Defined in

[Logger.ts:143](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L143)

___

### emergency

▸ `Static` **emergency**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:215](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L215)

___

### emergency

▸ **emergency**(`message`, `meta?`): `void`

One or more systems are unusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[emergency](../interfaces/ILogger.md#emergency)

#### Defined in

[Logger.ts:175](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L175)

___

### error

▸ `Static` **error**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:203](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L203)

___

### error

▸ **error**(`message`, `meta?`): `void`

Error events are likely to cause problems.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[error](../interfaces/ILogger.md#error)

#### Defined in

[Logger.ts:163](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L163)

___

### getLabels

▸ `Static` **getLabels**(): `Record`<`string`, `undefined` \| `string`\>

Returns global default user labels

#### Returns

`Record`<`string`, `undefined` \| `string`\>

#### Defined in

[Logger.ts:51](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L51)

___

### getLabels

▸ **getLabels**(): `Record`<`string`, `undefined` \| `string`\>

Returns default user labels

#### Returns

`Record`<`string`, `undefined` \| `string`\>

#### Implementation of

[ILogger](../interfaces/ILogger.md).[getLabels](../interfaces/ILogger.md#getlabels)

#### Defined in

[Logger.ts:223](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L223)

___

### getLogger

▸ `Static` **getLogger**(): [`Logger`](Logger.md)

Returns logger from async context

#### Returns

[`Logger`](Logger.md)

#### Defined in

[Logger.ts:66](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L66)

___

### info

▸ `Static` **info**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:191](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L191)

___

### info

▸ **info**(`message`, `meta?`): `void`

Routine information, such as ongoing status or performance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[info](../interfaces/ILogger.md#info)

#### Defined in

[Logger.ts:151](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L151)

___

### log

▸ `Static` **log**(`severity`, `message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `severity` | [`Severity`](../enums/Severity.md) |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:179](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L179)

___

### log

▸ **log**(`severity`, `message`, `meta?`): `void`

Log an event by specifying severity level

#### Parameters

| Name | Type |
| :------ | :------ |
| `severity` | [`Severity`](../enums/Severity.md) |
| `message` | `string` |
| `meta` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[log](../interfaces/ILogger.md#log)

#### Defined in

[Logger.ts:85](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L85)

___

### notice

▸ `Static` **notice**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:195](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L195)

___

### notice

▸ **notice**(`message`, `meta?`): `void`

Normal but significant events, such as start up, shut down, or a configuration change.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[notice](../interfaces/ILogger.md#notice)

#### Defined in

[Logger.ts:155](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L155)

___

### setLabels

▸ `Static` **setLabels**(`labels`): `void`

Sets global default user labels

#### Parameters

| Name | Type |
| :------ | :------ |
| `labels` | `Record`<`string`, `undefined` \| `string`\> |

#### Returns

`void`

#### Defined in

[Logger.ts:44](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L44)

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

#### Implementation of

[ILogger](../interfaces/ILogger.md).[setLabels](../interfaces/ILogger.md#setlabels)

#### Defined in

[Logger.ts:219](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L219)

___

### setLevel

▸ `Static` **setLevel**(`level`): `void`

Sets a global log level

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`Severity`](../enums/Severity.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:37](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L37)

___

### setLogger

▸ `Static` **setLogger**(`logger`): `void`

Sets logger to async context

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | [`Logger`](Logger.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:58](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L58)

___

### warning

▸ `Static` **warning**(`message`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Defined in

[Logger.ts:199](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L199)

___

### warning

▸ **warning**(`message`, `meta?`): `void`

Warning events might cause problems.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `meta?` | [`LogEntryMetadata`](../interfaces/LogEntryMetadata.md) |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[warning](../interfaces/ILogger.md#warning)

#### Defined in

[Logger.ts:159](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L159)

## Constructors

### constructor

• **new Logger**(`name?`, `labels?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `labels` | `Record`<`string`, `undefined` \| `string`\> |

#### Defined in

[Logger.ts:80](https://github.com/igrek8/gc-json-logger/blob/3a1b9c7/src/Logger.ts#L80)
