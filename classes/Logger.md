[gc-json-logger](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

## Implements

- [`ILogger`](../interfaces/ILogger.md)

## Table of contents

### Methods

- [alert](Logger.md#alert)
- [critical](Logger.md#critical)
- [debug](Logger.md#debug)
- [default](Logger.md#default)
- [emergency](Logger.md#emergency)
- [error](Logger.md#error)
- [getLogger](Logger.md#getlogger)
- [info](Logger.md#info)
- [log](Logger.md#log)
- [notice](Logger.md#notice)
- [setLevel](Logger.md#setlevel)
- [warning](Logger.md#warning)

## Methods

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

[Logger.ts:158](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L158)

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

[Logger.ts:154](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L154)

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

[Logger.ts:134](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L134)

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

[Logger.ts:130](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L130)

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

[Logger.ts:162](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L162)

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

[Logger.ts:150](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L150)

___

### getLogger

▸ `Static` **getLogger**(`name?`): [`Logger`](Logger.md)

Creates a new or returns already initialized logger.
The initial call with a name argument will store that logger in the context.
Subsequent calls without the `name` argument will result in the same logger instance.

```ts
const app = Logger.getLogger('Application');

app.info('main'); // Logs as "Application"
Logger.getLogger().info('main'); // Logs as "Application"
Logger.getLogger('Application').info('main'); // Logs as "Application"

setTimeout(() => {
  const id = "abc";
  const logger = Logger.getLogger(id);
  logger.info('context'); // Logs as "id"
  Logger.getLogger().info('context'); // Logs as "id"
  Logger.getLogger(id).info('context'); // Logs as "id"

  const custom = Logger.getLogger('custom');
  custom.info('context'); // Logs as "custom"
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`Logger`](Logger.md)

#### Defined in

[Logger.ts:70](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L70)

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

[Logger.ts:138](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L138)

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

[Logger.ts:94](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L94)

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

[Logger.ts:142](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L142)

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

[Logger.ts:42](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L42)

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

[Logger.ts:146](https://github.com/igrek8/gc-json-logger/blob/39d7d9a/src/Logger.ts#L146)
