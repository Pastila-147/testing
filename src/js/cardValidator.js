// Алгоритм Луна
// export default function cardValidator(cardNumber) {
//   let sum = 0;
//   const num = String(cardNumber).replace(/\D/g, '');
//   const parity = num.length % 2 !== 0;
//   if (num === '') {
//     return false;
//   }
//   for (let i = 0; i < num.length; i += 1) {
//     let n = parseInt(num[i], 10);
//     sum += (parity || 0) === (i % 2) && (n *= 2) > 9 ? (n - 9) : n;
//   }
//   return (sum % 10) === 0;
// }

export default function cardValidator(cardNumber) {
  if (/[^0-9-\s]+/.test(cardNumber) || cardNumber.length < 13) return false;
  let sum = 0;

  for (let i = 0; i < cardNumber.length; i++) {
    let cardNum = parseInt(cardNumber[i], 10);

    if ((cardNumber.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return (sum !== 0) && (sum % 10 === 0);
}