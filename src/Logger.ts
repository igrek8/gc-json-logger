import * as assert from 'assert';
import { createHook, executionAsyncId, executionAsyncResource } from 'async_hooks';
import { v4 } from 'uuid';
import { ILogger } from './ILogger';

import { LogEntry } from './types/LogEntry';
import { LogEntryMetadata } from './types/LogEntryMetadata';
import { Severity } from './types/Severity';
import { toJSON } from './utils/toJSON';

const init = 1;

const state = Symbol();

type Context = Record<symbol, Logger | undefined>;

const ERROR_EVENT = 'type.googleapis.com/google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent';

export class Logger implements ILogger {
  /**
   * Global log level
   */
  protected static level = Severity.INFO;

  /**
   * Global context logger
   */
  protected static appLogger: Logger;

  static {
    createHook({
      init: (_asyncId, _type, _triggerAsyncId, resource: Context): void => {
        const parent = executionAsyncResource() as Context;
        if (parent) resource[state] = parent[state];
      },
    }).enable();
  }

  /**
   * Sets a global log level
   */
  public static setLevel(level: Severity): void {
    this.level = level;
  }

  /**
   * Creates a new or returns already initialized logger.
   * The initial call with a name argument will store that logger in the context.
   * Subsequent calls without the `name` argument will result in the same logger instance.
   *
   * ```ts
   * const app = Logger.getLogger('Application');
   *
   * app.info('main'); // Logs as "Application"
   * Logger.getLogger().info('main'); // Logs as "Application"
   * Logger.getLogger('Application').info('main'); // Logs as "Application"
   *
   * setTimeout(() => {
   *   const id = "abc";
   *   const logger = Logger.getLogger(id);
   *   logger.info('context'); // Logs as "id"
   *   Logger.getLogger().info('context'); // Logs as "id"
   *   Logger.getLogger(id).info('context'); // Logs as "id"
   *
   *   const custom = Logger.getLogger('custom');
   *   custom.info('context'); // Logs as "custom"
   * });
   * ```
   */
  public static getLogger(name?: string): Logger {
    if (executionAsyncId() === init) {
      const logger = this.appLogger ?? new Logger(name ?? 'Application');
      this.appLogger ??= logger; /* Store initial app logger */
      if (name && logger.name !== name) return new Logger(name);
      return logger;
    } else {
      const ctx = executionAsyncResource() as Context;
      const logger = ctx[state] ?? new Logger(name);
      ctx[state] ??= logger; /* Store initial logger */
      if (name && logger.name !== name) return new Logger(name);
      return logger;
    }
  }

  /**
   * Logger unique identifier
   */
  protected readonly name: string;

  protected constructor(name: string = v4()) {
    this.name = name;
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
      /**
       * https://cloud.google.com/error-reporting/docs/formatting-error-messages
       * https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report
       */
      if (severity >= Severity.ERROR) entry['@type'] = ERROR_EVENT;
      entry['message'] = error.stack ?? error.message;
      entry['details'] = message;
    }

    entry['logging.googleapis.com/operation'] = { id: this.name };
    entry['logging.googleapis.com/labels'] = labels;

    const channel = severity >= Severity.ERROR ? 'stderr' : 'stdout';
    process[channel].write(toJSON(entry) + '\n');
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
}
