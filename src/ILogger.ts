import { LogEntryMetadata } from './types/LogEntryMetadata';
import { Severity } from './types/Severity';

export interface ILogger {
  /**
   * Log an event by specifying severity level
   */
  log(severity: Severity, message: string, meta?: LogEntryMetadata): void;

  /**
   * The log entry has no assigned severity level.
   */
  default(message: string, meta?: LogEntryMetadata): void;

  /**
   * Debug or trace information.
   */
  debug(message: string, meta?: LogEntryMetadata): void;

  /**
   * Routine information, such as ongoing status or performance.
   */
  info(message: string, meta?: LogEntryMetadata): void;

  /**
   * Normal but significant events, such as start up, shut down, or a configuration change.
   */
  notice(message: string, meta?: LogEntryMetadata): void;

  /**
   * Warning events might cause problems.
   */
  warning(message: string, meta?: LogEntryMetadata): void;

  /**
   * Error events are likely to cause problems.
   */
  error(message: string, meta?: LogEntryMetadata): void;

  /**
   * Critical events cause more severe problems or outages.
   */
  critical(message: string, meta?: LogEntryMetadata): void;

  /**
   * A person must take an action immediately.
   */
  alert(message: string, meta?: LogEntryMetadata): void;

  /**
   * One or more systems are unusable.
   */
  emergency(message: string, meta?: LogEntryMetadata): void;
}
