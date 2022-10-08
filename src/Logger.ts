import assert from 'assert';
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
   * The initial call with a name argument will store that logger with in the context.
   * Subsequent calls without the `name` argument will result in the same logger instance.
   *
   * ```ts
   * const app = Logger.getLogger('app');
   *
   * app.info('main'); // Logs as "app"
   * Logger.getLogger().info('main'); // Logs as "app"
   * Logger.getLogger('app').info('main'); // Logs as "app"
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
      const logger = this.appLogger ?? new Logger(name ?? 'app');
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

  /**
   * Log an event by specifying severity level
   */
  public log(severity: Severity, message: string, meta: LogEntryMetadata = {}): void {
    if (severity < Logger.level) {
      return;
    }

    const { httpRequest, labels, error, ..._meta } = meta;

    const level = Severity[severity];
    assert(level, `severity "${severity}" is not supported`);

    const entry: LogEntry = {
      severity: level,
      timestamp: new Date().toISOString(),
      message,
      error,
    };

    if (httpRequest) {
      entry.httpRequest = meta.httpRequest;
    }

    if (error instanceof Error && error.stack) {
      /**
       * https://cloud.google.com/error-reporting/docs/formatting-error-messages
       * https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report
       */
      entry['message'] = error.stack;
      _meta['message'] = message;
    }

    entry['logging.googleapis.com/operation'] = { id: this.name };
    entry['logging.googleapis.com/labels'] = labels;
    entry['meta'] = Object.keys(_meta).length ? _meta : undefined;

    const channel = severity >= Severity.ERROR ? 'stderr' : 'stdout';
    process[channel].write(toJSON(entry) + '\n');
  }

  /* The log entry has no assigned severity level. */
  public default(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.DEFAULT, message, meta);
  }

  /* Debug or trace information. */
  public debug(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.DEBUG, message, meta);
  }

  /* Routine information, such as ongoing status or performance. */
  public info(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.INFO, message, meta);
  }

  /* Normal but significant events, such as start up, shut down, or a configuration change. */
  public notice(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.NOTICE, message, meta);
  }

  /* Warning events might cause problems. */
  public warning(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.WARNING, message, meta);
  }

  /* Error events are likely to cause problems. */
  public error(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.ERROR, message, meta);
  }

  /* Critical events cause more severe problems or outages. */
  public critical(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.CRITICAL, message, meta);
  }

  /* A person must take an action immediately. */
  public alert(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.ALERT, message, meta);
  }

  /* One or more systems are unusable. */
  public emergency(message: string, meta?: LogEntryMetadata): void {
    this.log(Severity.EMERGENCY, message, meta);
  }
}
