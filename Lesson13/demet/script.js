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
      console.log("Password length is sufficient.");
   } else { console.log("Password is too short."); }
}
checkPassword("demet123");
checkPassword("abc");

/*


2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
function uppercaseName(name) {
   console.log(name.toUpperCase());
}
uppercaseName("demet");
/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/
function normalizeEmail(email) {
   console.log(email.toLowerCase());
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
   console.log(email.slice(email.indexOf("@") + 1));

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
      console.log(word + "found in sentence");
   } else {
      console.log(word + "not found in sentence.")
   }

}
containsWord("I love JavaScript", "JavaScript");
/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
   if (filename.endsWith(".pdf")) {
      console.log("This is a PDF file.");
   } else {
      console.log("Not a PDF file.");
   }
}
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
      console.log("a is bigger");
   }  else if (b > a) {
      console.log("b is bigger");
   } else {
      ("Numbers are equal");
   }
}
compareNumbers(5, 10);
compareNumbers(8, 2);
compareNumbers(4, 4);
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
      console.log("Strings are equal.");
   } else {
      console.log("Strings are not equal.");
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
      console.log(text.slice(0, maxLength) + "...");
   } else {
      console.log(text);
   }
}
truncateString("İstanbul Üniversitesi", 12);
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
   if (number % 2 === 0) {
      console.log("Even");
   } else {
      console.log("Odd");
   }
}
evenOrOdd(8);
evenOrOdd(5);
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
   if (url.toLowerCase().startsWith("https")) {
      console.log("Secure connection");
   } else {
      console.log("Unsecure connection")
   }

}
checkProtocol("HTTPS://www.google.com");
checkProtocol("http://www.google.com");
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
      default:
         console.log("Invalid day");
   }
}
getDayOfWeek(5);
getDayOfWeek(8);
/*
 
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
   console.log(word.repeat(times));

}
repeatWord("Hello" , 3);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
   console.log(sentence.replaceAll(target, "****"));

}
censorWord("This is a fun word", "fun")
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
   if (str.charAt(0) === "A"){
    console.log("Start with A"); 
} else {
   console.log("Does not start with A");
}
}

startsWithA("Atatürk");
startsWithA("Mustafa");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
   console.log(text.slice(-n));
}
sliceLastN("Atatürk", 4);
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
         console.log("A");
         break;

      case score >= 80:
         console.log("B");
         break;

      case score >= 70:
         console.log("C");
         break;

      case score >= 60:
         console.log("D");
         break;
      case score <= 59:
         console.log("F");
         break;
   }
}
gradeChecker(95);
gradeChecker(85);
gradeChecker(55);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
   console.log(str.replaceAll(oldChar, newChar));

}
replaceCharacter("üzüm", "ü", "u");
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
   console.log(text.charAt(0).toUpperCase() + text.slice(1));
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
         console.log("Stop");
         break;

      case "yellow":
         console.log("Caution");
         break;

      case "green":
         console.log("Go");
         break;
      default:
         console.log("Invalid color");
   }
}
trafficLight("red");
trafficLight("yellow");
trafficLight("green");
trafficLight("blue");
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
   if (str.length > 10){
   console.log("Long string");
} else {
   console.log("Short string");
}

}
isLongString("javascript");
isLongString("my name is Demet")
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
   if (text.toLowerCase().includes("spam")) {
      console.log("This text is spam.");
   } else {
      console.log("This text is not spam.");
   }
}
isSpam("This message is SPAM!");
isSpam("hello, how are you");
/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/
function getTwoPartInitials(fullName) {
   let parts = fullName.split(" ");
   let firstInitial = parts[0].charAt(0).toUpperCase();
   let secondInitial = parts[1].charAt(0).toUpperCase();
   console.log(firstInitial + "." + secondInitial + ".");

}
getTwoPartInitials("John Doe");
getTwoPartInitials("demet karduz");

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the seasonor "Invalid month" if out of range.
*/
function getSeason(monthNum) {
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
getSeason(1);
getSeason(13);
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
      console.log("Contains number");

} else {
   console.log("No number found");
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
   console.log(str.padEnd(maxLength, "*"));
}
padString("hello", 10);
padString("cat", 3);
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
   if (age >= 18) {
      console.log("Can vote");
   } else {
      console.log("Too young to vote");
   }
}
canVote(17);
canVote(23);
/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/
function reverseString(text) {
   console.log(text.split("").reverse().join(""));

}
reverseString("javascript");
reverseString("hello");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
   return sentence.indexOf(word);
}
let wordPosition = findWordPosition("I love Javascript", "Javascript");
if (wordPosition !== -1) {
   console.log(wordPosition);
} else {
   console.log("Not found");
}
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
   switch (operator){
   case "+":
      console.log(a + b);
      break;
      case "-":
         console.log(a - b);
         break;
      case "*":
         console.log(a * b);
      case "/":
         console.log(a / b);
         break;
         return
         console.log("Invalid operator");
   }
}
   calculate(10, "+", 5);
   calculate(10, "%", 5);
