import { LogEntry } from './LogEntry';

export type LogFormatter = (entry: LogEntry) => string;
