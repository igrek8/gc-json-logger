/* eslint-disable @typescript-eslint/no-var-requires */

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
