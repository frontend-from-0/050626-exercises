/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

function checkPassword(password) {
   if (typeof password !== 'string') {
      console.log('Invalid input: password must be a string. Please chaeck the input and make sure it is a valid string and try again.');
      return;
   }

   if (password.length >= 8) {
      console.log('Password length is sufficient.');
   } else {
      console.log('Password is too short.');
   }
}

console.log('Ex.1---------------------');
checkPassword('abcd');
checkPassword('abcdefghijk');
checkPassword(1236598);
console.log('-------------------------');
/*


2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
function uppercaseName(name) {
   if (typeof name !== 'string') {
      console.log('Invalid input: name must be a string. Please check the input and make sure it is a valid string and try again.');
      return;
   }

   console.log(name.toUpperCase());
}
console.log('Ex.2---------------------');
uppercaseName('John Doe');
uppercaseName('ece naz');
console.log('-------------------------');

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

console.log('Ex.3---------------------');
function normalizeEmail(email) {
   // Validation: the input must be a string, otherwise .toLowerCase() would throw an error.
   // I also check for '@' because a valid email address must contain it.
   // If the input is invalid, show a message and stop the function early with return
   if (typeof email !== 'string' || !email.includes('@')) {

      console.log('Invalid input. Please provide proper email address.');
      return;
   }

   if (email.includes('@') && typeof email === 'string') {

      const normalizedEmail = email.toLowerCase();
      console.log(normalizedEmail);
      return;
   }

}


console.log('Ex.3---------------------');
normalizeEmail("USER@Example.COM");
normalizeEmail("ECENAZ@ZAGLI.COM");
normalizeEmail(11111);
normalizeEmail('12321.com');
console.log('---------------------');

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
/*
function getDomainWithSubstring(email) {


   // Validation: input must be a string and contain '@', otherwise it is not a valid email. So I check for thah first.
   if (typeof email !== 'string' || !email.includes('@')) {
      console.log('Invalid input. Please provide proper email address.');
      return;
   }

   // indexOf finds where '@' is, so substring can start right after it (+1 skips the '@').
   // substring(start, end) returns the characters from start up to (but not including) end.
   const atIndex = email.indexOf('@');
   const domain = email.substring(atIndex + 1, email.length);
   console.log(domain);
}
   */


function getDomain(email) {
   // slice method


   // I used indexOf('@') to find the position of the '@' character in the email.
   // slice() needs a starting position, and the '@' can be at a different place in each email
   // indexOf returns that position, and I add 1 so the domain starts right after '@'.

   //I think I should check for '@' because a valid email address must contain it.
   if (typeof email !== 'string' || !email.includes('@')) {

      console.log('Invalid input. Please provide proper email address.');
      return;

   }
   const atIndex = email.indexOf('@');
   const domain = email.slice(atIndex + 1);
   console.log(domain);


}
console.log('Ex.4---------------------');
getDomain('ece@domain.com');
getDomain('learningjsisfun@domain.com');
getDomain('jsisaprogramminglanguage.com');
getDomain(987654);
console.log('-------------------------');
/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/0
function containsWord(sentence, word) {
   // Validation: both inputs must be strings, otherwise .includes() would not work.
   if (typeof sentence !== 'string' || typeof word !== 'string') {
      console.log('Invalid input. Both sentence and word must be text.');
      return;
   }
   const isFound = sentence.includes(word);
   // includes() returns true if the word is in the sentence, false if not.

   if (isFound) {
      console.log(`${word} found in sentence.`);
   } else {
      console.log(`${word} not found in sentence.`);
   }
}
console.log('Ex.5---------------------');
containsWord('I am learning js', 'learning');
containsWord('This winter is going to be awesome', 'lovely');
containsWord('I have been here 2. time', 2);
console.log('-------------------------');

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
   if (typeof filename !== 'string') {
      console.log('Invalid input. Please provide a valid filename as a string!');
      return;
      return;
   }

   const isPdf = filename.toLowerCase().endsWith('.pdf');

   if (isPdf) {
      console.log('This is a PDF file.');
   } else {
      console.log('Not a PDF file.');
   }
}

checkFileExtension('document.pdf');
checkFileExtension('image.png');
checkFileExtension('report.PDF');
checkFileExtension(123659);


/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      console.log('Invalid input. Both a and b must be numbers.');
      return;
   }

   if (a > b) {
      console.log('a is bigger.');
   } else if (b > a) {
      console.log('b is bigger.');
   } else {
      console.log('Numbers are equal.');
   }

}
console.log('Ex.7---------------------');
compareNumbers(10, 5);
compareNumbers(3, 8);
compareNumbers(7, 7);
compareNumbers('10', 5);
console.log('---------------------');


