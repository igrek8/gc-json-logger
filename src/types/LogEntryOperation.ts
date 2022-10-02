export interface LogEntryOperation {
  /**
   * Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
   */
  id?: string;
}
