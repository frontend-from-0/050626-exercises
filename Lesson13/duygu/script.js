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
      "Provide type of the input is incorrect when calling checkPassword function. Please provide a string and try again",
    );
    return;
  }
  if (password.length >= 8) {
    console.log("Password length is sufficient.");
  } else {
    console.log("Password is too short.");
  }
}
console.log("Ex.1. -----------");
checkPassword("1234");
checkPassword("34yr3hfej");
checkPassword(12343253452345);
console.log("Ex. -----------");


/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/

function uppercaseName(name) {
  if (typeof name !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling uppercaseName function. Please provide a string and try again",
    );
    return;
  }
  const uppercaseName = name.toUpperCase();
  console.log(uppercaseName);
}
console.log("Ex.2. -----------");
uppercaseName("name");
uppercaseName("duygu");
uppercaseName("juli");
uppercaseName(12345);
console.log(" -----------");

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com". 
   */

function normalizeEmail(email) {
  if (typeof email !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling normalizeEmail function. Please provide a string and try again",
    );
    return;
  }
  const normalizeEmail = email.toLowerCase();
  console.log(normalizeEmail);
}

console.log("Ex. 3. -----------");
normalizeEmail("duygu@gamil.com");
normalizeEmail("ANTEP@GAMIL.COM");
normalizeEmail(1234);
console.log(" -----------");


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
      "Provided type of the input is incorrect when calling getDomain function. Please provide a string and try again",
    );
    return;
  }

  const index = email.indexOf("@");
  if (index === -1) {
    console.log(
      "Provided input is not a correct email address, correct the input. and try again.",
    );
    return;
  }
  const domain = email.slice(index + 1);
  console.log(domain);
}
console.log(" Ex. 4. -----------");
getDomain("jane.doe@gmail.com");
getDomain("j.de@hot.com");
getDomain("jgmail.com");
console.log(" -----------");


/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/

function containsWord(sentence, word) {
  if ((typeof sentence !== "string" || typeof word !== "string")) {
    console.log(
      "Provided type of the input is incorrect when calling containsWord function. Please provide a string and try again",
    );
    return;
  }
  const isFound = sentence.includes(word);  // includes bir fonksiyon ona parametre word verecegimiz icin parantez
  if (isFound) {
    console.log(`${word},  found in sentence.`);
  } else {
    console.log(`${word}, not found in sentence.`);
  }
}

console.log("EX. 5.  -----------");
containsWord(
  "Provided type of the input is incorrect when calling containsWord function.",
  "is",
);
containsWord(
  "Provided type of the input is incorrect when calling containsWord function.",
  "duygu",
);
containsWord("Provided type of the input is incorrect when calling containsWord function."
);
console.log(" -----------");

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
      "Provided type of the input is incorrect when calling checkFileExtension function. Please provide a string and try again",
    );
    return;
  }

  const formatCheckher = filename.toLowerCase().endsWith(".pdf");
  if (formatCheckher) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}

console.log("EX. 6.  -----------");
checkFileExtension("notes.pdf");
checkFileExtension("notes.html");
checkFileExtension("notes.PDF");
checkFileExtension("notes.pDf");
checkFileExtension(122);



/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

function compareNumbers(a, b) {
  if ((typeof a !== "number") || (typeof b !== "number")) {
    console.log("Provided type of the input is incorrect when calling compareNumbers function. Please provide a number and try again");
    return;
  }

  if (a > b) {
    console.log("a is bigger. ");

  } else if (b > a) {
    console.log("b is bigger.");
  }
  else {
    console.log("Numbers are equal.");
  }
}
console.log("Ex. 7 -----------------------");
compareNumbers(1, 6);
compareNumbers(3, 2);
compareNumbers(9, 9);
compareNumbers("a", 6);
compareNumbers(2, 'h');
console.log("Ex.-----------------------")


/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/

function areEqualIgnoreCase(str1, str2) {
  if ((typeof str1 !== "string") || (typeof str2 !== "string")) {
    console.log("Provided type of the input is incorrect when calling areEqualIgnoreCase function. Please provide a string and try again");
    return;
  }

  if (str1.toLowerCase() !== str2.toLowerCase()) {
    console.log("Strings are not equal.");
  }
  else {
    console.log("Strings are equal.");
  }
}

