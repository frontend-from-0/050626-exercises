/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

function checkPassword(password) {
  if (typeof password !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling checkPassword function. Please provide a string and try again.",
    );
    return;
  }

  if (password.length >= 8) {
    console.log("Password length is sufficient.");
  } else {
    console.log("Password is too short.");
  }
}
console.log("Ex. 1. ---------------");
checkPassword("1234");
checkPassword("123456789");
checkPassword(123456789);

console.log("-----------------------");

/*
if (pasword.length >= 8){
console.log('password length is sufficient');
} else{
  console.log('Password is too short.');
}

2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
function uppercaseName(name) {
  if (typeof name !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling uppercaseName function. Please provide a string and try again.",
    );
    return;
  }

  const uppercaseName = name.toUpperCase();
  console.log(uppercaseName);
}

console.log("Ex. 2. ---------------");
uppercaseName("name");
uppercaseName("Jane");
uppercaseName("Tom");

uppercaseName(1231421);

console.log("-----------------------");

/*

3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

function normalizeEmail(email) {
  if (typeof email !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling normalizeEmail function. Please provide a string and try again.",
    );
    return;
  }

  const lowerCaseEmail = email.toLowerCase();

  console.log(lowerCaseEmail);
}
console.log("Ex. 3. ---------------");

normalizeEmail("YIGIT@HOTMail.com");
normalizeEmail(15151);
console.log("-----------------------");

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {
  if (typeof email !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling getDomain function. Please provide a string and try again.",
    );
    return;
  }

  const index = email.indexOf("@");

  if (index === -1) {
    console.log(
      "Provided input is not a correct email address, corrent the input and try again.",
    );
    return;
  }

  const domain = email.slice(index + 1);
  console.log(domain);
}

console.log("Ex. 4. ---------------");
getDomain("jane.doe@gmail.com");
getDomain("asya@gmail.com");
getDomain("doejhonon.dance");
console.log("-----------------------");

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling containsWord function. Please provide a string for both input values and try again.",
    );
    return;
  }

  const isFound = sentence.includes(word);
  if (isFound) {
    console.log('\"' + word + '\"' + " found in sentence");
  } else {
    console.log(`\"${word}\" not found in sentence`);
  }
}

console.log("Ex. 5. ---------------");

containsWord(
  "Provided type of the input is incorrect when calling containsWord function.",
  "type",
);
containsWord(
  "Provided type of the input is incorrect when calling containsWord function. Please provide a string for both input values and try again.",
  "hello",
);

containsWord(
  "Provided type of the input is incorrect when calling containsWord function.",
);

console.log("-----------------------");

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/

function checkFileExtension(filename) {
  if (typeof filename !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling checkFileExtension function. Please provide a string and try again.",
    );
    return;
  }

  const formatChecker = filename.toLowerCase().endsWith(".pdf");

  if (formatChecker) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}

checkFileExtension("notes.pdf");
checkFileExtension("notes.html");
checkFileExtension("notes.PDF");
checkFileExtension();

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log(
      "Provided type of the input is incorrect when calling compareNumbers function. Please provide provide numbers and try again",
    );
    return;
  }
  const isEqual = a === b;
  if (a > b) {
    console.log("a is bigger");
  } else if (b > a) {
    console.log("b is bigger");
  } else {
    console.log("Numbers are equal");
  }
}

console.log("Ex. 7. ---------------");
compareNumbers(6, 7);
compareNumbers(9, 5);
compareNumbers(4, 4);
compareNumbers("2,1");

console.log("Ex. ---------------");

/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/
function areEqualIgnoreCase(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling areEqualIgnoreCase function. Please provide strings and try again.",
    );
    return;
  }

  const isEqual = str1.toLowerCase() === str2.toLowerCase();

  if (isEqual) {
    console.log("Strings are equal.");
  } else {
    console.log("Strings are not equal.");
  }
}
console.log("Ex.8. ---------------");
areEqualIgnoreCase("hello", "HELLO");
areEqualIgnoreCase("cat", "dog");
areEqualIgnoreCase(5, 10);
console.log("Ex. ---------------");
/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  if (typeof text !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling truncateString function. Please provide a string and try again.",
    );
    return;
  }

  const truncated = text.slice(0, maxLength);
  if (text.length > maxLength) {
    console.log(truncated + "...");
  } else {
    console.log(truncated);
  }
}
console.log("Ex.9. ---------------");
truncateString("JavaScript is hard", 10);
truncateString("javascript", 11);
truncateString(7266474, 5);
console.log("Ex. ---------------");
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (typeof number !== "number") {
    console.log(
      "Provided type of the input is incorrect when calling evenOrOdd function. Please provide a number and try again.",
    );
    return;
  }
  const isNumber = number % 2 === 0;
  if (isNumber) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
console.log("Ex.10. ---------------");
evenOrOdd(8);
evenOrOdd(7);
evenOrOdd("6");
console.log("Ex. ---------------");

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  if (typeof url !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling checkProtocol function. Please provide a string and try again.",
    );
    return;
  }

  const lower = url.toLowerCase();
  const isSecure = lower.startsWith("https");
  if (isSecure) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}
console.log("Ex.11. ---------------");
checkProtocol("https://code2career.dev/tr");
checkProtocol("tailscan.com/colors");
checkProtocol(true);
console.log("Ex. ---------------");

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
function getDayOfWeek(num) {
  if (typeof num !== "number") {
    console.log(
      "Provided type of the input is incorrect when calling getDayOfWeek function. Please provide a number and try again.",
    );
    return;
  }
  switch (num) {
    case 1:
      console.log("monday");
      break;
    case 1:
      console.log("monday");
      break;
    case 2:
      console.log("tuesday");
      break;
    case 3:
      console.log("wednasday");
      break;
    case 4:
      console.log("thursday");
      break;
    case 5:
      console.log("friday");
      break;
    case 6:
      console.log("saturday");
      break;
    case 7:
      console.log("sunday");
      break;
    default:
      console.log("invalid day");
  }
}
console.log("Ex.12. ---------------");
getDayOfWeek(4);
getDayOfWeek(7);
getDayOfWeek(11);
getDayOfWeek("6");
console.log("Ex. ---------------");

// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  if (typeof word !== "string" || typeof times !== "number") {
    console.log(
      "Provided type of the input is incorrect when calling repeatWord function. Please provide a string and a number and try again.",
    );
    return;
  }
  const repeated = word.repeat(times);
  console.log(repeated);
}
console.log("Ex.13. ---------------");
repeatWord("hello", 3);
repeatWord("Assignment", 5);
repeatWord(false, 2);
repeatWord("work", "7");
console.log("Ex. ---------------");
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  if (typeof sentence !== "string" || typeof target !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling censorWord function. Please provide strings and try again.",
    );
    return;
  }
  const censored = sentence.replaceAll(target, "***");
  console.log(censored);
}
console.log("Ex.14. ---------------");
censorWord(
  "I am learning JavaScript,JavaScript makes me confused ",
  "JavaScript",
);
censorWord("this is not bad", "bad");
console.log("Ex. ---------------");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (typeof str !== "string") {
    console.log(
      "Provided type of input is not a string when calling startWithA function. Please provide string and try again.",
    );
    return;
  }
  const firstChar = str.charAt(0);
  if (firstChar === "A") {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
console.log("Ex.15. ---------------");
startsWithA("Apple");
startsWithA("Banana");
startsWithA("armchair");
startsWithA(6758);
console.log("Ex. ---------------");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  if (typeof text !== "string" || typeof n !== "number") {
    console.log(
      "Provided type of input is not a string when calling sliceLastN function. Please provide a string and a number and try again.",
    );
    return;
  }
  const result = text.slice(-n);
  console.log(result);
}
console.log("Ex.16. ---------------");
sliceLastN("Fullstack", 5);
sliceLastN("Remember", 6);
sliceLastN(12234, 3);
console.log("Ex. ---------------");
/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> "A"
     80-89 -> "B"
     70-79 -> "C"
     60-69 -> "D"
     below 60 -> "F"
   - Log the grade.
*/
function gradeChecker(score) {
  if (typeof score !== "number") {
    console.log(
      "Provided type of input is not a number when calling gradeChecker function. Please provide number and try again.",
    );
    return;
  }
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
console.log("Ex.17. ---------------");
gradeChecker(76);
gradeChecker(89);
gradeChecker(91);
gradeChecker(55);
gradeChecker("A");
console.log("Ex. ---------------");

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  if (
    typeof str !== "string" ||
    typeof oldChar !== "string" ||
    typeof newChar !== "string"
  ) {
    console.log(
      "Provided type of the input is incorrect when calling replaceCharacter function. Please provide strings and try again.",
    );
    return;
  }
  const result = str.replaceAll(oldChar, newChar);
  console.log(result);
}
console.log("Ex.18. ---------------");
replaceCharacter("Javascript", "a", "o");
replaceCharacter("Fullstack", "l", "t");
replaceCharacter("group", 2);
console.log("Ex. ---------------");

