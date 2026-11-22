// Update user page: ./pages/update.html?userId=1
// 1. Read userId from the URL (URLSearchParams).
// 2. GET https://dummyjson.com/users/{userId} and pre-fill the form.
// 3. On submit: send a PUT (or PATCH) request with the new data and show the result in #statusMessage.

const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

let isFirstNameFocus = true;
let isLastNameFocus = true;

firstNameInput.addEventListener("focus", () => {
  if (isFirstNameFocus) {
    firstNameInput.value = "";
    isFirstNameFocus = false;
  }
});

lastNameInput.addEventListener("focus", () => {
  if (isLastNameFocus) {
    lastNameInput.value = "";
    isLastNameFocus = false;
  }
});

console.log(window);

const searchUrl = window.location.search;
const searchParams = new URLSearchParams(searchUrl);
const userId = searchParams.get('userId');
const statusMessage = document.getElementById('statusMessage');
const updateUser = document.getElementById("updateUserForm");


function updatePage() 
{if (!userId) {
  console.log('Not sure what user to update!!!');
  window.location.href = "../index.html";
  return;
}

fetch(`https://dummyjson.com/users/${userId}`)

 .then((res) => {
      if (!res.ok) {  
        throw new Error(`Failed fetching user, status: ${res.status}`);
      }
      return res.json();
    })
.then((user) => {
     firstNameInput.value = user.firstName;
    lastNameInput.value = user.lastName;
})
  .catch((error) => {
      statusMessage.textContent = error.message;
      statusMessage.classList.remove('hidden');
      console.error(error);
    });}

updatePage();

updateUser.addEventListener("submit", (event) => {
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


fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstNameCheck,
      lastName: lastNameCheck,
    }),
       
  })
 .then((res) => {
      if (!res.ok) {  
        throw new Error(`Failed updating a user, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      statusMessage.textContent = `User is updated successfully. First name: ${data.firstName}; last name: ${data.lastName}; id: ${data.id}`;
      statusMessage.classList.remove('hidden');
      firstNameInput.value = "";
      lastNameInput.value = "";
    })
    .catch((error) => {
      statusMessage.textContent = error.message;
      statusMessage.classList.remove('hidden');
      console.error(error);
    });});
