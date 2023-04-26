[gc-json-logger](../README.md) / [Exports](../modules.md) / LogEntry

# Interface: LogEntry

## Indexable

▪ [key: `string`]: `unknown`

## Table of contents

### Properties

- [@type](LogEntry.md#@type)
- [httpRequest](LogEntry.md#httprequest)
- [logging.googleapis.com/labels](LogEntry.md#logging.googleapis.com/labels)
- [logging.googleapis.com/operation](LogEntry.md#logging.googleapis.com/operation)
- [message](LogEntry.md#message)
- [severity](LogEntry.md#severity)
- [time](LogEntry.md#time)

## Properties

### @type

• `Optional` **@type**: ``"type.googleapis.com/google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent"``

If log entry contains a field with an `@type` specifier, and the value for that specifier is `type.googleapis.com/google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent`, then Error Reporting evaluates the log entry as though all required fields are present and captures the error event.

**`See`**

https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report

#### Defined in

[types/LogEntry.ts:52](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntry.ts#L52)

___

### httpRequest

• `Optional` **httpRequest**: [`HttpRequest`](HttpRequest.md)

A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.

#### Defined in

[types/LogEntry.ts:29](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntry.ts#L29)

___

### logging.googleapis.com/labels

• `Optional` **logging.googleapis.com/labels**: `Record`<`string`, `undefined` \| `string`\>

Optional. A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined.

User-defined labels are arbitrary key, value pairs that you can use to classify logs.

System-defined labels are defined by GCP services for platform logs. They have two components - a service namespace component and the attribute name. For example: compute.googleapis.com/resourceName.

Cloud Logging truncates label keys that exceed 512 B and label values that exceed 64 KB upon their associated log entry being written. The truncation is indicated by an ellipsis at the end of the character string.

#### Defined in

[types/LogEntry.ts:45](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntry.ts#L45)

___

### logging.googleapis.com/operation

• `Optional` **logging.googleapis.com/operation**: [`LogEntryOperation`](LogEntryOperation.md)

Optional. Information about an operation associated with the log entry, if applicable.

#### Defined in

[types/LogEntry.ts:34](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntry.ts#L34)

___

### message

• **message**: `string`

"message": "There was an error in the application."

Note: message is saved as textPayload if it is the only field remaining after the Logging agent strips the other special-purpose fields and detect_json wasn't enabled; otherwise message remains in jsonPayload. detect_json is not applicable to managed logging environments like Google Kubernetes Engine. If your log entry contains an exception stack trace, the exception stack trace should be set in this message JSON log field, so that the exception stack trace can be parsed and saved to Error Reporting.

#### Defined in

[types/LogEntry.ts:15](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntry.ts#L15)

___

### severity

• **severity**: `string`

Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT.

#### Defined in

[types/LogEntry.ts:8](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntry.ts#L8)

___

### time

• **time**: `string`

Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.

Incoming log entries must have timestamps that don't exceed the logs retention period in the past, and that don't exceed 24 hours in the future. Log entries outside those time boundaries aren't ingested by Logging.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

#### Defined in

[types/LogEntry.ts:24](https://github.com/igrek8/gc-json-logger/blob/998314d/src/types/LogEntry.ts#L24)
