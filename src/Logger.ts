import * as assert from 'assert';
import { AsyncLocalStorage } from 'async_hooks';
import { randomUUID } from 'crypto';

import { ILogger } from './ILogger';
import { LogEntry } from './types/LogEntry';
import { LogEntryMetadata } from './types/LogEntryMetadata';
import { Severity } from './types/Severity';
import { toJSON } from './utils/toJSON';

const ERROR_EVENT = 'type.googleapis.com/google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent';

/**
 * A function type which can format a log entry to a string
 */
type LogFormatter = (entry: LogEntry) => string

export class Logger implements ILogger {
  /**
   * Global log level
   */
  protected static level = Severity.INFO;

  /**
   * Global default user labels
   */
  protected static labels: Record<string, string | undefined> = {};

  /**
   * Default context logger
   */
  protected static appLogger: Logger = new Logger('Application');

  /**
   * Stores logger references in async storage
   */
  protected static storage = new AsyncLocalStorage<Logger>();

  /**
   * A formatter function which takes a log entry and formats it to a string
   */
  protected static formatter: LogFormatter = toJSON

  /**
   * Sets a global log level
   */
  public static setLevel(level: Severity): void {
    this.level = level;
  }

  /**
   * Sets global default user labels
   */
  public static setLabels(labels: Record<string, string | undefined>): void {
    this.labels = labels;
  }

  /**
   * Returns global default user labels
   */
  public static getLabels(): Record<string, string | undefined> {
    return this.labels;
  }

  /**
   * Sets a global formatter function to replace the default JSON.stringify based formatter.
   * This can be useful for developers running the application locally and presenting logs in
   * a more developer-friendly form.
   */
  public static setFormatter(formatter?: LogFormatter) {
    this.formatter = formatter || toJSON
  }

  /**
   * Calls a function with a given logger
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static runWith<T extends (...args: any[]) => any>(logger: Logger, cb: T): ReturnType<T> {
    return this.storage.run(logger, cb);
  }

  /**
   * Returns logger from async context
   * @returns
   */
  public static getLogger(): Logger {
    return this.storage.getStore() ?? this.appLogger;
  }

  /**
   * Logger unique identifier
   */
  protected readonly name: string;

  /**
   * Logger default user labels
   */
  protected labels: Record<string, string | undefined> = {};

  public constructor(name: string = randomUUID(), labels: Record<string, string | undefined> = {}) {
    this.name = name;
    this.setLabels(labels);
  }

  public log(severity: Severity, message: string, meta: LogEntryMetadata = {}): void {
    if (severity < Logger.level) {
      return;
    }

    const time = new Date().toISOString();

    const { labels, error, ...options } = meta;

    const level = Severity[severity];
    assert(level, `severity "${severity}" is not supported`);

    const entry: LogEntry = {
      ...options,
      severity: level,
      time,
      message,
    };

    if (error) {
      if (severity >= Severity.ERROR) {
        /**
         * Mark as error event
         *
         * https://cloud.google.com/error-reporting/docs/formatting-error-messages
         * https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report
         */
        entry['@type'] = ERROR_EVENT;
      }

      if (message !== error.message) {
        /**
         * Capture extra details
         */
        entry['reason'] = message;
      }

      /**
       * Capture error
       */
      entry['message'] = error.stack ?? error.message;
    }

    entry['logging.googleapis.com/operation'] = { id: this.name };

    /**
     * Add default user labels
     */
    const mergedLabels = { ...Logger.labels, ...this.labels, ...labels };

    if (Object.keys(mergedLabels).length > 0) {
      entry['logging.googleapis.com/labels'] = mergedLabels;
    }

    const channel = severity >= Severity.ERROR ? 'stderr' : 'stdout';
    process[channel].write(Logger.formatter(entry) + '\n');
  }

  public default(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.DEFAULT, message, meta);
  }

  public debug(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.DEBUG, message, meta);
  }

  public info(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.INFO, message, meta);
  }

  public notice(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.NOTICE, message, meta);
  }

  public warning(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.WARNING, message, meta);
  }

  public error(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.ERROR, message, meta);
  }

  public critical(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.CRITICAL, message, meta);
  }

  public alert(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.ALERT, message, meta);
  }

  public emergency(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.EMERGENCY, message, meta);
  }

  public static log(severity: Severity, message: string, meta?: LogEntryMetadata): void {
    Logger.getLogger().log(severity, message, meta);
  }

  public static default(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().default(message, meta);
  }

  public static debug(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().debug(message, meta);
  }

  public static info(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().info(message, meta);
  }

  public static notice(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().notice(message, meta);
  }

  public static warning(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().warning(message, meta);
  }

  public static error(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().error(message, meta);
  }

  public static critical(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().critical(message, meta);
  }

  public static alert(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().alert(message, meta);
  }

  public static emergency(message: string, meta?: LogEntryMetadata): void {
    this.getLogger().emergency(message, meta);
  }

  public static getName(): string {
    return this.getLogger().getName();
  }

  public setLabels(labels: Record<string, string | undefined>) {
    this.labels = labels;
  }

  public getLabels(): Record<string, string | undefined> {
    return this.labels;
  }

  public getName(): string {
    return this.name;
  }
}
