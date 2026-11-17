// Update user page: ./pages/update.html?userId=1
// 1. Read userId from the URL (URLSearchParams).
// 2. GET https://dummyjson.com/users/{userId} and pre-fill the form.
// 3. On submit: send a PUT request with the new data and show the result in #statusMessage.

const searchParams = new URLSearchParams(window.location.search);
const userId = searchParams.get('userId');

if (!userId) {
  window.location.href = '../index.html';
} else {
  initUpdatePage(userId);
}

function showStatus(statusMessage, message, variant) {
  statusMessage.textContent = message;
  statusMessage.classList.remove('hidden', 'status--success', 'status--error');
  if (variant) {
    statusMessage.classList.add(variant);
  }
}

function initUpdatePage(userId) {
  const updateUserForm = document.getElementById('updateUserForm');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const submitButton = updateUserForm.querySelector('[type="submit"]');
  const statusMessage = document.getElementById('statusMessage');

  fetch(`https://dummyjson.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed fetching user ${userId}, status: ${res.status}`);
      }
      return res.json();
    })
    .then((user) => {
      if (user == null || user.id == null) {
        throw new Error(`User ${userId} was not found`);
      }
      firstNameInput.value = user.firstName ?? '';
      lastNameInput.value = user.lastName ?? '';
      firstNameInput.disabled = false;
      lastNameInput.disabled = false;
      submitButton.disabled = false;
    })
    .catch((error) => {
      console.error(error);
      showStatus(
        statusMessage,
        'This user could not be found. Go back and try another user.',
        'status--error',
      );
    });

  updateUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;

    if (!firstName || !lastName) {
      showStatus(
        statusMessage,
        'First name and last name are required.',
        'status--error',
      );
      if (!firstName) {
        firstNameInput.focus();
      } else {
        lastNameInput.focus();
      }
      return;
    }

    submitButton.disabled = true;

    fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed updating user ${userId}, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const updatedFirstName = data.firstName ?? firstName;
        const updatedLastName = data.lastName ?? lastName;
        firstNameInput.value = updatedFirstName;
        lastNameInput.value = updatedLastName;
        showStatus(
          statusMessage,
          `User updated successfully: ${updatedFirstName} ${updatedLastName}.`,
          'status--success',
        );
      })
      .catch((error) => {
        console.error(error);
        showStatus(
          statusMessage,
          'An error occurred while updating the user.',
          'status--error',
        );
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  });
}
