/*
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method
Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response.
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Server errors (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

// Note: dummyjson only SIMULATES changes. A deleted user is not really removed
// from the server, so fetching the list again brings the user back.
const USERS_URL = 'https://dummyjson.com/users';

const fetchButton = document.getElementById('fetchUsersButton');
const usersContainer = document.getElementById('container');
const statusMessage = document.getElementById('statusMessage');

fetchButton.addEventListener('click', fetchUsers);

function fetchUsers() {
  showStatus(statusMessage, 'Loading users...', 'info');
  fetch(USERS_URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed fetching users, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const users = data.users;
      // Clear the old list first so pressing the button twice does not duplicate users.
      usersContainer.replaceChildren();
      for (const user of users) {
        usersContainer.appendChild(createUserCard(user));
      }
      showStatus(statusMessage, `${users.length} users loaded.`, 'success');
    })
    .catch((error) => {
      console.error(error);
      showStatus(
        statusMessage,
        'Users could not be loaded. Please try again later.',
        'error',
      );
    });
}

function createUserCard(user) {
  const fullName = `${user.firstName} ${user.lastName}`;

  const listItem = document.createElement('li');
  listItem.classList.add('card');

  const heading = document.createElement('h2');
  heading.classList.add('card-title');
  heading.textContent = fullName;

  const actions = document.createElement('div');
  actions.classList.add('card-actions');

  // The visible text stays short; aria-label tells screen reader users WHICH user.
  const updateButton = document.createElement('a');
  updateButton.classList.add('button', 'button--success');
  updateButton.textContent = 'Update';
  updateButton.setAttribute('aria-label', `Update ${fullName}`);
  updateButton.setAttribute('href', `./pages/update.html?userId=${user.id}`);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('button', 'button--danger');
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('aria-label', `Delete ${fullName}`);
  deleteButton.addEventListener('click', () =>
    deleteUser(user, listItem, deleteButton),
  );

  actions.append(updateButton, deleteButton);
  listItem.append(heading, actions);
  return listItem;
}

function deleteUser(user, listItem, deleteButton) {
  const fullName = `${user.firstName} ${user.lastName}`;

  if (!window.confirm(`Delete ${fullName}?`)) {
    return;
  }

  deleteButton.disabled = true;
  fetch(`${USERS_URL}/${user.id}`, { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed deleting a user, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (!data.isDeleted) {
        throw new Error('The server did not confirm the deletion.');
      }
      // Decide where the keyboard focus goes BEFORE the card disappears,
      // otherwise keyboard users would be sent back to the top of the page.
      const neighbour =
        listItem.nextElementSibling || listItem.previousElementSibling;
      listItem.remove();
      showStatus(statusMessage, `${fullName} was deleted.`, 'success');
      if (neighbour) {
        neighbour.querySelector('a').focus();
      } else {
        fetchButton.focus();
      }
    })
    .catch((error) => {
      console.error(error);
      deleteButton.disabled = false;
      showStatus(
        statusMessage,
        `${fullName} could not be deleted. Please try again.`,
        'error',
      );
    });
}
