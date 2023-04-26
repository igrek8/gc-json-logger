[gc-json-logger](../README.md) / [Exports](../modules.md) / LogEntryMetadata

# Interface: LogEntryMetadata

## Indexable

▪ [key: `string`]: `unknown`

## Table of contents

### Properties

- [error](LogEntryMetadata.md#error)
- [httpRequest](LogEntryMetadata.md#httprequest)
- [labels](LogEntryMetadata.md#labels)

## Properties

### error

• `Optional` **error**: `Error`

Reports to Google Cloud Error Reporting

https://cloud.google.com/error-reporting/docs/formatting-error-messages

#### Defined in

[types/LogEntryMetadata.ts:32](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntryMetadata.ts#L32)

___

### httpRequest

• `Optional` **httpRequest**: [`HttpRequest`](HttpRequest.md)

Optional. Information about the HTTP request associated with this log entry, if applicable.

https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest

#### Defined in

[types/LogEntryMetadata.ts:14](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntryMetadata.ts#L14)

___

### labels

• `Optional` **labels**: `Record`<`string`, `undefined` \| `string`\>

Optional. A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined.

User-defined labels are arbitrary key, value pairs that you can use to classify logs.

System-defined labels are defined by GCP services for platform logs. They have two components - a service namespace component and the attribute name. For example: compute.googleapis.com/resourceName.

Cloud Logging truncates label keys that exceed 512 B and label values that exceed 64 KB upon their associated log entry being written. The truncation is indicated by an ellipsis at the end of the character string.

#### Defined in

[types/LogEntryMetadata.ts:25](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntryMetadata.ts#L25)
