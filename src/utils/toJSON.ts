import { collectObjectProperties } from './collectObjectProperties';

export function toJSON(data: unknown) {
  const visited = new WeakSet();
  return JSON.stringify(data, (_, value: unknown) => {
    if (value && typeof value === 'object') {
      if (visited.has(value)) {
        return '[Circular]';
      }
      visited.add(value);
      if (value instanceof Error) {
        return collectObjectProperties(value);
      }
    }
    return value;
  });
}
