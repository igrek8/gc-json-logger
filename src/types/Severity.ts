export enum Severity {
  /* The log entry has no assigned severity level. */
  DEFAULT = 0,
  /* Debug or trace information. */
  DEBUG = 100,
  /* Routine information, such as ongoing status or performance. */
  INFO = 200,
  /* Normal but significant events, such as start up, shut down, or a configuration change. */
  NOTICE = 300,
  /* Warning events might cause problems. */
  WARNING = 400,
  /* Error events are likely to cause problems. */
  ERROR = 500,
  /* Critical events cause more severe problems or outages. */
  CRITICAL = 600,
  /* A person must take an action immediately. */
  ALERT = 700,
  /* One or more systems are unusable. */
  EMERGENCY = 800,
}
