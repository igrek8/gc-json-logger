[gc-json-logger](README.md) / Exports

# gc-json-logger

## Table of contents

### Interfaces

- [HttpRequest](interfaces/HttpRequest.md)
- [ILogger](interfaces/ILogger.md)
- [LogEntry](interfaces/LogEntry.md)
- [LogEntryMetadata](interfaces/LogEntryMetadata.md)
- [LogEntryOperation](interfaces/LogEntryOperation.md)

### Type Aliases

- [LogFormatter](modules.md#logformatter)

### Classes

- [Logger](classes/Logger.md)

### Enumerations

- [Severity](enums/Severity.md)

## Type Aliases

### LogFormatter

Ƭ **LogFormatter**: (`entry`: [`LogEntry`](interfaces/LogEntry.md)) => `string`

#### Type declaration

▸ (`entry`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`LogEntry`](interfaces/LogEntry.md) |

##### Returns

`string`

#### Defined in

[types/LogFormatter.ts:3](https://github.com/igrek8/gc-json-logger/blob/20c9a2e/src/types/LogFormatter.ts#L3)
