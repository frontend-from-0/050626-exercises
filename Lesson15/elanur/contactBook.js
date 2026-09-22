/*
===========================================================
  SIMPLE CONTACT BOOK APPLICATION
===========================================================
In this project, you'll create a Contact Book to store and
manage basic info: name, phone, and email.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex, etc.)
3. Conditionals (if-else)
4. Basic CRUD (Create, Read, Update, Delete) functionality

Below is a step-by-step guide, with sample code and 
comments explaining what each section does. Run this file
in Node.js or in your browser's console to see the output.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Data
-----------------------------------------------------------
1. Create an array named 'contacts' with a few initial 
   sample contacts.
2. Each contact is an object with 'name', 'phone', and 
   'email' properties.
*/
const personalContacts = [
  {
    name: 'Ahmet Yılmaz',
    phone: '0555 555 55 55',
    email: 'ahmet@gmail.com',
  },
  {
    name: 'Asya Öztürk',
    phone: '0544 444 44 44',
    email: 'asya@gmail.com',
  },
];

const workContacts = [
  {
    name: 'Mehmet Yılmaz',
    phone: '0555 555 55 55',
    email: 'Mehmet@gmail.com',
  },
  {
    name: 'Asya Öztürk',
    phone: '0544 444 44 44',
    email: 'asya@gmail.com',
  },
];

const emplyListOfContacts = [];

/*
-----------------------------------------------------------
  STEP 2: Display All Contacts
-----------------------------------------------------------
Function: displayAllContacts()
- Loops over the 'contacts' array.
- Logs a descriptive string for each contact.

Example output:
  Name: Alice, Phone: 123-456-7890, Email: alice@example.com
*/

function logWithEmptySpace(message) {
  console.log(message);
  console.log('');
  console.log('');
}

