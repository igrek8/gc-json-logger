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