/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/
function areEqualIgnoreCase(str1, str2) {
   if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      console.log('Input must be a text. Please provide valid text string for both inputs.');
      return;

   }

   /* if (str1.toLowerCase() ) */

   const lowerString1 = str1.toLowerCase();
   const lowerString2 = str2.toLowerCase();

   if (lowerString1 === lowerString2) {
      console.log('Strings are equal.');
   } else if (lowerString1 !== lowerString2) {
      console.log('Strings are not equal.');
   }
}

console.log('Ex.8---------------------');
areEqualIgnoreCase('Hello', 'hello');
areEqualIgnoreCase('CAT', 'cat');
areEqualIgnoreCase('Hello', 'cat');
console.log('-------------------------');

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {

   if (typeof text !== 'string' || typeof maxLength !== 'number') {
      console.log('Input must be a text and the number. Please provide valid text string and the number.');
      return;

   }


   if (text.length <= maxLength) {
      // Text is short enough; show it as it is, no '...'
      console.log(text);
   }

   //slice(0, maxLength) takes the characters from the start of the text up to maxLength.
   // I start at 0 because I want to keep the beginning of the text and cut off the end.
   let result = text;
   if (text.length > maxLength) {
      result = text.slice(0, maxLength) + '...';
      console.log(result);
   }

}
console.log('Ex.9---------------------');
truncateString('I am a student.', 5);
truncateString('Full moon.', 20);
truncateString('Cat lovers', 11);
console.log('-------------------------');
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
   if (typeof number !== 'number') {
      console.log('Invalid input. Please provide a valid number and try again.');
      return;
   }

   if (number % 2 === 0) {
      console.log('Even');
   } else {
      console.log('Odd');
   }
}
console.log('Ex.10---------------------');
evenOrOdd(5);
evenOrOdd(4);
evenOrOdd(55);
evenOrOdd(42);
evenOrOdd('85');

console.log('--------------------------');

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
   //input must be a string, otherwise .toLowerCase() would throw an error.

   if (typeof url !== 'string') {
      console.log('Input must be text. Please provide a valid URL.');
      return;
   }

   const lowerUrl = url.toLowerCase();

   if (lowerUrl.startsWith('https')) {
      console.log('Secure connection');

   } else {
      console.log('Unsecure connection');
   }
}
console.log('Ex.11---------------------');
checkProtocol('https://www.google.com');
checkProtocol('HTTPS://EXAMPLE.COM');
checkProtocol('http://example.com');
checkProtocol(12345);
console.log('--------------------------');
/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/

// value == value
/// value and type === value and type

function getDayOfWeek(num) {

   switch (num) {
      case 1:
         console.log('Monday');
         break;
      case 2:
         console.log('Tuesday');
         break;
      case 3:
         console.log('Wednesday');
         break;
      case 4:
         console.log('Thursday');
         break;
      case 5:
         console.log('Friday');
         break;
      case 6:
         console.log('Saturday');
         break;
      case 7:
         console.log('Sunday');
         break;
      default:
         console.log('Invalid day');
   }
}

console.log('Ex.12---------------------');
getDayOfWeek(1);
getDayOfWeek(5);
getDayOfWeek(7);
getDayOfWeek(0);
getDayOfWeek(10);
getDayOfWeek('3');
console.log('------------------------');
/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
   if (typeof word !== 'string' || typeof times !== 'number' || times <= 0) {
      console.log('check the input and make sure it is a valid string and number and try again');
      return;
   }

   const repeated = word.repeat(times);
   console.log(repeated);

}
console.log('Ex.13---------------------');
repeatWord('ha', 3);
repeatWord('Bodrum ', 2);
repeatWord('abc', 0);
repeatWord('hi', -1);
repeatWord(5, 3);
console.log('--------------------------');
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
   if (typeof sentence !== 'string' || typeof target !== 'string') {
      console.log('This should be a text string. Please check the input and make sure it is a valid string and try again.');
      return;
   }

   // I used .repeat() to create a string which has the same length as the target word. so that the replacement works for any length of the target wordi not just given stars number.
   const stars = '*'.repeat(target.length);
   const censored = sentence.replaceAll(target, stars);

   console.log(censored);

   // const censored = sentence.replace(target, '*******');
   // console.log(censored);

}
console.log('Ex.14---------------------');
censorWord('This is bad, really bad', 'bad');
censorWord('Hello world', 'world');
censorWord('Hello world', '');
censorWord(123, 'bad');
console.log('--------------------------');
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
   if (typeof str !== 'string') {
      console.log('It must contain the string value. Please re-check it.');
      return;

   }
   if (str.charAt(0) === 'A') {
      console.log('Starts with A');
   } else {
      console.log('Does not start with A');
   }

   /* if(str[0] === 'A'){
   console.log('Starts with A);
   }else {
      console.log('Does not start with A);
}
   */

}