function displayAllContacts(contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the displayAllContacts function. Expected input type is array.',
    );
    return;
  }

  console.log('Displaying all contacts...');

  if (contacts.length === 0) {
    logWithEmptySpace('Contacts list is empty.');
    return;
  }

  for (const contact of contacts) {
    console.log('----------Start of the contact-------------');
    console.log(`Name: ${contact.name}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
    console.log('----------End of the contact-------------');
  }
  logWithEmptySpace('End of contacts.');
}

displayAllContacts(personalContacts);
displayAllContacts(workContacts);
displayAllContacts(emplyListOfContacts);
displayAllContacts();

/*
-----------------------------------------------------------
  STEP 3: Add a New Contact
-----------------------------------------------------------
Function: addContact(name, phone, email)
- Creates a new contact object and pushes it into 'contacts'.
- Checks if a contact with the same name already 
  exists before adding. If found, logs a warning and returns.
- Logs "Contact added successfully." if everything is good.
*/
function addContact(name, phone, email, contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the addContact function. Expected input type is array.',
    );
    return;
  }
  if (
    typeof name !== 'string' ||
    typeof phone !== 'string' ||
    typeof email !== 'string'
  ) {
    logWithEmptySpace(
      'Incorrect input type, expected input is string for name, phone, and email.',
    );
    return;
  }

  console.log('Adding a contact...');
  for (const contact of contacts) {
    if (name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
      logWithEmptySpace('Contact already exists.');
      return;
    }
  }

  contacts.push({ name, phone, email }); // contacts.push({ name: name, phone: phone, email:email });
  logWithEmptySpace(
    `Contact (${name}, ${phone}, ${email}) added successfully.`,
  );
}

addContact('John', '0555 555 55 55', 'jhon@gmail.com', personalContacts);
addContact('Yigit', '0555 555 55 55', 'jhon@gmail.com', personalContacts);
addContact('John', '0555 555 55 55', 'jhon@gmail.com', personalContacts);
addContact('john', '0555 555 55 55', 'jhon@gmail.com', personalContacts);
addContact('John', undefined, 'jhon@gmail.com', personalContacts);
addContact('John', undefined, 'jhon@gmail.com');
addContact();

displayAllContacts(personalContacts);

/*
-----------------------------------------------------------
  STEP 4: View a Contact by Name
-----------------------------------------------------------
Function: viewContact(name)
- Loops over 'contacts' to find one matching 'name'.
- Logs the contact info if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function viewContact(name, contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the viewContact function. Expected input type is array.',
    );
    return;
  }

  if (typeof name !== 'string') {
    logWithEmptySpace(
      'Incorrect input type, expected name input in string format.',
    );
    return;
  }

  console.log(`Viewing contact ${name}`);

  for (const contact of contacts) {
    if (name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
      console.log('Contact Found');
      console.log(
        `Name: ${contact.name} Phone: ${contact.phone} Email: ${contact.email}`,
      );
      return;
    }
  }

  console.log(`No contact found with the name: ${name}`);
}

viewContact('Yigit', personalContacts);
viewContact(false, personalContacts);
viewContact('test');



/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function updateContact(name, newPhone, newEmail, contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the updateContact function. Expected input type is array.',
    );
    return;
  }

  if (typeof name !== 'string') {
    logWithEmptySpace(
      'Incorrect input type, expected name input in string format.',
    );
    return;
  }

  console.log(`Updating contact ${name}`);

  for (const contact of contacts) {
    if (name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
      contact.phone = newPhone || contact.phone;
      contact.email = newEmail || contact.email;
      logWithEmptySpace('Contact updated successfully.');
      return;
    }
  }

  logWithEmptySpace(`No contact found with the name: ${name}`);
}

updateContact('Yigit', '0555 555 55 55', 'yigit@example.com', personalContacts);
/*
-----------------------------------------------------------
  STEP 6: Remove a Contact
-----------------------------------------------------------
Function: removeContact(name)
- Finds the index of the contact with 'name' using 
  findIndex() or a loop.
- Splices it from the array if found.
- Logs "Contact removed successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function removeContact(name, contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the removeContact function. Expected input type is array.',
    );
    return;
  }

  if (typeof name !== 'string') {
    logWithEmptySpace(
      'Incorrect input type, expected name input in string format.',
    );
    return;
  }

  console.log(`Removing contact ${name}`);

  const index = contacts.findIndex(
    (contact) => name.toLocaleLowerCase() === contact.name.toLocaleLowerCase(),
  );

  if (index !== -1) {
    contacts.splice(index, 1);
    logWithEmptySpace('Contact removed successfully.');
  } else {
    logWithEmptySpace(`No contact found with the name: ${name}`);
  }
}

removeContact('Yigit', personalContacts); 
/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

function testContactBook() {
  console.log('--- Testing Contact Book ---');

  // Display all contacts
  displayAllContacts(personalContacts);

  // Add a new contact
  addContact('Elif', '0555 555 55 55', 'elif@example.com', personalContacts);

  // View a contact
  viewContact('Elif', personalContacts);

  // Update a contact
  updateContact('Elif', '0555 555 55 56', 'elif updated@example.com', personalContacts);

  // Remove a contact
  removeContact('Elif', personalContacts);

  // Display all contacts again
  displayAllContacts(personalContacts);
}

testContactBook();    

  

  //OPTIONAL ENHANCEMENTS:

//1. Partial Name Search:
   
function searchContactsByPartialName(partialName, contacts) {
  const results = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(partialName.toLocaleLowerCase()),
  );

  if (results.length > 0) {
    logWithEmptySpace(`Found ${results.length} contact(s) matching "${partialName}":`);
    displayAllContacts(results);
  } else {
    logWithEmptySpace(`No contacts found matching "${partialName}".`);
  }
}

searchContactsByPartialName('ah', personalContacts);

   
//2. Sort Contacts:
   
function sortContactsByName(contacts) {
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  logWithEmptySpace('Contacts sorted by name.');
  displayAllContacts(contacts);
}
   
sortContactsByName(personalContacts);

//3. Search by Phone or Email:
   
function searchContactByPhoneOrEmail(query, contacts) {
  const results = contacts.filter(
    (contact) =>
      contact.phone.includes(query) || contact.email.includes(query),
  );

  if (results.length > 0) {
    logWithEmptySpace(`Found ${results.length} contact(s) matching "${query}":`);
    displayAllContacts(results);
  } else {
    logWithEmptySpace(`No contacts found matching "${query}".`);
  }
}

searchContactByPhoneOrEmail('0555', personalContacts);
searchContactByPhoneOrEmail('gmail.com', personalContacts); 