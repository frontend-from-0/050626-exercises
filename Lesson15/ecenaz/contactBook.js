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


// New list only for the Step 7 demo. The tests below changed personalContacts (added, updated and removed people), so we start with a clean list to make the results easy to follow.

const familyContacts = [
  {
    name: 'Ayşe',
    phone: '0532 111 11 11',
    email: 'ayse@gmail.com'
  },
];


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

  // Check 1: Is "contacts" a list (array)?
  // If not, show an error and stop.
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the updateContact function. Expected input type is array.',
    );
    return;
  }
  // Check 2: Is the list empty?
  // If there are no contacts, there is nothing to update. Stop.
  if (contacts.length === 0) {
    logWithEmptySpace('Contacts list is empty. There is no contact to update.');
    return;
  }

  // Check 3: Are name, newPhone and newEmail all strings (text)?
  // If even one of them is not a string, show an error and stop.

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

  // Go through the list one contact at a time.
  for (const contact of contacts) {

    // Compare names in lowercase, so "ahmet" and "Ahmet" are the same.

    if (name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
      contact.phone = newPhone;
      contact.email = newEmail;
      // Found the contact: replace the old phone and email with the new ones.
      logWithEmptySpace(`Contact (${name},  New phone: ${newPhone}, New email: ${newEmail}) updated successfully.`);
      // Stop here. No need to check the rest of the list.
      return;
    }

  }
  // If we reach this line, the loop finished without finding the name.
  logWithEmptySpace(`No contact found with the name: ${name}`);

}

updateContact('ahmet yılmaz', '0522 222 22 22', 'ahmetmehmet@gmail.com', personalContacts);

updateContact('ahmet yılmaz', 5222222222, 'ahmetmehmet@gmail.com', personalContacts);
updateContact('Zeynep Mutlu', '0523978788', 'zeynep@gmail.com', personalContacts);
updateContact('ahmet yılmaz', 5222222222, 'ahmetmehmet@gmail.com', personalContacts);
updateContact('Ahmet Yılmaz', '0522 222 22 22', 'ahmet@gmail.com');
updateContact('Ahmet Yılmaz', '0522 222 22 22', 'ahmet@gmail.com', emplyListOfContacts);


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
  if (contacts.length === 0) {
    logWithEmptySpace('Contacts list is empty. There is no contact to remove.');
    return;
  }
  if (
    typeof name !== 'string'
  ) {
    logWithEmptySpace(
      'Incorrect input type, expected input is string for name',
    );
    return;
  }
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
      contacts.splice(i, 1);
      logWithEmptySpace(`Contact ${name} removed successfully.`);
      return;
    }
  }
  logWithEmptySpace(`No contact found with the name: ${name}`);
}

console.log('Ex.6 ----------------');
displayAllContacts(personalContacts);
removeContact('Asya Öztürk', personalContacts);
removeContact('asya öztürk', personalContacts);
removeContact('Zeynep', personalContacts);
removeContact(123, personalContacts);
removeContact('John');
removeContact('John', emplyListOfContacts);

displayAllContacts(personalContacts);
displayAllContacts(workContacts);
console.log('end of 6 ----------------');
/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------


Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

console.log('========== STEP 7: DEMO ==========');

console.log('--- 1. Show the list ---');
displayAllContacts(familyContacts);

console.log('--- 2. Add two contacts ---');
addContact('Can', '0511 111 11 11', 'can@gmail.com', familyContacts)
addContact('Deniz', '0522 222 22 22', 'deniz@gmail.com', familyContacts);

console.log('-----3. After added the new contacts.');
displayAllContacts(familyContacts);

console.log('--- 4. View the Contact by Name ---');
viewContact('deniz', familyContacts);
viewContact('Ayşe', familyContacts);


console.log('--- 5. Update Contact-----');
updateContact('deniz', '0599 999 99 99', 'okyanus@gmail.com', familyContacts);

console.log('--- 6. After Updated Contact -----');
displayAllContacts(familyContacts);

console.log('--- 7. Remove Contact-----');
removeContact('Can', familyContacts);


console.log('--- 8. Final list ---');
displayAllContacts(familyContacts);

console.log('========== END OF DEMO ==========');
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

// 1: Partial name search 

