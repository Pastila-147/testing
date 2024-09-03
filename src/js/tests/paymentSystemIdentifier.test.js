import paymentSystemIdentifier from '../paymentSystemIdentifier';

test.each([
  ['visa', '4222222222222', 'visa'],
  ['mastercard', '5512677915000009', 'mastercard'],
  ['americanexpress', '341119173649118', 'americanexpress'],
  ['discover', '6011202619207687', 'discover'],
  ['jcb', '3536776776545358944', 'jcb'],
  ['diners', '30367491559263', 'diners'],
  ['mir', '2200770212727079', 'mir'],
])(('function should return %s'), (_, value, expected) => {
  const result = paymentSystemIdentifier(value);
  expect(result).toBe(expected);
});