// Create user page
// On submit: send a POST request to https://dummyjson.com/users/add
// with a JSON body ({ firstName, lastName }) and the header 'Content-Type: application/json'.
// Show the created user (response) or an error in #statusMessage.
const createUserForm = document.getElementById('createUserForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const submitButton = createUserForm.querySelector('button[type="submit"]');

const statusMessage = document.getElementById('statusMessage');

// Once an error is shown, re-check the field while the user is typing,
// so the message disappears as soon as the value becomes valid.
firstNameInput.addEventListener('input', () => {
  if (firstNameError.textContent) {
    setFieldError(
      firstNameInput,
      firstNameError,
      validateName(firstNameInput.value.trim(), 'First name'),
    );
  }
});
lastNameInput.addEventListener('input', () => {
  if (lastNameError.textContent) {
    setFieldError(
      lastNameInput,
      lastNameError,
      validateName(lastNameInput.value.trim(), 'Last name'),
    );
  }
});

createUserForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showStatus(statusMessage, '');

  // Trim inputs and validate them
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const firstNameMessage = validateName(firstName, 'First name');
  const lastNameMessage = validateName(lastName, 'Last name');
  setFieldError(firstNameInput, firstNameError, firstNameMessage);
  setFieldError(lastNameInput, lastNameError, lastNameMessage);

  if (firstNameMessage || lastNameMessage) {
    // Move the focus to the first wrong field; a screen reader reads its error.
    (firstNameMessage ? firstNameInput : lastNameInput).focus();
    return;
  }

  submitButton.disabled = true;
  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed creating a user, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      showStatus(
        statusMessage,
        `User is created successfully. First name: ${data.firstName}; last name: ${data.lastName}; id: ${data.id}`,
        'success',
      );
      createUserForm.reset();
    })
    .catch((error) => {
      showStatus(
        statusMessage,
        'An error occurred when creating a user. Please try again.',
        'error',
      );
      console.error(error);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
