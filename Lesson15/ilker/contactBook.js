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

  if (
    typeof name !== 'string' ||
    typeof newPhone !== 'string' ||
    typeof newEmail !== 'string'
  ) {
    logWithEmptySpace(
      'Incorrect input type, expected input is string for name, newPhone, and newEmail.',
    );
    return;
  }

  console.log(`Updating contact ${name}...`);

  for (const contact of contacts) {
    if (name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
      contact.phone = newPhone;
      contact.email = newEmail;
      logWithEmptySpace('Contact updated successfully.');
      return;
    }
  }

  logWithEmptySpace(`No contact found with the name: ${name}`);
}

updateContact('John', '0500 000 00 00', 'john.new@gmail.com', personalContacts);
updateContact('Nobody', '0500 000 00 00', 'nobody@gmail.com', personalContacts);
updateContact('John', undefined, 'john.new@gmail.com', personalContacts);
updateContact('John', '0500 000 00 00', 'john.new@gmail.com');

displayAllContacts(personalContacts);

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

  console.log(`Removing contact ${name}...`);

  const contactIndex = contacts.findIndex(
    (contact) => name.toLocaleLowerCase() === contact.name.toLocaleLowerCase(),
  );

  if (contactIndex === -1) {
    logWithEmptySpace(`No contact found with the name: ${name}`);
    return;
  }

  contacts.splice(contactIndex, 1);
  logWithEmptySpace('Contact removed successfully.');
}

removeContact('Yigit', personalContacts);
removeContact('Nobody', personalContacts);
removeContact(false, personalContacts);
removeContact('Yigit');

displayAllContacts(personalContacts);

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the
Contact Book in action.
*/
console.log('===========================================================');
console.log('FULL CONTACT BOOK DEMO');
console.log('===========================================================');

const demoContacts = [];
addContact('Ada Lovelace', '0533 111 11 11', 'ada@example.com', demoContacts);
addContact('Grace Hopper', '0533 222 22 22', 'grace@example.com', demoContacts);
displayAllContacts(demoContacts);
viewContact('Ada Lovelace', demoContacts);
updateContact('Ada Lovelace', '0533 999 99 99', 'ada.new@example.com', demoContacts);
viewContact('Ada Lovelace', demoContacts);
removeContact('Grace Hopper', demoContacts);
displayAllContacts(demoContacts);

/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Partial Name Search:
   - Instead of strict ===, use .includes() for the name check.

2. Sort Contacts:
   - Add a function to sort contacts alphabetically by name.
3. Search by multiple fields:
   - e.g., find a contact by phone number or email.
*/

// 1. Partial Name Search
function searchContactsByPartialName(partialName, contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the searchContactsByPartialName function. Expected input type is array.',
    );
    return;
  }

  if (typeof partialName !== 'string') {
    logWithEmptySpace(
      'Incorrect input type, expected partialName input in string format.',
    );
    return;
  }

  const matches = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(partialName.toLocaleLowerCase()),
  );

  if (matches.length === 0) {
    logWithEmptySpace(`No contacts found matching: ${partialName}`);
    return;
  }

  console.log(`Contacts matching "${partialName}":`);
  displayAllContacts(matches);
}

// 2. Sort Contacts Alphabetically
function sortContactsByName(contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the sortContactsByName function. Expected input type is array.',
    );
    return;
  }

  contacts.sort((a, b) => a.name.localeCompare(b.name));
  logWithEmptySpace('Contacts sorted alphabetically by name.');
}

// 3. Search by Multiple Fields (phone or email)
function findContactByPhoneOrEmail(query, contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the findContactByPhoneOrEmail function. Expected input type is array.',
    );
    return;
  }

  if (typeof query !== 'string') {
    logWithEmptySpace(
      'Incorrect input type, expected query input in string format.',
    );
    return;
  }

  for (const contact of contacts) {
    if (contact.phone === query || contact.email.toLocaleLowerCase() === query.toLocaleLowerCase()) {
      console.log('Contact Found');
      console.log(
        `Name: ${contact.name} Phone: ${contact.phone} Email: ${contact.email}`,
      );
      return;
    }
  }

  console.log(`No contact found with the phone or email: ${query}`);
}

console.log('===========================================================');
console.log('OPTIONAL ENHANCEMENTS DEMO');
console.log('===========================================================');

searchContactsByPartialName('yıl', workContacts);
sortContactsByName(workContacts);
displayAllContacts(workContacts);
findContactByPhoneOrEmail('asya@gmail.com', workContacts);
findContactByPhoneOrEmail('0000000000', workContacts);
