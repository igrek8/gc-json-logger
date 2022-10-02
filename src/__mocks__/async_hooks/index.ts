module.exports = {
  ...jest.requireActual('async_hooks'),
  executionAsyncId: jest.fn(() => 1),
};
