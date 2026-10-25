const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const cvvPattern = /^\d{3,4}$/;
const cardPattern = /^\d(?:\s?\d){15}$/;
const expDatePattern = /^(?:0[1-9]|1[0-2])\/\d{2}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;

/**
 *
 *
 * 1. I (user) want write something in email input field, and see if the input is not correct.
 */

const emailInput = document.getElementById('email');
const emailErrorMsg = document.getElementById('emailError');
const cvvInput = document.getElementById('cvv');
const cardInput= document.getElementById('cardnumber');
const cardErrorMsg = document.getElementById('cardNumberError');
const cvvErrorMsg = document.getElementById('cvvError');
const expDateInput = document.getElementById('expDate');
const expDateErrorMsg = document.getElementById('expDateError');
const phoneInput = document.getElementById('phone');
const phoneErrorMsg = document.getElementById('phoneError');
const firstName = document.getElementById('firstname');
const firstNameErrorMsg = document.getElementById('firstNameError');
const lastName = document.getElementById('lastname');
const lastNameErrorMsg = document.getElementById('lastNameError');
const formElement = document.getElementById('checkoutForm');

let isFormValid = true;

function validateEmail() {
  const emailTrimmedValue = emailInput.value.trim();
  if (!emailPattern.test(emailTrimmedValue)) {
    emailErrorMsg.classList.remove('hidden');
    emailInput.setAttribute('aria-invalid', 'true');
    isFormValid = false;
  } else {
    emailErrorMsg.classList.add('hidden');
    emailInput.setAttribute('aria-invalid', 'false');
  }
}

function validatePhone() {
  const phoneTrimmedValue = phoneInput.value.trim();

  if (!phonePattern.test(phoneTrimmedValue)) {
    phoneErrorMsg.classList.remove('hidden');
    phoneInput.setAttribute('aria-invalid', 'true');
    isFormValid = false;
  } else {
    phoneErrorMsg.classList.add('hidden');
    phoneInput.setAttribute('aria-invalid', 'false');
  }
}


function validateCvv() {
  const cvvTrimmedValue = cvvInput.value.trim();
  if (!cvvPattern.test(cvvTrimmedValue)) {
    cvvErrorMsg.classList.remove('hidden');
    cvvInput.setAttribute('aria-invalid', 'true');
    isFormValid = false;
  } else {
    cvvErrorMsg.classList.add('hidden');
    cvvInput.setAttribute('aria-invalid', 'false');
  }
}

function validateCard() {
  const cardTrimmedValue = cardInput.value.trim();
  if (!cardPattern.test(cardTrimmedValue)) {
    cardErrorMsg.classList.remove('hidden');
    cardInput.setAttribute('aria-invalid', 'true');
    isFormValid = false;
  } else {
    cardErrorMsg.classList.add('hidden');
    cardInput.setAttribute('aria-invalid', 'false');
  }
}

function validateExpDate() {
  const expDateTrimmedValue = expDateInput.value.trim();
  if (!expDatePattern.test(expDateTrimmedValue)) {
    expDateErrorMsg.classList.remove('hidden');
    expDateInput.setAttribute('aria-invalid', 'true');
    isFormValid = false;
  } else {
    expDateErrorMsg.classList.add('hidden');
    expDateInput.setAttribute('aria-invalid', 'false');
  }
}

function validateName(input, errorElement) {
  const trimmedValue = input.value.trim();
  if (trimmedValue.length < 2) {
    errorElement.textContent = 'The value should be at least 2 characters.';
    errorElement.classList.remove('hidden');
    input.setAttribute('aria-invalid', 'true');
    isFormValid = false;
  } else if (!namePattern.test(trimmedValue)) {
    errorElement.textContent = 'The name should only contain letters.';
    errorElement.classList.remove('hidden');
    input.setAttribute('aria-invalid', 'true');
    isFormValid = false;
  } else {
    errorElement.classList.add('hidden');
    input.setAttribute('aria-invalid', 'false');
  }
}


emailInput.addEventListener('change', validateEmail);
phoneInput.addEventListener('change', validatePhone);
cvvInput.addEventListener('change', validateCvv);
cardInput.addEventListener('change', validateCard);
expDateInput.addEventListener('change', validateExpDate);
firstName.addEventListener('change', function () {
  validateName(firstName, firstNameErrorMsg);
});

lastName.addEventListener('change', function () {
  validateName(lastName, lastNameErrorMsg);
});

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  isFormValid = true;
  validateEmail();
  validateCvv();
  validatePhone();
  validateCard();
  validateExpDate();
  validateName(firstName, firstNameErrorMsg);
  validateName(lastName, lastNameErrorMsg);

  if (isFormValid) {
    document.getElementById('successEmail').textContent = emailInput.value.trim();
    formElement.classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');
  } else {
    // Move keyboard focus to the first invalid field so screen reader users land on the problem
    formElement.querySelector('[aria-invalid="true"]').focus();
  }
});
