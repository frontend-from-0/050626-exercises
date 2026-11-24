// Update user page: ./pages/update.html?userId=1
// 1. Read userId from the URL (URLSearchParams).
// 2. GET https://dummyjson.com/users/{userId} and pre-fill the form.
// 3. On submit: send a PUT (or PATCH) request with the new data and show the result in #statusMessage.
const updateUserForm = document.getElementById('updateUserForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const submitButton = updateUserForm.querySelector('button[type="submit"]');
const statusMessage = document.getElementById('statusMessage');

const searchParams = new URLSearchParams(window.location.search);
const userId = searchParams.get('userId');

// Only a whole number is a valid id (blocks things like ?userId=abc or ?userId=1/../x)
if (!userId || !/^\d+$/.test(userId)) {
  // redirect the user to home page
  window.location.replace('../index.html');
} else {
  loadUser();
}

function loadUser() {
  // The form cannot be sent before the user data has arrived.
  submitButton.disabled = true;
  showStatus(statusMessage, 'Loading user...', 'info');

  fetch(`https://dummyjson.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed fetching the user, status: ${res.status}`);
      }
      return res.json();
    })
    .then((user) => {
      firstNameInput.value = user.firstName;
      lastNameInput.value = user.lastName;
      submitButton.disabled = false;
      showStatus(statusMessage, '');
    })
    .catch((error) => {
      console.error(error);
      showStatus(
        statusMessage,
        'The user could not be loaded. Please go back and try again.',
        'error',
      );
    });
}

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

updateUserForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showStatus(statusMessage, '');

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const firstNameMessage = validateName(firstName, 'First name');
  const lastNameMessage = validateName(lastName, 'Last name');
  setFieldError(firstNameInput, firstNameError, firstNameMessage);
  setFieldError(lastNameInput, lastNameError, lastNameMessage);

  if (firstNameMessage || lastNameMessage) {
    (firstNameMessage ? firstNameInput : lastNameInput).focus();
    return;
  }

  submitButton.disabled = true;
  // PUT replaces the user's data with the body we send.
  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed updating the user, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      firstNameInput.value = data.firstName;
      lastNameInput.value = data.lastName;
      showStatus(
        statusMessage,
        `User is updated successfully. First name: ${data.firstName}; last name: ${data.lastName}; id: ${data.id}`,
        'success',
      );
    })
    .catch((error) => {
      console.error(error);
      showStatus(
        statusMessage,
        'An error occurred when updating the user. Please try again.',
        'error',
      );
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
