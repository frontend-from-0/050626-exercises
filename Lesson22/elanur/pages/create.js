// Create user page
// On submit: send a POST request to https://dummyjson.com/users/add
// with a JSON body ({ firstName, lastName }) and the header 'Content-Type: application/json'.
// Show the created user (response) or an error in #statusMessage.
const createUserForm = document.getElementById('createUserForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const submitButton = createUserForm.querySelector('[type="submit"]');
const statusMessage = document.getElementById('statusMessage');

function showStatus(message, variant) {
  statusMessage.textContent = message;
  statusMessage.classList.remove('hidden', 'status--success', 'status--error');
  if (variant) {
    statusMessage.classList.add(variant);
  }
}

createUserForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  firstNameInput.value = firstName;
  lastNameInput.value = lastName;

  if (!firstName || !lastName) {
    showStatus('First name and last name are required.', 'status--error');
    if (!firstName) {
      firstNameInput.focus();
    } else {
      lastNameInput.focus();
    }
    return;
  }

  submitButton.disabled = true;

  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName,
      lastName,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed creating a user, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      showStatus(
        `User is created successfully. First name: ${data.firstName}; last name: ${data.lastName}; id: ${data.id}`,
        'status--success',
      );
      createUserForm.reset();
    })
    .catch((error) => {
      console.error(error);
      showStatus('An error occurred when creating a user.', 'status--error');
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
