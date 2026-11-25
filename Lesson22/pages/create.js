// Create user page
// On submit: send a POST request to https://dummyjson.com/users/add
// with a JSON body ({ firstName, lastName }) and the header 'Content-Type: application/json'.
// Show the created user (response) or an error in #statusMessage.
const createUserForm = document.getElementById('createUserForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

const statusMessage = document.getElementById('statusMessage');

createUserForm.addEventListener('submit', (event) => {
  event.preventDefault();
  statusMessage.textContent = "";
statusMessage.classList.add("hidden");
  const firstNameCheck = firstNameInput.value.trim();
  const lastNameCheck = lastNameInput.value.trim();
  
if(!firstNameCheck || !lastNameCheck) { 
  statusMessage.classList.remove("hidden");
  statusMessage.textContent = "Invalid Input";
  firstNameInput.value = "";
  lastNameInput.value = "";
return; }


fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstNameCheck,
      lastName: lastNameCheck,
    }),
       
  })
 .then((res) => {
      if (!res.ok) {  
        throw new Error(`Failed creating a user, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      statusMessage.textContent = `User is created successfully. First name: ${data.firstName}; last name: ${data.lastName}; id: ${data.id}`;
      statusMessage.classList.remove('hidden');
      firstNameInput.value = "";
      lastNameInput.value = "";
    })
    .catch((error) => {
      statusMessage.textContent = error.message;
      statusMessage.classList.remove('hidden');
      console.error(error);
    });});
