import { executionAsyncId } from 'async_hooks';
import { v4 } from 'uuid';
import { Logger } from './Logger';
import { mockFunction } from './testing/mockFunction';
import { LogEntry } from './types/LogEntry';
import { Severity } from './types/Severity';
import { toJSON } from './utils/toJSON';

jest.mock('async_hooks');
jest.mock('uuid');
jest.mock('./utils/toJSON');

jest.useFakeTimers();
jest.setSystemTime(0);

describe('Logger', () => {
  const options: LogEntry = {
    severity: 'INFO',
    timestamp: '1970-01-01T00:00:00.000Z',
    message: 'test',
    'logging.googleapis.com/operation': {
      id: 'uuid',
    },
  };

  it('logs default', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.DEFAULT);
    Logger.getLogger().default('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'DEFAULT' });
    expect(stdout).toHaveBeenCalledWith('{}\n');
  });

  it('logs debug', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.DEBUG);
    Logger.getLogger().debug('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'DEBUG' });
    expect(stdout).toHaveBeenCalledWith('{}\n');
  });

  it('logs info', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.INFO);
    Logger.getLogger().info('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'INFO' });
    expect(stdout).toHaveBeenCalledWith('{}\n');
  });

  it('logs notice', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.NOTICE);
    Logger.getLogger().notice('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'NOTICE' });
    expect(stdout).toHaveBeenCalledWith('{}\n');
  });

  it('logs warning', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.WARNING);
    Logger.getLogger().warning('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'WARNING' });
    expect(stdout).toHaveBeenCalledWith('{}\n');
  });

  it('logs error', () => {
    const stderr = jest.spyOn(process.stderr, 'write');
    stderr.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.ERROR);
    Logger.getLogger().error('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'ERROR' });
    expect(stderr).toHaveBeenCalledWith('{}\n');
  });

  it('logs critical', () => {
    const stderr = jest.spyOn(process.stderr, 'write');
    stderr.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.CRITICAL);
    Logger.getLogger().critical('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'CRITICAL' });
    expect(stderr).toHaveBeenCalledWith('{}\n');
  });

  it('logs alert', () => {
    const stderr = jest.spyOn(process.stderr, 'write');
    stderr.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.ALERT);
    Logger.getLogger().alert('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'ALERT' });
    expect(stderr).toHaveBeenCalledWith('{}\n');
  });

  it('logs emergency', () => {
    const stderr = jest.spyOn(process.stderr, 'write');
    stderr.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.EMERGENCY);
    Logger.getLogger().emergency('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, severity: 'EMERGENCY' });
    expect(stderr).toHaveBeenCalledWith('{}\n');
  });

  it('mutes logs', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.INFO);
    Logger.getLogger().default('test');
    expect(toJSON).not.toHaveBeenCalledWith({ ...options, severity: 'DEFAULT' });
  });

  it('allows named logger', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.INFO);
    Logger.getLogger().info('test');
    Logger.getLogger('custom').info('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, 'logging.googleapis.com/operation': { id: 'uuid' } });
    expect(toJSON).toHaveBeenCalledWith({ ...options, 'logging.googleapis.com/operation': { id: 'custom' } });
  });

  it('creates app context logger', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    mockFunction(executionAsyncId).mockReturnValue(1);
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.setLevel(Severity.INFO);
    Logger.getLogger().info('test');
    Logger.getLogger('global').info('test');
    expect(toJSON).toHaveBeenCalledWith({ ...options, 'logging.googleapis.com/operation': { id: 'app' } });
    expect(toJSON).toHaveBeenCalledWith({ ...options, 'logging.googleapis.com/operation': { id: 'global' } });
  });

  it('stores first custom logger', () => {
    const logger = Logger.getLogger('test');
    expect(Logger.getLogger()).toBe(logger);
    expect(Logger.getLogger('test')).toBe(logger);
  });

  it('stores first app logger', () => {
    mockFunction(executionAsyncId).mockReturnValue(1);
    const logger = Logger.getLogger();
    expect(Logger.getLogger()).toBe(logger);
    expect(Logger.getLogger('app')).toBe(logger);
  });

  it('logs error', () => {
    const stderr = jest.spyOn(process.stderr, 'write');
    stderr.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    const error = new Error('test');
    error.stack = 'Error: test';
    Logger.setLevel(Severity.DEFAULT);
    Logger.getLogger().error('test', { error });
    expect(toJSON).toHaveBeenCalledWith({
      ...options,
      severity: 'ERROR',
      message: 'Error: test',
      error,
      meta: { message: 'test' },
    });
  });

  it('logs http request', () => {
    const stdout = jest.spyOn(process.stdout, 'write');
    stdout.mockImplementation(() => true);
    mockFunction(v4).mockReturnValue('uuid');
    mockFunction(toJSON).mockReturnValue('{}');
    Logger.getLogger().info('test', {
      httpRequest: {
        requestMethod: 'POST',
        status: 200,
      },
    });
    expect(toJSON).toHaveBeenCalledWith({
      ...options,
      severity: 'INFO',
      httpRequest: {
        requestMethod: 'POST',
        status: 200,
      },
    });
  });
});
