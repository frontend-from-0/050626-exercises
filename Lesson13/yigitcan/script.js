/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/


/*


2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/



/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/


/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/


/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/


/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/



function compareNumbers(numA, numB) {
 
   if (typeof numA !== "number" || typeof numB !== "number" || Number.isNaN(numA) || Number.isNaN(numB)){
    return "Invalid input.";
   }
  if (numA > numB) {
   return `${numA} is bigger.` ;
  } else if (numA < numB) {
    return `${numB} is bigger.`;
  } else {
    return "Numbers are equal";
  }
}
console.log('Ex 7. -----------------')

console.log(compareNumbers(57, 57));
console.log(compareNumbers(-57, 60));
console.log(compareNumbers(NaN, 10));
console.log(compareNumbers("-57", 60));
console.log(compareNumbers(5, 2));


console.log('----------------------')




/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/



/* I realize this wasn't the exact solution of this exercise. But i prefer to leave it like this
because it was quite educational for me to practice different concepts. 
*/

function areEqualIgnoreCase(str1, str2) {

   if (typeof str1 !== "string" || typeof str2 !== "string")  {
    return "Invalid input.";
   }

   const trimmedStr1 = str1.trim();
  const trimmedStr2 = str2.trim();

   if(trimmedStr1 == "" || trimmedStr2 == "") {
    return "Invalid input.";
   }

     const lowerCased1 = trimmedStr1.toLowerCase();
     const lowerCased2 = trimmedStr2.toLowerCase();

  if(lowerCased1 === lowerCased2) {
    return "Strings are equal";
  } else if (lowerCased1 !== lowerCased2) {
    return "Strings are not equal";
  } 
}

console.log('Ex 8. -----------------')

console.log(areEqualIgnoreCase("Dog", "DOG"));
console.log(areEqualIgnoreCase("Dog", "Cat"));
console.log(areEqualIgnoreCase("Dog  ", "Dog"));
console.log(areEqualIgnoreCase("  ", "Dog"));
console.log(areEqualIgnoreCase("Dog", 6));
console.log(areEqualIgnoreCase("Dog", "  "));

console.log('----------------------')


/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/

console.log('Ex . -----------------')


console.log('----------------------')

