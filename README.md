# Async Context [Structured Logger](https://cloud.google.com/logging/docs/structured-logging) for GCP projects

Allows printing logs to `stdout`, `stderr` for further action in Google Cloud platform. Given that log agent ingests logs from `stdout` streams when running in GKE.

[![NPM](https://badgen.net/npm/v/gc-json-logger)](https://www.npmjs.com/gc-json-logger)
[![Coverage](https://codecov.io/gh/igrek8/gc-json-logger/branch/main/graph/badge.svg)](https://codecov.io/gh/igrek8/gc-json-logger)
![Health](https://badgen.net/github/checks/igrek8/gc-json-logger)
![License](https://badgen.net/github/license/igrek8/gc-json-logger)
[![Runkit](https://badgen.net/badge/runkit/playground/cyan)](https://npm.runkit.com/gc-json-logger)

## Precaution

A logger makes use of [`async_hooks`](https://nodejs.org/api/async_hooks.html#async-hooks) module which is currently **experimental**. However, the use of `async_hooks` mechanism was at basic.

## Installation

```bash
npm install --save gc-json-logger

yarn add gc-json-logger
```

## View in Google Cloud Logging

![Google Cloud Logging](./media/google-cloud-logging.png)

## Integration

```ts
const { Logger } = require('gc-json-logger');
const { createServer } = require('http');

let job = 0;

function scheduleJob() {
  /**
   * 4) Retrieving a context logger
   */
  const logger = Logger.getLogger();

  /**
   * 5) Logs with job id from the parent
   */
  logger.info('scheduling job');

  setTimeout(() => {
    /**
     * 6) Logs with job id from the parent
     */
    logger.info('job done');
  }, 3000);
}

const server = createServer((_, res) => {
  job++;

  /**
   * 1) Setting a context logger using job id
   */
  const logger = new Logger(job);
  Logger.setLogger(logger);

  /**
   * 2) Logs with with job id
   */
  logger.info('creating a new job');

  /**
   * 3) Calls another function that uses the context
   */
  scheduleJob();

  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({ id: job, status: 'scheduled' }));
});

server.listen(8080);
```

```jsonc
{
  "severity": "INFO",
  "time": "2022-12-03T10:00:00.000Z",
  "message": "creating a new job",
  "logging.googleapis.com/operation": { "id": 1 } // <- always includes context id
}

{
  "severity": "INFO",
  "time": "2022-12-03T10:00:00.398Z",
  "message": "scheduling job",
  "logging.googleapis.com/operation": { "id": 1 } // <- always includes context id
}

{
  "severity": "INFO",
  "time": "2022-12-03T10:00:01.000Z",
  "message": "job done",
  "logging.googleapis.com/operation": { "id": 1 } // <- always includes context id
}
```
