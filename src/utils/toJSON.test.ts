import { toJSON } from './toJSON';

describe('toJSON', () => {
  it('handles circular references', () => {
    const a: Record<string, object> = {};
    const b: Record<string, object> = {};
    a['b'] = b;
    b['a'] = a;
    expect(toJSON(b)).toBe('{"a":{"b":"[Circular]"}}');
  });

  it('collects object keys', () => {
    const object = { value: 100 };
    expect(toJSON(object)).toBe('{"value":100}');
  });

  it('serializes error', () => {
    const object = new Error('test');
    object.stack = 'Error: test';
    expect(toJSON(object)).toBe('{"stack":"Error: test","message":"test"}');
  });

  it('serializes values', () => {
    const value = 100;
    expect(toJSON(value)).toBe('100');
  });
});