/*
10. Check Even or Odd (if-else)
   - Define a function `everOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function everOrOdd(number) {

  if ((number % 2 === 0)) {
    return "Number is even";
  } else if(number % 2 === 1) {
    return "Number is odd";
  } else {
    return "Invalid Input";
  }
  
  }


 console.log('Ex 10. -----------------')

 console.log(everOrOdd(10));
 console.log(everOrOdd(-7));
 console.log(everOrOdd(0));
 console.log(everOrOdd(1));
 console.log(everOrOdd("one"));
 console.log(everOrOdd(3.17));
 console.log(everOrOdd(NaN));
 

console.log('----------------------')

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {

  if (typeof url !== "string")  {
    return "Invalid input.";
   }

  const protocolChecker = url.toLowerCase().startsWith("https");

  if(protocolChecker) {
    return "Secure connection";
 } else {
  return "Unsecure connection";
 } 
}

console.log('Ex 11. -----------------')


console.log(checkProtocol("httPS:www.url.com"));
console.log(checkProtocol("www.abc.com"));
console.log(checkProtocol(12));

console.log('----------------------')

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/


function getDayofWeek(num) {
 
  if (num === 0 || num > 7 || typeof num === "string") {
    return "Invalid day";
  }


  switch (num) {  
    case 1 :
    return "Monday";
  
    case 2 :
      return "Tuesday";
    case 3 : 
    return "Wednesday";
    case 4 : 
    return "Thursday";
    case 5 : 
    return "Friday";
    case 6 : 
    return "Saturday";
    case 7 : 
    return "Sunday";
  } }

console.log('Ex 12. -----------------')
console.log(getDayofWeek(1));
console.log(getDayofWeek(3));
console.log(getDayofWeek(7));
console.log(getDayofWeek(8));
console.log(getDayofWeek(0));
console.log(getDayofWeek(NaN));
console.log(getDayofWeek("Monday"));
console.log('----------------------')

// value == value
/// value and type === value and type


/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {

  const lotsOfTimes = word.repeat(times);
  
  return "Repeated result is " + lotsOfTimes;
}

console.log('Ex 13. -----------------')
console.log(repeatWord("ankaramessi", 5));
console.log('----------------------')

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/


function censorWord(sentence, target) {


  const replaced = "*".repeat(target.length); 

  const censored = sentence.replaceAll(target, replaced);

  return censored;
}

console.log('Ex 14. -----------------')
console.log(censorWord("thunderbolt and lightning very very frightning me", "very"));
console.log(censorWord("shake shake shake senora, shake it all the time", "shake"));
console.log('----------------------')

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/




function startsWithA(str) {

  const firstChar = str.charAt(0);
  const lowered = firstChar.toLowerCase();

  if(lowered === "a") {
    return "Starts with A";
  } else {
    return "Doesnt start with A";
  }
  
}
console.log('Ex 15. -----------------')
console.log(startsWithA("Agony"));
console.log(startsWithA("Javascript"));
console.log('----------------------')

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/


function sliceLastN(text, n) {
  const sliced = text.slice(-n); 

  return "The sliced result is " + sliced;
}


console.log('Ex 16. -----------------')
console.log(sliceLastN("Javascript" , 3));
console.log('----------------------')

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

 if (score < 0 || score > 100) {
  return "Invalid Input";
 }
  
  if (score < 60) {
    return "F";
  } else if (score >= 60 && score <70) {
    return "D";
  } else if (score >=70 && score < 80) {
    return "C";
  } else if (score >=80 & score < 90) {
    return "B";
  } else if (score >= 90 && score <=100) {
    return "A";
  } 
 }


console.log('Ex 17. -----------------')

console.log(gradeChecker(-10));
console.log(gradeChecker(120));
console.log(gradeChecker(50));
console.log(gradeChecker(61));
console.log(gradeChecker(71));
console.log(gradeChecker(81));
console.log(gradeChecker(91));
console.log('----------------------')

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/


console.log('Ex 18. -----------------')


console.log('----------------------')

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

  const capitalized = text.charAt(0).toUpperCase();
  const sliced = text.slice(1);

  return capitalized + sliced; 
}


console.log('Ex 19. -----------------')
console.log(capitalizeFirst("yigit"));

console.log('----------------------')

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/

function trafficLight(color) {

  const lowered = color.toLowerCase();


  switch (lowered) {
    case "red": 
    return "Stop!";

    case "yellow" : 
    return "Caution";

    case "green" : 
    return "Go";
  }
}

console.log('Ex 20. -----------------')
console.log(trafficLight("Green"));
console.log(trafficLight("yelLOw"));
console.log(trafficLight("red"));
console.log('----------------------')

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
 
  if (str.length > 10) {
    return "Long String";
  } else {
    return "Short String";
  }
}

console.log('Ex 21. -----------------')
console.log(isLongString("asdskdaskdkadka"));
console.log(isLongString("sdasds"));

console.log('----------------------')

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/


function isSpam(text) {
  const lowered = text.toLowerCase();
  const incl = lowered.includes("spam");

  if (incl) {
    return "This text is spam.";
  } else {
    return "This text is not spam.";
  }
}


console.log('Ex 22. -----------------')
console.log(isSpam("spAm text"));

console.log('----------------------')

/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/

function getTwoPartInitials(fullname) {
  const separated = fullname.split(" ");
  const firstpart = separated[0].charAt(0).toUpperCase();
  const secondpart = separated[1].charAt(0).toUpperCase();

  return firstpart + "." + secondpart + ".";
} 


console.log('Ex 23. -----------------')
console.log(getTwoPartInitials("yigitcan yesilyurt"));
console.log('----------------------')


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

if (monthNum <= 0 || monthNum > 12) {
  return "Invalid Month";
}

  switch(monthNum) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5: 
      return "Spring";
    case 6: 
    case 7: 
    case 8: 
      return "Summer";
    case 9: 
    case 10:
    case 11: 
      return "Autumn";
  }
}

console.log('Ex 24. -----------------')
console.log(getSeason(12));
console.log(getSeason(3));
console.log(getSeason(6));
console.log(getSeason(9));
console.log(getSeason(0));
console.log(getSeason(13));
console.log('----------------------')

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/

console.log('Ex 25. -----------------')


console.log('----------------------')

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/


console.log('Ex 26. -----------------')


console.log('----------------------')

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/


console.log('Ex 27. -----------------')


console.log('----------------------')


/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/



console.log('Ex 28. -----------------')


console.log('----------------------')

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/



console.log('Ex 29. -----------------')


console.log('----------------------')

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



console.log('Ex 29. -----------------')

function calculate (a, operator, b) {

}
console.log('----------------------')