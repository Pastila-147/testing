/** @jest-environment jsdom */

import cardValidator from '../cardValidator';

test.each([
  ['true for valid user card', '5512677915000009', true],
  ['true for valid user card', '341119173649118', true],
  ['false for invalid user card ', '36309816778173', false],
  ['false for invalid user card ', '17', false],
  ['false for invalid user card ', 'qwertyuiop', false],

])(('it should be %s'), (_, value, expected) => {
  expect(cardValidator(value)).toBe(expected);
});