function partialNameSearch(name, contacts) {

  // Works like viewContact, but uses .includes() instead of === so "ahmet" can find "Ahmet Yılmaz".It can find more than one contact, so it does not stop at the first match.

  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the partialNameSearch function. Expected input type is array.',
    );
    return;
  }
  // Is "contacts" a list array If not, show an error and stop.


  //Is name a string text If not, show an error and stop.

  if (typeof name !== 'string') {
    logWithEmptySpace(
      'Incorrect input type, expected name input in string format.',
    );
    return;
  }

  console.log(`Viewing contact ${name}`);

  //Make both names lowercase then the contact's full name contain the text we are looking for. 

  for (const contact of contacts) {
    if (contact.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
      console.log('Contact Found');
      console.log(
        `Name: ${contact.name} Phone: ${contact.phone} Email: ${contact.email}`,
      );

    }

  }

  console.log(`No contact found with the name: ${name}`);
}

partialNameSearch('e', familyContacts);

//2. Sort Contacts:


/*
  MY NOTES: sort() and localeCompare()
  ------------------------------------
  sort():
  - Puts the items of an array in order.
  - For simple lists (like ['banana', 'apple']), sort() works alone.
  - For a list of objects, JavaScript does not know what to compare
    (name? phone?), so we must give it a compare function.
  - sort() changes the ORIGINAL array. It does not make a copy.

  Compare function: (a, b) => ...
  - sort() takes two items at a time and calls them "a" and "b".
  - We tell it how to decide which one comes first.

  localeCompare():
  - Compares two strings in alphabetical order.
  - "locale" means it follows language rules,
    so Turkish letters (Ç, Ş, Ö, Ü, İ) go to the right place.
  - Returns:
      negative number → a comes first
      0               → they are the same
      positive number → b comes first

  Example:
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  → sorts contacts from A to Z by name.

  Use (a, b) => a - b to sort numbers and (a, b) => a.localeCompare(b) to sort text, because without a compare function sort() treats everything as text.
*/

function sortContacts(contacts) {
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the sortContacts function. Expected input type is array.',
    );
    return;
  }

  if (contacts.length === 0) {
    logWithEmptySpace('Contacts list is empty.');
    return;
  }

  contacts.sort((a, b) => a.name.localeCompare(b.name));

  // Same thing without arrow function:
  /*contacts.sort(function (a, b) {
     return a.name.localeCompare(b.name);
});
   
   */
  logWithEmptySpace('Contacts sorted alphabetically.');
};
console.log('--- Before sort ---');
displayAllContacts(workContacts);

sortContacts(workContacts);

console.log('--- After sort ---');
displayAllContacts(workContacts);

sortContacts(emplyListOfContacts);
sortContacts();



//3. Search by multiple fields:
function searchMultipleFields(searchValue, contacts) {
  // Check 1: Is "contacts" a list (array)?
  if (!Array.isArray(contacts)) {
    logWithEmptySpace(
      'Incorrect input type in the searchMultipleFields function. Expected input type is array.',
    );
    return;
  }

  //is it a string?
  if (typeof searchValue !== 'string') {
    logWithEmptySpace(
      'Incorrect input type, expected search value in string format.',
    );
    return;
  }

  console.log(`Searching for: ${searchValue}`);

  // We have not found anyone yet.
  let found = false;

  for (const contact of contacts) {
    //can find by using name or phone number or email.
    if (
      searchValue.toLocaleLowerCase() === contact.name.toLocaleLowerCase() ||
      searchValue === contact.phone ||
      searchValue.toLocaleLowerCase() === contact.email.toLocaleLowerCase()
    ) {
      console.log('Contact Found');
      console.log(
        `Name: ${contact.name} Phone: ${contact.phone} Email: ${contact.email}`,
      );

      //we found someone, but keep looking.

      found = true;
      // More than one contact can match same phone number, so we use "found" instead of return.
    }
  }

  if (!found) {
    console.log(`No contact found for: ${searchValue}`);
  }
  console.log('');
}

console.log('--- Search by multiple fields ---');

// Note: Asya Öztürk was removed from personalContacts in Ex.6 (removeContact), so this search should say "No contact found". workContacts is a separate list, so Asya is still there.
searchMultipleFields('asya öztürk', personalContacts);
searchMultipleFields('0555 555 55 55', personalContacts);
searchMultipleFields('MEHMET@gmail.com', workContacts);
searchMultipleFields('yok@gmail.com', workContacts);
searchMultipleFields(123, workContacts);
searchMultipleFields('Asya');



