import { Serializable } from '../types/Serializable';

export function isSerializable(value: unknown): value is Serializable {
  return (
    value !== null && typeof value === 'object' && typeof (value as Record<string, unknown>)['toJSON'] === 'function'
  );
}
