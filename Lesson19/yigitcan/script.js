const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
const cardPattern = /^\d+$/;

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
const cardNumberInput = document.getElementById('cardnumber');
const cardNumberErrorMsg = document.getElementById('cardNumError');
const cardExpInput = document.getElementById('expDate');
const cardExpErrorMsg = document.getElementById('cardExpiryError');
const cardCvvInput = document.getElementById('cvv');
const cardCvvErrorMsg = document.getElementById('cardCvvError');
const successMsg = document.getElementById('success');
const detailsFN = document.getElementById('detailsFN');
const detailsLN = document.getElementById('detailsLN');
const detailsPhone = document.getElementById('detailsPhone');
const detailsEmail = document.getElementById('detailsEmail');
const detailsCN = document.getElementById('detailsCN');
const detailsED = document.getElementById('detailsED');
const detailsCvv = document.getElementById('detailsCvv');
const formHidden = document.getElementById('checkoutForm');



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

function validateCardNumber(cardnum){
const num = cardnum.replace(/\s/g, "");
  if(!cardPattern.test(num)) {
    cardNumberErrorMsg.textContent = 'Card number must contain only numbers';
    cardNumberErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else if(num.length !== 16) {
    cardNumberErrorMsg.textContent = 'Card number must be 16 digits long';
    cardNumberErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else {
const formatted = num.match(/.{1,4}/g).join(" ")
    cardNumberErrorMsg.classList.add('hidden');
    cardNumberInput.value = formatted;
  }
};


function validateExpDate(expDate) {
  const num = expDate.replace(/[\/\s]/g, "");

if(!cardPattern.test(num)){
   cardExpErrorMsg.textContent = 'Expiry date must contain only numbers';
    cardExpErrorMsg.classList.remove('hidden');
     isFormValid = false;
} else if(num.length !== 4) {
  cardExpErrorMsg.textContent = 'Date must be 4 digits long';
    cardExpErrorMsg.classList.remove('hidden');
    isFormValid = false;
} else {
  const formatted = num.match(/.{1,2}/g).join("/");
  const dateParts = formatted.split("/");
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const year = Number(`20${dateParts[1]}`);
  const month = Number(dateParts[0]);
  

  if(month < 1 || month > 12) {
    cardExpInput.value = formatted;
    cardExpErrorMsg.textContent = 'Invalid month value';
    cardExpErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else if(year < currentYear ||
  (year === currentYear && month < currentMonth)) {
    cardExpInput.value = formatted;
    cardExpErrorMsg.textContent = 'Your card is expired';
    cardExpErrorMsg.classList.remove('hidden');
isFormValid = false;
  } else {
    cardExpErrorMsg.classList.add('hidden');
     cardExpInput.value = formatted;
  }
}}


function validateCardCvv(cvvNum){

 const num = cvvNum.replace(/[\/\s]/g, "")
if(!cardPattern.test(num)){
   cardCvvErrorMsg.textContent = 'CVV must contain only numbers';
    cardCvvErrorMsg.classList.remove('hidden');
     isFormValid = false;
} else if(num.length !== 3) {
  cardCvvErrorMsg.textContent = 'CVV must be 3 digits long';
    cardCvvErrorMsg.classList.remove('hidden');
    isFormValid = false;
} else {
  cardCvvErrorMsg.classList.add('hidden');
}
};



emailInput.addEventListener('change', validateEmail);
phoneInput.addEventListener('change', validatePhone);
firstName.addEventListener('change', function () {
  validateName(firstName, firstNameErrorMsg);
});

lastName.addEventListener('change', function () {
  validateName(lastName, lastNameErrorMsg);
});
cardNumberInput.addEventListener('change', function() {
  validateCardNumber(cardNumberInput.value);
});

cardExpInput.addEventListener('change', function() {
  validateExpDate(cardExpInput.value);
})

cardCvvInput.addEventListener('change', function() {
  validateCardCvv(cardCvvInput.value);
})
formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  isFormValid = true;
  validateEmail();
  validatePhone();
  validateName(firstName, firstNameErrorMsg);
  validateName(lastName, lastNameErrorMsg);
  validateCardNumber(cardNumberInput.value);
  validateExpDate(cardExpInput.value);
  validateCardCvv(cardCvvInput.value);
 

  if (isFormValid) {
    formHidden.classList.add('hidden');
    successMsg.classList.remove('hidden');
    detailsFN.textContent = firstName.value;
    detailsLN.textContent = lastName.value;
    detailsPhone.textContent = phoneInput.value;
    detailsEmail.textContent = emailInput.value;
    const cardNumberAsterisked = "*".repeat(12) + cardNumberInput.value.replace(/\s/g, "").slice(-4);
    detailsCN.textContent = cardNumberAsterisked;
    detailsED.textContent = cardExpInput.value;
    const CvvAsterisked = "*".repeat(2) + cardCvvInput.value.slice(-1);
    detailsCvv.textContent = CvvAsterisked
    
  }});
