const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
const cardPattern = /^\d{4}(?: ?\d{4}){3}$/;
const expPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3,4}$/;

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
const cardNumberInput = document.getElementById('cardnumber');
const cardNumberErrorMsg = document.getElementById('cardNumberError');
const expDateInput = document.getElementById('expDate');
const expDateErrorMsg = document.getElementById('expDateError');
const cvvInput = document.getElementById('cvv');
const cvvErrorMsg = document.getElementById('cvvError');
const formElement = document.getElementById('checkoutForm');
const successMessage = document.getElementById('success');

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

function validateCardNumber() {
  const cardTrimmedValue = cardNumberInput.value.trim();

  if (!cardPattern.test(cardTrimmedValue)) {
    cardNumberErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else {
    cardNumberErrorMsg.classList.add('hidden');
  }
}

function validateExpDate() {
  const expTrimmedValue = expDateInput.value.trim();
  let isExpired = false;

  if (expPattern.test(expTrimmedValue)) {
    const [month, year] = expTrimmedValue.split('/').map(Number);
    // The first day of the month after the expiry month
    const expiryEnd = new Date(2000 + year, month, 1);
    isExpired = expiryEnd <= new Date();
  }

  if (!expPattern.test(expTrimmedValue) || isExpired) {
    expDateErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else {
    expDateErrorMsg.classList.add('hidden');
  }
}

function validateCvv() {
  const cvvTrimmedValue = cvvInput.value.trim();

  if (!cvvPattern.test(cvvTrimmedValue)) {
    cvvErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else {
    cvvErrorMsg.classList.add('hidden');
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

cardNumberInput.addEventListener('change', validateCardNumber);
expDateInput.addEventListener('change', validateExpDate);
cvvInput.addEventListener('change', validateCvv);

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  isFormValid = true;
  validateEmail();
  validatePhone();
  validateName(firstName, firstNameErrorMsg);
  validateName(lastName, lastNameErrorMsg);
  validateCardNumber();
  validateExpDate();
  validateCvv();

  if (isFormValid) {
    formElement.classList.add('hidden');
    successMessage.classList.remove('hidden');
  }
});