/*
19. Capitalize First Letter
   - Define a function `capitalizeFirst(text)` that:
     - Uses charAt(0) (or [0]) and toUpperCase() for the first character
     - Uses slice(1) for the rest of the string (unchanged)
     - Returns or logs the combined result
   - Example: "hello world" -> "Hello world"
   - Log the result for at least two different strings.
*/
function capitalizeFirst(text) {
  if (typeof text !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling capitalizeFirst function. Please provide string and try again.",
    );
    return;
  }
  const firstLetter = text.charAt(0).toUpperCase();
  const rest = text.slice(1);
  const result = firstLetter + rest;
  console.log(result);
}
console.log("Ex.19. ---------------");
capitalizeFirst("hello world");
capitalizeFirst("fullstack");
capitalizeFirst("last lesson");
console.log("Ex. ---------------");
/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  if (typeof color !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling capitalizeFirst function. Please provide string and try again.",
    );
    return;
  }
  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Caution");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("invalid color");
  }
}
console.log("Ex.20. ---------------");
trafficLight("red");
trafficLight("yellow");
trafficLight("green");
trafficLight("purple");
console.log("Ex. ---------------");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if (typeof str !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling isLongString function. Please provide string and try again.",
    );
    return;
  }
  const longString = str.length >= 10;
  if (longString) {
    console.log("Long string");
  } else {
    console.log("Short string");
  }
}
console.log("Ex.21. ---------------");
isLongString("Apple");
isLongString("congratulations");
isLongString(12355);
console.log("Ex. ---------------");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  if (typeof text !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling isLongString function. Please provide string and try again.",
    );
    return;
  }
  const containSpam = text.toLowerCase();
  if (containSpam.includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}
