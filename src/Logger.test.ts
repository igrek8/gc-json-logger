import { randomUUID } from 'crypto';
import { Logger } from './Logger';
import { Severity } from './types/Severity';
import { toJSON } from './utils/toJSON';

jest.mock('async_hooks');
jest.mock('./utils/toJSON');
jest.mock('crypto', () => ({
  ...jest.requireActual('crypto'),
  randomUUID: jest.fn(),
}));

jest.useFakeTimers();
jest.setSystemTime(0);

describe('Logger', () => {
  it('fallback to application logger', async () => {
    jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
    Logger.info('Running');
    expect(toJSON).toHaveBeenCalledWith({
      time: '1970-01-01T00:00:00.000Z',
      severity: 'INFO',
      message: 'Running',
      'logging.googleapis.com/labels': undefined,
      'logging.googleapis.com/operation': { id: 'Application' },
    });
  });

  it('logs to stdout', async () => {
    jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
    const logger = new Logger('context');
    Logger.setLogger(logger);
    Logger.setLabels({ tag: '1' });
    Logger.info('Running', { pid: 1 });
    expect(toJSON).toHaveBeenCalledWith({
      time: '1970-01-01T00:00:00.000Z',
      severity: 'INFO',
      message: 'Running',
      pid: 1,
      'logging.googleapis.com/labels': { tag: '1' },
      'logging.googleapis.com/operation': { id: 'context' },
    });
  });

  it('sets global user labels', async () => {
    Logger.setLabels({ tag: '1' });
    expect(Logger.getLabels()).toEqual({ tag: '1' });
  });

  it('sets local user labels', async () => {
    const logger = new Logger('context');
    logger.setLabels({ tag: '1' });
    expect(logger.getLabels()).toEqual({ tag: '1' });
  });

  it('fallback to uuid', async () => {
    (randomUUID as jest.MockedFn<typeof randomUUID>).mockReturnValueOnce('00000000-0000-0000-0000-000000000000');
    jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
    const logger = new Logger();
    Logger.setLogger(logger);
    Logger.setLabels({});
    Logger.info('Running');
    expect(toJSON).toHaveBeenCalledWith({
      time: '1970-01-01T00:00:00.000Z',
      severity: 'INFO',
      message: 'Running',
      'logging.googleapis.com/labels': undefined,
      'logging.googleapis.com/operation': { id: '00000000-0000-0000-0000-000000000000' },
    });
  });

  it('disables logging below level', async () => {
    const stdout = jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
    const logger = new Logger('context');
    Logger.setLogger(logger);
    Logger.setLabels({});
    Logger.setLevel(Severity.INFO);
    Logger.log(Severity.DEBUG, 'Launching');
    expect(stdout).not.toHaveBeenCalled();
  });

  it('logs to stderr', async () => {
    jest.spyOn(process.stderr, 'write').mockImplementation(() => true);
    const logger = new Logger('context');
    Logger.setLogger(logger);
    Logger.setLabels({});
    const error = new Error('ECONNRESET');
    Logger.error('Remote service is down', { error });
    expect(toJSON).toHaveBeenLastCalledWith({
      severity: 'ERROR',
      time: '1970-01-01T00:00:00.000Z',
      message: error.stack,
      '@type': 'type.googleapis.com/google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent',
      reason: 'Remote service is down',
      'logging.googleapis.com/labels': undefined,
      'logging.googleapis.com/operation': { id: 'context' },
    });
  });

  it('fallbacks to error message', async () => {
    jest.spyOn(process.stderr, 'write').mockImplementation(() => true);
    const logger = new Logger('context');
    Logger.setLogger(logger);
    Logger.setLabels({});
    const error = new Error('ECONNRESET');
    delete error.stack;
    Logger.error('Remote service is down', { error });
    expect(toJSON).toHaveBeenCalledWith({
      time: '1970-01-01T00:00:00.000Z',
      severity: 'ERROR',
      message: error.message,
      reason: 'Remote service is down',
      '@type': 'type.googleapis.com/google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent',
      'logging.googleapis.com/labels': undefined,
      'logging.googleapis.com/operation': { id: 'context' },
    });
  });

  it.each(['default', 'debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency'] as const)(
    'logs %s',
    (severity) => {
      Logger.setLevel(Severity.DEFAULT);
      jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
      jest.spyOn(process.stderr, 'write').mockImplementation(() => true);
      Logger[severity]('test');
      expect(toJSON).toHaveBeenCalledWith(
        expect.objectContaining({
          time: '1970-01-01T00:00:00.000Z',
          severity: severity.toUpperCase(),
          message: 'test',
        })
      );
    }
  );
});
