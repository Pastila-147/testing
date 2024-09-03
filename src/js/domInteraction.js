import cardValidator from './cardValidator.js'
import paymentSystemIdentifier from './paymentSystemIdentifier.js';

const validateForm = document.querySelector('.validate-form');
const formInput = document.querySelector('.widget-input');
const resultOutput = document.querySelector('.validate-result');

validateForm.addEventListener('submit', (event) => {
  event.preventDefault();
  resetForm();
  const inputedText = formInput.value.replace(/\s/g, '');
  if (cardValidator(inputedText)) {
    resultOutput.textContent = 'The card is valid';
    const currentPayment = document.querySelector(`.${paymentSystemIdentifier(inputedText)}`);
    currentPayment.classList.add('checked');
  } else {
    resultOutput.textContent = 'The card is not valid';
  }
});

function resetForm() {
  const checkedPayment = document.querySelector('.checked');
  if (checkedPayment) {
    checkedPayment.classList.remove('checked');
  }
}