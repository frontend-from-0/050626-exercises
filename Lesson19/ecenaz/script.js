

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;


const onlyNumbersPattern = /^\d+$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cardNumberPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;

/**
 *
 *
 * 1. I (user) want write something in email input field, and see if the input is not correct.
 */

const emailInput = document.getElementById('email');
const emailErrorMsg = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneErrorMsg = document.getElementById('phoneError');
const firstName = document.getElementById('firstname');
const firstNameErrorMsg = document.getElementById('firstNameError');
const lastName = document.getElementById('lastname');
const lastNameErrorMsg = document.getElementById('lastNameError');
const formElement = document.getElementById('checkoutForm');

const cardNumber = document.getElementById('cardNumber');
const cardNumberErrorMsg = document.getElementById('cardError');

const expDate = document.getElementById('expDate');
const expDateErrorMsg = document.getElementById('expDateError');

const cvvNumber = document.getElementById('cvvNumber');
const cvvNumberErrorMsg = document.getElementById('cvvNumberError');

const successMsg = document.getElementById('success');

let isFormValid = true;




function validateEmail() {
  const emailTrimmedValue = emailInput.value.trim();
  if (!emailPattern.test(emailTrimmedValue)) {
    emailErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else {
    emailErrorMsg.classList.add('hidden');
  }
}

function validatePhone() {
  const phoneTrimmedValue = phoneInput.value.trim();

  if (!phonePattern.test(phoneTrimmedValue)) {
    phoneErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else {
    phoneErrorMsg.classList.add('hidden');
  }
}



function validateName(input, errorElement) {
  const trimmedValue = input.value.trim();
  if (trimmedValue.length < 2) {
    errorElement.textContent = 'The value should be at least 2 characters.';
    errorElement.classList.remove('hidden');
    isFormValid = false;
  } else if (!namePattern.test(trimmedValue)) {
    errorElement.textContent = 'The name should only contain letters.';
    errorElement.classList.remove('hidden');
    isFormValid = false;
  } else {
    errorElement.classList.add('hidden');
  }
}


emailInput.addEventListener('change', validateEmail);
phoneInput.addEventListener('change', validatePhone);
firstName.addEventListener('change', function () {
  validateName(firstName, firstNameErrorMsg);
});

lastName.addEventListener('change', function () {
  validateName(lastName, lastNameErrorMsg);
});



function validateNumber(input, errorElement, length) {
  const trimmedNumbers = input.value.replaceAll(' ', '');


  if (!onlyNumbersPattern.test(trimmedNumbers)) {
    errorElement.textContent = 'The value should contain only number. Please provide valid input.';
    errorElement.classList.remove('hidden');
    isFormValid = false;
  } else if (!cardNumberPattern.test(trimmedNumbers)) {
    errorElement.textContent = 'Please enter a valid card number (Visa, Mastercard, Amex, ...).';
    errorElement.classList.remove('hidden');
    isFormValid = false;
  } else {
    errorElement.classList.add('hidden');
  }
}



function validateExpDate() {
  const expTrimmedValue = expDate.value.trim();
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();


  const [monthStr, yearStr] = expTrimmedValue.split('/');
  const expMonth = Number(monthStr);
  const expYear = 2000 + Number(yearStr);


  if (!expDatePattern.test(expTrimmedValue)) {
    expDateErrorMsg.classList.remove('hidden');
    expDateErrorMsg.textContent = 'Please enter a valid date in MM/YY format.';

    isFormValid = false;

  } else if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
    expDateErrorMsg.textContent = 'This card has expired. Please use a valid card.';
    expDateErrorMsg.classList.remove('hidden'); 

    isFormValid = false;
  }else{
    expDateErrorMsg.classList.add('hidden');
   
  }

}

expDate.addEventListener('input', function () {

  let digits = expDate.value.replace(/\D/g, '').slice(0, 4);

  if (digits.length > 2) {
    digits = digits.slice(0, 2) + '/' + digits.slice(2);
  }

  expDate.value = digits;
});

cardNumber.addEventListener('change', function () {
  validateNumber(cardNumber, cardNumberErrorMsg,16);
});


cvvNumber.addEventListener('change', function () {
  validateNumber(cvvNumber, cvvNumberErrorMsg, 3)
});

expDate.addEventListener('change', validateExpDate);

formElement.addEventListener('submit', function (event) {
  event.preventDefault();

   isFormValid = true; 
  validateEmail();
  validatePhone();
  validateName(firstName, firstNameErrorMsg);
  validateName(lastName, lastNameErrorMsg);
  validateNumber(cardNumber, cardNumberErrorMsg, 16);
  validateNumber(cvvNumber, cvvNumberErrorMsg, 3);
  validateExpDate();

  if (isFormValid) {
    successElement.classList.remove('hidden');
    formElement.classList.add('hidden');
    successElement.textContent = ('Thank you there. Your order has been placed successfully.');
  }
});