console.log("Ex.22. ---------------");
isSpam("Buy SPAM now!");
isSpam("Hello, how are you?");
console.log("Ex. ---------------");
/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/
function getTwoPartInitials(fullName) {
  if (typeof fullName !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling getTwoPartInitials function. Please provide a string and try again.",
    );
    return;
  }

  const parts = fullName.split(" ");
  const firstInitial = parts[0].charAt(0).toUpperCase();
  const secondInitial = parts[1].charAt(0).toUpperCase();
  const result = firstInitial + "." + secondInitial + ".";

  console.log(result);
}
console.log("Ex.23. ---------------");
getTwoPartInitials("John Doe");
console.log("Ex. ---------------");

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
function getSeason(monthNum) {
  if (typeof monthNum !== "number") {
    console.log(
      "Provided type of the input is incorrect when calling getSeason function. Please provide a number and try again.",
    );
    return;
  }
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Autumn");
      break;
    default:
      console.log("Invalid month");
  }
}

console.log("Ex.24. ---------------");
getSeason(5);
getSeason(11);
getSeason(7);
getSeason(24);
console.log("Ex. ---------------");
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/
function containsNumber(str) {
  if (typeof str !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling containsNumber function. Please provide a string and try again.",
    );
    return;
  }
  const hasNumber = str.match(/\d/);
  if (hasNumber) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}
console.log("Ex.25. ---------------");
containsNumber("hello");
containsNumber("room 5");
containsNumber("abc123");
console.log("Ex. ---------------");
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if (typeof str !== "string" || typeof maxLength !== "number") {
    console.log(
      "Provided type of the input is incorrect when calling padString function. Please provide a string and and a number and try again.",
    );
    return;
  }
  const padded = str.padEnd(maxLength, "*");
  console.log(padded);
}
console.log("Ex.26. ---------------");
padString("Hi", 5);
padString("JavaScript", 5);
padString("fullstack", "6");
console.log("Ex. ---------------");

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (typeof age !== "number") {
    console.log(
      "Provided type of the input is incorrect when calling canVote function. Please provide a number and try again.",
    );
    return;
  }
  const voteAge = age >= 18;
  if (voteAge) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}
console.log("Ex.27. ---------------");
canVote(34);
canVote(52);
canVote(17);
canVote("teenage");
console.log("Ex. ---------------");
/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/
function reverseString(text) {
  if (typeof text !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling reverseString function. Please provide a string and try again.",
    );
    return;
  }
  const reversed = text.split("").reverse().join("");
  console.log(reversed);
}
console.log("Ex.28. ---------------");
reverseString("Hello");
reverseString("clock");
reverseString("123345");
reverseString(34567);
console.log("Ex. ---------------");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling   findWordPosition function. Please provide strings and try again.",
    );
    return;
  }
  const index = sentence.indexOf(word);

  if (index === -1) {
    console.log("Not found");
  } else {
    console.log(index);
  }
}
console.log("Ex.29. ---------------");
findWordPosition("I am learning js", "learning");
findWordPosition("Coding for everybody", "coding");
console.log("Ex. ---------------");

/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - "+" -> a + b
     - "-" -> a - b
     - "*" -> a * b
     - "/" -> a / b
     - Otherwise -> "Invalid operator"
   - Log the result.
*/
function calculate(a, operator, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof operator !== "string"
  ) {
    console.log(
      "Provided type of the input is incorrect when calling calculate function. Please provide numbers and an operator string and try again.",
    );
    return;
  }

  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Invalid operator");
  }
}
console.log("Ex.29. ---------------");
calculate(5, "+", 3);
calculate(10, "/", 2);
calculate(4, "%", 2);
console.log("Ex. ---------------");
