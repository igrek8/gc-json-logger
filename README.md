# Logger to enable [structured logging](https://cloud.google.com/logging/docs/structured-logging) in GKE powered projects

Allows printing structured logs to `stdout`, `stderr` for further action in Google Cloud platform. Given that log agent ingests logs from `stdout` streams when running in GKE.

[![NPM](https://badgen.net/npm/v/gc-json-logger)](https://www.npmjs.com/gc-json-logger)
[![Coverage Status](https://coveralls.io/repos/github/igrek8/gc-json-logger/badge.svg?branch=main)](https://coveralls.io/github/igrek8/gc-json-logger?branch=main)
![Health](https://badgen.net/github/checks/igrek8/gc-json-logger)
![License](https://badgen.net/github/license/igrek8/gc-json-logger)

## Precaution

A logger makes use of [`async_hooks`](https://nodejs.org/api/async_hooks.html#async-hooks) module which is currently **experimental**. However, the use of `async_hooks` mechanism was at basic.

## Installation

```bash
npm install --save gc-json-logger

yarn add gc-json-logger
```

## View in Google Cloud Logging

![Google Cloud Logging](./docs/images/google-cloud-logging.png)

## Integration

```ts
const { Logger } = require('gc-json-logger');

const app = Logger.getLogger('app');

app.info('main'); // Logs as "app"
Logger.getLogger().info('main'); // Logs as "app"
Logger.getLogger('app').info('main'); // Logs as "app"

setTimeout(() => {
  const id = 'abc';
  const logger = Logger.getLogger(id);
  logger.info('context'); // Logs as "id"
  Logger.getLogger().info('context'); // Logs as "id"
  Logger.getLogger(id).info('context'); // Logs as "id"

  const custom = Logger.getLogger('custom');
  custom.info('context'); // Logs as "custom"
});
```
