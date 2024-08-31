import { greet } from './index';

test('greet function', () => {
  const a = 1;
  expect(greet('World')).toBe('Hello, World!');
});
