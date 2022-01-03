const reverse = require('./stringReversal');

test('return string in reverse order', () => {
  expect(reverse('Alex')).toBe('xelA');
});
