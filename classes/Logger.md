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
- [getName](Logger.md#getname)
- [getName](Logger.md#getname-1)
- [info](Logger.md#info)
- [info](Logger.md#info-1)
- [log](Logger.md#log)
- [log](Logger.md#log-1)
- [notice](Logger.md#notice)
- [notice](Logger.md#notice-1)
- [runWith](Logger.md#runwith)
- [setLabels](Logger.md#setlabels)
- [setLabels](Logger.md#setlabels-1)
- [setLevel](Logger.md#setlevel)
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

[Logger.ts:212](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L212)

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

[Logger.ts:172](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L172)

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

[Logger.ts:208](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L208)

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

[Logger.ts:168](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L168)

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

[Logger.ts:188](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L188)

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

[Logger.ts:148](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L148)

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

[Logger.ts:184](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L184)

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

[Logger.ts:144](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L144)

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

[Logger.ts:216](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L216)

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

[Logger.ts:176](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L176)

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

[Logger.ts:204](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L204)

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

[Logger.ts:164](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L164)

___

### getLabels

▸ `Static` **getLabels**(): `Record`<`string`, `undefined` \| `string`\>

Returns global default user labels

#### Returns

`Record`<`string`, `undefined` \| `string`\>

#### Defined in

[Logger.ts:51](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L51)

___

### getLabels

▸ **getLabels**(): `Record`<`string`, `undefined` \| `string`\>

Returns default user labels

#### Returns

`Record`<`string`, `undefined` \| `string`\>

#### Implementation of

[ILogger](../interfaces/ILogger.md).[getLabels](../interfaces/ILogger.md#getlabels)

#### Defined in

[Logger.ts:228](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L228)

___

### getLogger

▸ `Static` **getLogger**(): [`Logger`](Logger.md)

Returns logger from async context

#### Returns

[`Logger`](Logger.md)

#### Defined in

[Logger.ts:67](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L67)

___

### getName

▸ `Static` **getName**(): `string`

#### Returns

`string`

#### Defined in

[Logger.ts:220](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L220)

___

### getName

▸ **getName**(): `string`

Returns logger name

#### Returns

`string`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[getName](../interfaces/ILogger.md#getname)

#### Defined in

[Logger.ts:232](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L232)

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

[Logger.ts:192](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L192)

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

[Logger.ts:152](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L152)

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

[Logger.ts:180](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L180)

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

[Logger.ts:86](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L86)

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

[Logger.ts:196](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L196)

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

[Logger.ts:156](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L156)

___

### runWith

▸ `Static` **runWith**<`T`\>(`logger`, `cb`): `ReturnType`<`T`\>

Calls a function with a given logger

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | [`Logger`](Logger.md) |
| `cb` | `T` |

#### Returns

`ReturnType`<`T`\>

#### Defined in

[Logger.ts:59](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L59)

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

[Logger.ts:44](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L44)

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

[Logger.ts:224](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L224)

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

[Logger.ts:37](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L37)

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

[Logger.ts:200](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L200)

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

[Logger.ts:160](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L160)

## Constructors

### constructor

• **new Logger**(`name?`, `labels?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `labels` | `Record`<`string`, `undefined` \| `string`\> |

#### Defined in

[Logger.ts:81](https://github.com/igrek8/gc-json-logger/blob/b01041a/src/Logger.ts#L81)
