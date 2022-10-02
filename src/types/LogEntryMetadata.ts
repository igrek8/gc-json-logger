import { HttpRequest } from './HttpRequest';

export interface LogEntryMetadata {
  /**
   * Any other field
   */
  [key: string]: unknown;

  /**
   * Optional. Information about the HTTP request associated with this log entry, if applicable.
   *
   * https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest
   */
  httpRequest?: HttpRequest;

  /**
   * Optional. A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined.
   *
   * User-defined labels are arbitrary key, value pairs that you can use to classify logs.
   *
   * System-defined labels are defined by GCP services for platform logs. They have two components - a service namespace component and the attribute name. For example: compute.googleapis.com/resourceName.
   *
   * Cloud Logging truncates label keys that exceed 512 B and label values that exceed 64 KB upon their associated log entry being written. The truncation is indicated by an ellipsis at the end of the character string.
   */
  labels?: Record<string, string>;

  /**
   * Reports to Google Cloud Error Reporting
   *
   * https://cloud.google.com/error-reporting/docs/formatting-error-messages
   */
  error?: Error;
}