// I did not convert to lowercase because the task asks to check for a capital 'A'.
console.log('Ex.15--------------------');
startsWithA('Apple');
startsWithA('Banana');
startsWithA('apple');
startsWithA(123);
console.log('----------------------');

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
   if (typeof text !== 'string' || typeof n !== 'number' || n <= 0) {
      console.log('Invalid input. Please provide a text and a positive number.');
      return;
   }
   const sliced = text.slice(-n);
   console.log(sliced);

}

console.log('Ex.16-------------------');
sliceLastN('Javascript', 5);
sliceLastN('Bodrum', 3);
sliceLastN('Hello', 10);
sliceLastN('Hello', 0);
sliceLastN(12345, 2);
console.log('-------------------');
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

   if (typeof score !== 'number') {
      console.log('Score must contain the numaric value. Please make sure the input is valid.');
      return;
   }

   // I used switch(true) because switch only checks exact matches with ===.
   //This way, each case condition (like score >= 90) is checked, and the first true one runs.
   switch (true) {
      case score >= 90:
         console.log('A');
         return;
      case score >= 80:
         console.log('B');
         return;
      case score >= 70:
         console.log('C');
         return;
      case score >= 60:
         console.log('D');
         return;
      default:  // I used default instead of score <= 59, so any score below 60 (like 59.5) gets an F.Otherwise, a score like 59.5 would match no case and nothing would be logged.
         console.log('F');

   }
}
console.log('Ex.17-------------------');
gradeChecker(89);
gradeChecker(75);
gradeChecker(92);
gradeChecker(61);
gradeChecker(59, 5);
gradeChecker('99');
console.log('------------------------');

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {


   // I check that oldChar is a real single character
   // An empty value would never match any character, so nothing would be replaced.
   if (typeof str !== 'string') {
      console.log('The input is a number, not text. Please check the input and write it as text.');
      return;
   }

   // An empty oldChar would put newChar between every character.
   if (oldChar === '') {
      console.log('The character to replace is empty. Please check the input.');
      return;
   }

   let result = '';

   for (i = 0; i < str.length; i++) {
      if (str[i] === oldChar) {
         result += newChar;
      } else {
         result += str[i];
      }
   }
   console.log(result);
}



/* {// oldChar and newChar are converted to strings automatically by replaceAll(), so I do not check their type
// I check that str is a string because replaceAll() only works on strings.
if (typeof str !== 'string') {
   console.log('The input is a number, not text. Please check the input and write it as text.');
   return;
}

// An empty oldChar would put newChar between every character.
if (oldChar === '') {
   console.log('The character to replace is empty. Please check the input.');
   return;
}

const newResult = str.replaceAll(oldChar, newChar);
console.log(newResult);

}*/
console.log('Ex.18-------------------');
replaceCharacter('banana', 'a', 'o');
replaceCharacter(2026, '2', '9');
replaceCharacter('hello', '', 'x');
replaceCharacter('cat', 't', 'p');
replaceCharacter('apple', 'a', 'e');
console.log('------------------------');

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
   if (typeof text !== 'string' || text === '') {
      console.log('Please provide a non-empty text.');
      return;
   }


   const capitalized = text[0].toUpperCase() + text.slice(1);
   console.log(capitalized);
}
console.log('Ex.19-------------------');
capitalizeFirst('bodrum');
capitalizeFirst('hello world');
console.log('------------------------');

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {

   // I did not use switch(true) here because the colors are exact values, not ranges.
   switch (color) {
      case 'red':
         console.log('Stop');
         return;

      case 'yellow':
         console.log('Caution');
         return;

      case 'green':
         console.log('Go');
         return;
      default:
         console.log('Invalid color');
   }

}
console.log('Ex.20-------------------');
trafficLight('red');
trafficLight('yellow');
trafficLight('green');
console.log('------------------------');
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {


   // Validation: input must be a string, because numbers do not have a .length property.
   if (typeof str !== 'string') {
      console.log(`The input is a ${typeof str}, not text. Please check the input.`);
      return;
   }


   if (str.length > 10) {
      console.log('Long string');
   } else {
      console.log('Short string');
   }

}
console.log('Ex.21-------------------');
isLongString('JavaScript is fun');
isLongString('Hello');
isLongString('abcdefghijk');
isLongString(12345678901);
console.log('------------------------');
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
   // Validation: text must be a string, because only strings have toLowerCase().
   if (typeof text !== 'string') {
      console.log(`The input is a ${typeof text}, not text. Please check the input.`);
      return;
   }

   const makeLowerCase = text.toLowerCase();


   if (makeLowerCase.includes('spam')) {
      console.log('This text is spam.');
   } else {
      console.log('This text is not spam.');
   }

}

