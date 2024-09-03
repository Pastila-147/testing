// Алгоритм Луна
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