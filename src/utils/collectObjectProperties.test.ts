import { collectObjectProperties } from './collectObjectProperties';

describe('collectObjectProperties', () => {
  it('collects properties', () => {
    const object = { key: 'key' };
    expect(collectObjectProperties(object)).toEqual({ key: 'key' });
  });
});