console.log('Ex.22-------------------');
isSpam('Buy now! This is SPAM!');
isSpam('Hello, how are you?');
isSpam('Spam offer inside');
isSpam(123456789);
console.log('------------------------');
/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/
function getTwoPartInitials(fullName) {
   if (typeof fullName !== 'string') {
      console.log(`The input is a ${typeof fullName}, not text. Please check the input.`);
      return;
   }

   // split(' ') divides the name at the space and returns an array
   const parts = fullName.split(' ');


   // charAt(0) takes the first letter of each part; toUpperCase() makes it capital.
   const firtsInitial = parts[0].charAt(0).toUpperCase();
   const secondInitial = parts[1].charAt(0).toUpperCase();

   console.log(`${firtsInitial}.${secondInitial}.`);
}
console.log('Ex.23-------------------');
getTwoPartInitials('ece naz');
getTwoPartInitials('asil zagli');
console.log('------------------------');

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
         console.log('Winter');
         return;

      case 3:
      case 4:
      case 5:
         console.log('Spring');
         return;

      case 6:
      case 7:
      case 8:
         console.log('Summer');
         return;
      case 9:
      case 10:
      case 11:
         console.log('Autumn');
         return;

      default:
         console.log('Unvalid month');

   }
}

console.log('Ex.24-------------------');
getSeason(1);
getSeason(4);
getSeason(7);
getSeason(10);
getSeason(13);
getSeason('5');
console.log('------------------------');
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/
function containsNumber(str) {

   // Validation: str must be a string, because only strings have match().
   if (typeof str !== 'string') {
      console.log(`The input is a ${typeof str}, not text. Please check the input.`);
      return;
   }


   // /\d/ is a regex pattern that means "any digit from 0 to 9".
   if (str.match(/\d/)) {
      console.log('Contains number');
   } else {
      console.log('No number found');
   }

}

console.log('Ex.25-------------------');
containsNumber('hello');
containsNumber('room 5');
containsNumber('abc123');
containsNumber(12345);
console.log('------------------------');
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {

   if (str.length < maxLength) {
      const padded = str.padEnd(maxLength, '*');

      console.log(padded);
   } else {
      console.log(str);

   }

}

console.log('Ex.26-------------------');
padString('cat', 8);
padString('hello', 10);
padString('JavaScript', 5);
console.log('------------------------');
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
   if (typeof age !== 'number' || age < 0) {
      console.log('Please provide a valid age.');
      return;
   }

   if (age >= 18) {
      console.log('Can vote');
   } else {
      console.log('Too young to vote');
   }
}

console.log('Ex.27-------------------');
canVote(25);
canVote(18);
canVote(17);
canVote(-5);
canVote('20');
console.log('------------------------');
/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/
function reverseString(text) {

   const reversedString = text.split('').reverse().join('');
   console.log(reversedString);
}

console.log('Ex.28-------------------');
reverseString('hello');    // olleh
reverseString('Bodrum');   // murdoB
reverseString('12345');    // 54321
console.log('------------------------');
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
   if (typeof sentence !== 'string' || typeof word !== 'string') {
      console.log('Both inputs must be text. Please check the input.');
      return;
   }

   const position = sentence.indexOf(word);

   if (position === -1) {
      console.log('Not found');

   } else {
      console.log(position);
   }
}

console.log('Ex.29-------------------');
findWordPosition('I love JavaScript', 'love');
findWordPosition('I love JavaScript', 'JavaScript');
findWordPosition('I love JavaScript', 'Python');
findWordPosition('I love JavaScript', 'javascript');
console.log('------------------------');
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

   // Validation: a and b must be numbers.
   // Otherwise '+' would join strings: '5' + 3 gives '53' instead of 8.
   
   if (typeof a !== 'number' || typeof b !== 'number') {
      console.log('Both values must be numbers. Please check the input.');
      return;
   }

   switch (operator) {
      case '+':
         console.log('a + b');
         return;
      case '-':
         console.log('a - b');
         return;
      case '*':
         console.log('a * b');
         return;
      case '/':
         console.log('a / b');
         return;
      default:
         console.log('Invalid input');
   }


}
console.log('Ex.30-------------------');
calculate(10, '+', 5);
calculate(10, '-', 5);
calculate(10, '*', 5);
calculate(10, '/', 5);
calculate(10, '/', 0);
calculate(10, '%', 5);
calculate('5', '+', 3);
console.log('------------------------');
