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

const fetchButton = document.getElementById('fetchUsersButton');
const usersContainer = document.getElementById('container');
const statusMessage = document.getElementById('statusMessage');
const fetchButtonLabel = fetchButton.textContent;

fetchButton.addEventListener('click', fetchUsers);

function clearStatus() {
  statusMessage.textContent = '';
  statusMessage.classList.add('hidden');
  statusMessage.classList.remove('status--success', 'status--error');
}

function showStatus(message, variant) {
  statusMessage.textContent = message;
  statusMessage.classList.remove('hidden', 'status--success', 'status--error');
  if (variant) {
    statusMessage.classList.add(variant);
  }
}

function fetchUsers() {
  usersContainer.innerHTML = '';
  clearStatus();
  fetchButton.disabled = true;
  fetchButton.textContent = 'Loading...';

  fetch('https://dummyjson.com/users')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed fetching users, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const users = data.users;
      for (const user of users) {
        const listItem = document.createElement('li');
        listItem.classList.add('card');
        const heading = document.createElement('h2');
        heading.classList.add('card-title');
        heading.textContent = user.firstName + ' ' + user.lastName;
        const updateButton = document.createElement('a');
        updateButton.classList.add('button', 'button--success');
        updateButton.textContent = 'Update User';
        updateButton.setAttribute(
          'href',
          `./pages/update.html?userId=${user.id}`,
        );
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('button', 'button--danger');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete User';
        deleteButton.addEventListener('click', () => deleteUser(user.id, listItem));

        listItem.appendChild(heading);
        listItem.appendChild(updateButton);
        listItem.appendChild(deleteButton);
        usersContainer.appendChild(listItem);
      }
    })
    .catch((error) => {
      console.error(error);
      showStatus('Could not load users. Please try again.', 'status--error');
    })
    .finally(() => {
      fetchButton.disabled = false;
      fetchButton.textContent = fetchButtonLabel;
    });
}

function deleteUser(id, listItem) {
  const heading = listItem.querySelector('.card-title');
  const userName = heading ? heading.textContent.trim() : `User ${id}`;
  const deleteButton = listItem.querySelector('.button--danger');

  if (deleteButton) {
    deleteButton.disabled = true;
  }

  fetch(`https://dummyjson.com/users/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed deleting user ${id}, status: ${res.status}`);
      }
      listItem.remove();
      showStatus(`${userName} was deleted.`, 'status--success');
    })
    .catch((error) => {
      console.error(error);
      if (deleteButton) {
        deleteButton.disabled = false;
      }
      showStatus(`Could not delete ${userName}. Please try again.`, 'status--error');
    });
}
