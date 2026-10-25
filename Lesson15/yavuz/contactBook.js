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
    name: 'Yavuz Selim Alemdar',
    phone: '0555 555 55 55',
    email: 'yavuz@example.com',
  },
  {
    name: 'Elif Kaya',
    phone: '0532 111 22 33',
    email: 'elif@example.com',
  },
  {
    name: 'Burak Demir',
    phone: '0543 222 33 44',
    email: 'burak@example.com',
  },
];

const workContacts = [
  {
    name: 'Yavuz Selim Alemdar',
    phone: '0555 555 55 54',
    email: 'yavuz@company.com',
  },
  {
    name: 'Elif Kaya',
    phone: '0532 111 22 34',
    email: 'elif@company.com',
  },
  {
    name: 'Burak Demir',
    phone: '0543 222 33 45',
    email: 'burak@company.com',
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

addContact('Ayşe Çelik', '0533 444 55 66', 'ayse@example.com', personalContacts);
addContact('Can Öztürk', '0542 555 66 77', 'can@example.com', personalContacts);
addContact('Elif Kaya', '0532 111 22 33', 'elif@example.com', personalContacts);
addContact('burak demir', '0543 222 33 44', 'burak@example.com', personalContacts);
addContact('Ayşe Çelik', undefined, 'ayse@example.com', personalContacts);
addContact('Ayşe Çelik', undefined, 'ayse@example.com');
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

viewContact('Can Öztürk', personalContacts);
viewContact('Mehmet', personalContacts);
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
      'Incorrect input type, expected input is string for name, phone, and email.',
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

updateContact('Elif Kaya', '0532 999 88 77', 'elif.kaya@example.com', personalContacts);
updateContact('can öztürk', '0542 000 11 22', 'can.ozturk@example.com', personalContacts);
updateContact('Mehmet', '0555 123 45 67', 'mehmet@example.com', personalContacts);
updateContact('Burak Demir', undefined, 'burak@example.com', personalContacts);
updateContact('Burak Demir', '0543 222 33 44', 'burak@example.com');

viewContact('Elif Kaya', personalContacts);

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

  const index = contacts.findIndex(
    (contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );

  if (index === -1) {
    logWithEmptySpace(`No contact found with the name: ${name}`);
    return;
  }

  contacts.splice(index, 1);
  logWithEmptySpace('Contact removed successfully.');
}

removeContact('Burak Demir', personalContacts);
removeContact('ayşe çelik', personalContacts);
removeContact('Mehmet', personalContacts);
removeContact(123, personalContacts);
removeContact('Can Öztürk');

displayAllContacts(personalContacts);
/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/
console.log('========== TESTING WORK CONTACTS ==========');

displayAllContacts(workContacts);

addContact('Selin Aydın', '0536 777 88 99', 'selin@company.com', workContacts);
addContact('Elif Kaya', '0532 111 22 34', 'elif@company.com', workContacts);

viewContact('Selin Aydın', workContacts);
viewContact('Ahmet', workContacts);

updateContact('Burak Demir', '0543 999 00 11', 'burak.demir@company.com', workContacts);
viewContact('Burak Demir', workContacts);

removeContact('Yavuz Selim Alemdar', workContacts);
removeContact('Ahmet', workContacts);

displayAllContacts(workContacts);
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
