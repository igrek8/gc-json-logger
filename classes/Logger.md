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
- [getLogger](Logger.md#getlogger)
- [info](Logger.md#info)
- [info](Logger.md#info-1)
- [log](Logger.md#log)
- [log](Logger.md#log-1)
- [notice](Logger.md#notice)
- [notice](Logger.md#notice-1)
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

[Logger.ts:198](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L198)

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

[Logger.ts:158](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L158)

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

[Logger.ts:194](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L194)

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

[Logger.ts:154](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L154)

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

[Logger.ts:174](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L174)

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

[Logger.ts:134](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L134)

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

[Logger.ts:170](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L170)

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

[Logger.ts:130](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L130)

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

[Logger.ts:202](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L202)

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

[Logger.ts:162](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L162)

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

[Logger.ts:190](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L190)

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

[Logger.ts:150](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L150)

___

### getLogger

▸ `Static` **getLogger**(): [`Logger`](Logger.md)

Returns logger from async context

#### Returns

[`Logger`](Logger.md)

#### Defined in

[Logger.ts:66](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L66)

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

[Logger.ts:178](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L178)

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

[Logger.ts:138](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L138)

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

[Logger.ts:166](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L166)

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

[Logger.ts:80](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L80)

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

[Logger.ts:182](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L182)

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

[Logger.ts:142](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L142)

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

[Logger.ts:48](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L48)

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

[Logger.ts:57](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L57)

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

[Logger.ts:186](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L186)

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

[Logger.ts:146](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L146)

## Constructors

### constructor

• **new Logger**(`name?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[Logger.ts:76](https://github.com/igrek8/gc-json-logger/blob/be99936/src/Logger.ts#L76)
