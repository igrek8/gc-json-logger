import { isSerializable } from './isSerializable';

describe('isSerializable', () => {
  it('check if object implements serializable', () => {
    expect(isSerializable({ toJSON() {} })).toBe(true);
    expect(isSerializable({})).toBe(false);
  });
});