console.log("Ex.8  -----------------------");
areEqualIgnoreCase("hello", 'HELLO');
areEqualIgnoreCase('merhaba', 'merHAba');
areEqualIgnoreCase('small', 'big');
areEqualIgnoreCase('small', 'SMAL');
areEqualIgnoreCase(123, "kelime");
console.log("Ex-----------------------");


/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  if (typeof text !== "string" || typeof maxLength !== "number") {
    console.log("Provided type of the input is incorrect when calling truncateString function. Please provide a valid string or a number and try again"
    );
    return;
  }
  if (maxLength < text.length) {
    console.log((text.slice(0, maxLength)) + "...");
  }
  else {
    console.log(text);
  }
}

console.log("Ex. 9. -----------------------");
truncateString("duygu", 2);
truncateString("deryalar", 9);
truncateString("Buralar hep cayir idi cmen idi", 11);
truncateString(123, "s");
truncateString(123, 3);
console.log("Ex-----------------------");

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
  if (typeof number !== "number") {
    console.log("Provided type of the input is incorrect when calling evenOrOdd function. Please provide a number and try again");
    return;
  }
  if (number % 2 === 0) {
    console.log('Even')
  }
  else {
    console.log('Odd');
  }
}

console.log("Ex.10. -----------------------");
evenOrOdd(8);
evenOrOdd(3);
evenOrOdd(3245456);
evenOrOdd('1ksdfgjh');
console.log("Ex-----------------------");



/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  if (typeof url !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling checkProtocol function. Please provide a string and try again",
    );
    return;
  }

  const checkProtocol = url.toLowerCase().startsWith("https");
  if (checkProtocol) {
    console.log("Secure connection");
  }
  else;
  console.log("Unsecure connection")
}

console.log("Ex.11. -----------------------");
checkProtocol(`https://google.com/app/9af417d6a139`);
checkProtocol(`//.google.com/app/9417df73d6a139`);
checkProtocol(15435345346657756768);
console.log("Ex-----------------------");


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
  if (typeof num !== 'number') {
    console.log("Provided type of the input is incorrect when calling checkFileExtension function. Please provide a string and try again",
    );
    return;
  }

  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("There is only 7 days of a week, so you should enter a number between 1 and 7.");

  }

}
console.log("12. -------------------------")
getDayOfWeek(1);
getDayOfWeek(2);
getDayOfWeek(3);
getDayOfWeek(4);
getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(7);
getDayOfWeek(8);
getDayOfWeek("a");
console.log(" -------------------------")

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  if (typeof word !== "string") {
    console.log(
      "Provided type of the input is incorrect when calling repeatWord function. Please provide a string and try again",
    );
    return;
  }

  if (typeof times !== "number") {
    console.log(
      "Provided type of the input is incorrect when calling repeatWord function. Please provide a number and try again",
    );
    return;
  }

  console.log(word.repeat(times));
}

console.log("13.   -------------------------")
repeatWord("lena", 3);
repeatWord("le na", 5);
repeatWord("123 ", 4);
repeatWord(123, 4);
repeatWord('asjd', "123");
console.log(" -------------------------")


/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.

*/

function censorWord(sentence, target) {
  if (typeof sentence !== "string" || (typeof target !== "string")) {
    console.log("Provided type of the input is incorrect when calling censorWord function. Please provide a string and try again",
    );
    return;
  }
  const censored = sentence.toLowerCase().replaceAll(target, "****");
  console.log(censored);
}

console.log("14.  -------------------------")
censorWord("This is a bad word", 'bad');
censorWord("love you!", 'love');
censorWord("THIS is a bad word", 'this');
censorWord("This is a bad word", 123);
censorWord(234, 'bad');
console.log(" -------------------------")



/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str) {
  if (typeof str !== "string") {
    console.log("Provided type of the input is incorrect when calling startsWithA function. Please provide a string and try again",
    );
    return;
  }

  if (str.charAt(0).toUpperCase() === "A") {
    console.log("Starts with A")
  } else {
    console.log("Does not start with A");
  }
}

console.log("15.  -------------------------");
startsWithA('Araba');
startsWithA('araba');
startsWithA('12334');
startsWithA(12344);
console.log(" -------------------------");


/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n) {

  if (typeof text !== "string" || typeof n !== "number") {
    console.log("Provided type of the input is incorrect when calling sliceLastN function. Please provide a valid string or a number and try again");

    return;
  }
  const sliceLastN = (text.slice(-n));
  console.log(sliceLastN);
}

