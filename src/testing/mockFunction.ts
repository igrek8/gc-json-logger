export function mockFunction<T extends jest.MockableFunction>(cb: T) {
  return cb as jest.MockedFunction<typeof cb>;
}
