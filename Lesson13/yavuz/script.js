/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/
function checkPassword(password) {
   if (password.length >= 8) {
      console.log("Ex.1:", "Password length is sufficient.")
   } else {
      console.log("Ex.1:", "Password is too short.")
   }
}

checkPassword("abc123");
checkPassword("supersecure123");
/*


2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
function uppercaseName(name) {
   console.log("Ex.2:", name.toUpperCase());
}
uppercaseName("John Doe");
/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

function normalizeEmail(email) {
   console.log("Ex.3:", email.toLowerCase());
}
normalizeEmail("USER@Example.COM")

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {
   const atIndex = email.indexOf("@");
   const domain = email.slice(atIndex + 1);
   console.log("Ex.4:", domain);
}
getDomain("user@example.com");
/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(sentence, word) {
   if (sentence.includes(word)) {
      console.log("Ex.5:", `${word} found in sentence.`);
   } else{
      console.log("Ex.5:", `${word} not found in sentence.`);
   }
}
containsWord("I love JavaScript", "love");
containsWord("I love JavaScript", "hate");
/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
   if (filename.endsWith(".pdf")) {
    console.log("Ex.6:", "This is a PDF file.");
  } else {
    console.log("Ex.6:", "Not a PDF file.");
  }
}
checkFileExtension("report.pdf");
checkFileExtension("photo.jpg");
/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  if (a > b) {
    console.log("Ex.7:", "a is bigger");
  } else if (b > a) {
    console.log("Ex.7:", "b is bigger");
  } else {
    console.log("Ex.7:", "Numbers are equal");
  }
}

compareNumbers(10, 5);
compareNumbers(3, 8);
compareNumbers(6, 6);



/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/
function areEqualIgnoreCase(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Ex.8:", "Strings are equal.");
  } else {
    console.log("Ex.8:", "Strings are not equal.");
  }
}

areEqualIgnoreCase("Hello", "hello");
areEqualIgnoreCase("cat", "dog");
/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    const truncated = text.slice(0, maxLength) + "...";
    console.log("Ex.9:", truncated);
  } else {
    console.log("Ex.9:", text);
  }
}

truncateString("This is a long sentence.", 10);
truncateString("Short", 10);
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Ex.10:", "Even");
  } else {
    console.log("Ex.10:", "Odd");
  }
}

evenOrOdd(4);
evenOrOdd(9);
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.startsWith("https")) {
    console.log("Ex.11:", "Secure connection");
  } else {
    console.log("Ex.11:", "Unsecure connection");
  }
}

checkProtocol("HTTPS://example.com");
checkProtocol("http://example.com");
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
  switch (num) {
    case 1:
      console.log("Ex.12:", "Monday");
      break;
    case 2:
      console.log("Ex.12:", "Tuesday");
      break;
    case 3:
      console.log("Ex.12:", "Wednesday");
      break;
    case 4:
      console.log("Ex.12:", "Thursday");
      break;
    case 5:
      console.log("Ex.12:", "Friday");
      break;
    case 6:
      console.log("Ex.12:", "Saturday");
      break;
    case 7:
      console.log("Ex.12:", "Sunday");
      break;
    default:
      console.log("Ex.12:", "Invalid day");
  }
}

getDayOfWeek(3);
getDayOfWeek(9);
// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  console.log("Ex.13:", word.repeat(times));
}

repeatWord("ha", 3);
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  console.log("Ex.14:", sentence.replaceAll(target, "****"));
}

censorWord("This cat is a cute cat", "cat");
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str[0] === "A") {
    console.log("Ex.15:", "Starts with A");
  } else {
    console.log("Ex.15:", "Does not start with A");
  }
}

startsWithA("Apple");
startsWithA("Banana");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  console.log("Ex.16:", text.slice(-n));
}

sliceLastN("Hello World", 5);
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
  switch (true) {
    case score >= 90:
      console.log("Ex.17:", "A");
      break;
    case score >= 80:
      console.log("Ex.17:", "B");
      break;
    case score >= 70:
      console.log("Ex.17:", "C");
      break;
    case score >= 60:
      console.log("Ex.17:", "D");
      break;
    default:
      console.log("Ex.17:", "F");
  }
}

gradeChecker(95);
gradeChecker(72);
gradeChecker(50);
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  console.log("Ex.18:", str.replaceAll(oldChar, newChar));
}

replaceCharacter("banana", "a", "o");
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
  const firstLetter = text[0].toUpperCase();
  const rest = text.slice(1);
  console.log("Ex.19:", firstLetter + rest);
}

capitalizeFirst("hello world");
capitalizeFirst("javascript is fun");
/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("Ex.20:", "Stop");
      break;
    case "yellow":
      console.log("Ex.20:", "Caution");
      break;
    case "green":
      console.log("Ex.20:", "Go");
      break;
    default:
      console.log("Ex.20:", "Invalid color");
  }
}

trafficLight("red");
trafficLight("green");
trafficLight("purple");
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if (str.length > 10) {
    console.log("Ex.21:", "Long string");
  } else {
    console.log("Ex.21:", "Short string");
  }
}

isLongString("Hello");
isLongString("This is a long sentence");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  if (text.toLowerCase().includes("spam")) {
    console.log("Ex.22:", "This text is spam.");
  } else {
    console.log("Ex.22:", "This text is not spam.");
  }
}

isSpam("This is a SPAM message");
isSpam("Hello, how are you?");
/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/
function getTwoPartInitials(fullName) {
  const parts = fullName.split(" ");
  const firstInitial = parts[0].charAt(0).toUpperCase();
  const secondInitial = parts[1].charAt(0).toUpperCase();
  console.log("Ex.23:", `${firstInitial}.${secondInitial}.`);
}

getTwoPartInitials("John Doe");
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
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      console.log("Ex.24:", "Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Ex.24:", "Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Ex.24:", "Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Ex.24:", "Autumn");
      break;
    default:
      console.log("Ex.24:", "Invalid month");
  }
}

getSeason(1);
getSeason(7);
getSeason(5);
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/
function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log("Ex.25:", "Contains number");
  } else {
    console.log("Ex.25:", "No number found");
  }
}

containsNumber("hello");
containsNumber("room 5");
containsNumber("abc123");
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
    console.log("Ex.26:", str.padEnd(maxLength, "*"));
}

padString("hi", 6);
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log("Ex.27:", "Can vote");
  } else {
    console.log("Ex.27:", "Too young to vote");
  }
}

canVote(20);
canVote(15);
/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/
function reverseString(text) {
  const reversed = text.split("").reverse().join("");
  console.log("Ex.28:", reversed);
}

reverseString("hello");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  const position = sentence.indexOf(word);
  if (position === -1) {
    console.log("Ex.29:", "Not found");
  } else {
    console.log("Ex.29:", position);
  }
}

findWordPosition("I love JavaScript", "love");
findWordPosition("I love JavaScript", "hate");
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
  switch (operator) {
    case "+":
      console.log("Ex.30:", a + b);
      break;
    case "-":
      console.log("Ex.30:", a - b);
      break;
    case "*":
      console.log("Ex.30:", a * b);
      break;
    case "/":
      console.log("Ex.30:", a / b);
      break;
    default:
      console.log("Ex.30:", "Invalid operator");
  }
}

calculate(10, "+", 5);
calculate(10, "-", 5);
calculate(10, "*", 5);
calculate(10, "/", 5);
calculate(10, "%", 5);