console.log("16.   -------------------------");
sliceLastN("duygu", 2);
sliceLastN("hello from the other sideeeee", 15);
sliceLastN("123238328547", 7);
sliceLastN(124325435, 2);
sliceLastN("duygu", "35346");
console.log(" -------------------------");

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
    console.log("Provided type of the input is incorrect when calling sliceLastN function. Please provide a valid string or a number and try again");
    return;
  }

  switch (true) {

    case (score > 100):
      console.log("You entered a. wrong value, score can not be more than 100.");
      break;
    case (score >= 90):
      console.log(`Your score is ${score}, and your grade is A.`);
      break;
    case (score >= 80):
      console.log(`Your score is ${score}, and your grade is B.`);
      break;
    case (score >= 70):
      console.log(`Your score is ${score}, and your grade is C.`);
      break;
    case (score >= 60):
      console.log(`Your score is ${score}, and your grade is D.`);
      break;
    case (score < 60):
      console.log(`Your score is ${score}, and your grade is F.`);
      break;

  }
}

console.log("EX. 17      ----------------")
gradeChecker(95);
gradeChecker(89);
gradeChecker(80);
gradeChecker(70);
gradeChecker(65);
gradeChecker(56);
gradeChecker(156);
gradeChecker("34");
console.log("EX. ----------------")


/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar) {
  if (typeof str !== 'string') {
    console.log("Provided type of the input is incorrect when calling replaceCharacter function. Please provide a string and try again");
    return;
  }
  const replaceCharacter = str.toLowerCase();
  const newStr = replaceCharacter.replaceAll(oldChar, newChar);
  console.log(`${newStr}`);
}
console.log('EX. 18. -------------');
replaceCharacter("merhaba bu bir yenidunya", 'merhaba', 'helloo');
replaceCharacter("adem degil havva", 'degil', 'ile');
replaceCharacter("bugun bayram erken kalkin bayram bayram", 'bayram', 'cuma');
replaceCharacter("MERHABA ben buyuk harfle baslarim ", 'merhaba', 'helloo');
replaceCharacter(124232345353, '12', '12213432543465665786786');
console.log('EX. -------------');


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
    console.log("Provided type of the input is incorrect when calling capitalizeFirst function. Please provide a string and try again"
    )
    return;
  }
  const capitalizeFirst = (text.charAt(0).toUpperCase());
  const thenslice = text.slice(1);

  console.log(capitalizeFirst + thenslice);
}

console.log("EX.19 . -------------");
capitalizeFirst("duygu");
capitalizeFirst("merhaba");
capitalizeFirst("nasilsin bugun?");
capitalizeFirst("242353536");
capitalizeFirst(242353536);
console.log("-------------");


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
    console.log("Provided type of the input is incorrect when calling trafficLight function. Please provide a string and try again"
    );
    return;
  }

  switch (color.toLowerCase()) {
    case 'red':
      console.log(`${color}, Stop`);
      break;
    case 'yellow':
      console.log(`${color}, Caution`);
      break;
    case 'green':
      console.log(`${color}, Go`);
      break;
    default:
      console.log(`${color}, invalid color`);
  }
}
console.log("EX. 20  ---------------")
trafficLight('red');
trafficLight('yellow');
trafficLight('green');
trafficLight('orange');
trafficLight(1234);
trafficLight("Red");
console.log("EX.  ---------------")

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
  if (typeof str !== "string") {
    console.log("Provided type of the input is incorrect when calling isLongString function. Please provide a string and try again");
    return;
  }

  if (str.length > 10) {
    console.log(`EX.21. ${str} is a Long string`)
  }
  else if (str.length < 10) {
    console.log(`EX.21. ${str} is a Short string`)
  }
  else if (str.length === 10) {
    console.log('EX.21. The length is exactly 10.')
  }
}
console.log("Ex.21. -----------------------");
isLongString("The long island beachaskhfipujhfjahfjkhdkjk");
isLongString("code");
isLongString("onkarakter");
isLongString("1234567890");
isLongString(1234567890);
console.log("Ex-----------------------");


/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

function isSpam(text) {

  if (typeof text !== "string") {
    console.log('Provide type of the input is incorrect when calling isSpam function. Please provide a string and try again');
    return;
  }
  let nameLowerCase = text.toLowerCase();

  if (nameLowerCase.includes('spam')) {
    console.log('This text is spam');
  }
  else;
  console.log('This text is not spam.')
}

console.log("Ex.22. -----------------------");
isSpam("bu ondan degil");
isSpam('bu bir spam degil')
isSpam(12313423324);
console.log("Ex-----------------------");

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
    console.log("Provided type of the input is incorrect when calling getTwoPartInitials function. Please provide a string and try again"
    );
    return;
  }
  const getTwoPartInitials = fullName.split(" ");
  const firstInitial = getTwoPartInitials[0].charAt(0).toUpperCase();
  const secondInitial = getTwoPartInitials[1].charAt(0).toUpperCase();
  console.log(`Ben kisaca ${firstInitial}.${secondInitial}.`);
}

console.log("Ex. 23.  -----------");
getTwoPartInitials('duygu edemen');
getTwoPartInitials('feridun duzagac');
getTwoPartInitials('lena edemen');
getTwoPartInitials('juli talvensaari');
getTwoPartInitials(2349734768704);
console.log('-----------------------');

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
    console.log("Provided type of the input is incorrect when calling getSeason function. Please provide a number and try again");
    return;
  }
  //hepsini tek tek tanimlamamiza gerek olmami grup halnde tanimlayabilmeliyiz bence???

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

console.log("EX. 24---------------")
getSeason(1);
getSeason(5);
getSeason(8);
getSeason(10);
getSeason(9);
getSeason(18)
getSeason("a")
console.log("EX. ---------------")


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
    console.log("Provided type of the input is incorrect when calling containsNumber function. Please provide a string and try again");
    return;
  }

  if (str.match(/\d/)) {
    console.log(`The word '${str}', Contains number`);
  } else {
    console.log(`The word '${str}', No number found`);
  }
}

console.log("EX. 25 ---------------")
containsNumber("hello");
containsNumber("room 5");
containsNumber("123");
containsNumber("hello fr0m the othersideee");
containsNumber('zero');
containsNumber(1287346);
console.log("EX. ---------------");


/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength) {
  if (typeof str !== "string") {
    console.log("Provided type of the input is incorrect when calling padString function. Please provide a string and try again",
    )
    return;
  }
  if (str.length < maxLength) {
    console.log(str.padEnd(maxLength, "*"));
  }
  else;
}
console.log("EX. 26 ---------------")
padString("duygu", 9);
padString("JavaScript", 99);
padString(1234234535, 9);
console.log("EX. ---------------")


/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise */


function canVote(age) {
  if (typeof age !== "number") {
    console.log("Provided type of the input is incorrect when calling canVote function. Please provide a number and try again")
    return;
  }

  if (age < 18) {
    console.log(`${age}, Too young to vote`);
  }
  else if (age >= 18 && age < 99) {
    console.log(`${age}, can vote`);
  }
  else if (age === 100) {
    console.log(`${age}, ken leeee, yulibudiwithoutyouuuuucanliiiii`);
  }
  else if (age >= 101) {
    console.log(`${age}, too old to vote`);
  }
}

console.log("27.  --------------");
canVote(17.5);
canVote(18);
canVote(99);
canVote(100);
canVote(101);
canVote("dfs");
console.log("27. --------------");

/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/

function reverseString(text) {
  if (typeof text !== "string") {
    console.log("Provided type of the input is incorrect when calling reverseString function. Please provide a string and try again");
    return;
  }
  const reverseString = text.split('').reverse().join("");
  console.log(`${reverseString}`);
}

console.log("28.  --------------");
reverseString('hello');
reverseString('cekoslavakyalilastiramadiklarimizdan misiniz?');
reverseString('1985643987658');
reverseString(2384756);
console.log("--------------");


/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log("Provided type of the input is incorrect when calling findWordPosition function. Please provide a string and try again");
    return;
  }
  const findWordPosition = sentence.indexOf(word);
  if (findWordPosition === -1) {
    console.log("Not found");
  } else; {
    console.log(`Indexof ${word} is: ${findWordPosition}`)
  }
}
console.log("29.  --------------");
findWordPosition("buralar hep cayir idi cimen idi", 'cimen');
findWordPosition("buralar hep cayir idi cimen idi", 'ura');
findWordPosition(1234235, 'ura');
findWordPosition("buralar hep cayir idi cimen idi", 'karanlik');
console.log(" --------------");

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
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Provided type of the input is incorrect when calling calculate function. Please provide a number and try again")
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

console.log("30.  --------------");
calculate(2, "+", 3);
calculate(2, "-", 3);
calculate(2, "*", 3);
calculate(2, "/", 3);
calculate(2, "%", 3);
calculate('a', "+", 3);
console.log(" --------------");