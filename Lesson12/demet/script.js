/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
let firstNumber = 5;
let secondNumber = 3;
console.log(firstNumber + secondNumber);
// 2. Declare variables learnerName and learnerAge. Log a greeting: "Hello! I am (learnerName) and I am (learnerAge) years old."
const learnerName = "Demet";
const learnerAge = 39;
console.log("Hello! I am " + learnerName + " and I am " + learnerAge + " years old.");

// 3. Declare variables leftIntegerOperand=10 and rightIntegerOperand=4. Log the result of leftIntegerOperand-rightIntegerOperand, leftIntegerOperand*rightIntegerOperand, and leftIntegerOperand/rightIntegerOperand.
let leftIntegerOperand = 10;
let rightIntegerOperand = 4;
console.log(leftIntegerOperand - rightIntegerOperand);
console.log(leftIntegerOperand * rightIntegerOperand);
console.log(leftIntegerOperand / rightIntegerOperand);

// 4. Use template literals to log: "My name is (learnerName). I like JS." (reuse learnerName from exercise 2, or declare it again with the same value for a standalone answer).

console.log(` My name is ${learnerName}.I like JS.`);

// 5. Declare a string secretPasswordString = "securePass". Log the length of secretPasswordString.
let secretPasswordString = "securePass";
console.log(secretPasswordString.length);

// 6. Assign "hello world" to lowercasePhrase, convert lowercasePhrase to uppercase, and log the result.
let lowercasePhrase = "hello world";
console.log(lowercasePhrase.toUpperCase());

// 7. Declare helloToken = "Hello" and worldToken = "World". Concatenate them with a space in between and log the result.
let helloToken = "Hello";
let worldToken = "World";
console.log(helloToken + " " + worldToken);

// 8. Declare sampleNumberForTypeof = 42. Log the type of sampleNumberForTypeof using typeof.
let sampleNumberForTypeof = 42;
console.log(typeof sampleNumberForTypeof);

// 9. Declare numericValue = 100, convert numericValue to a string, and log the result.
let numericValue = 100;
convertedString = String(numericValue);
console.log(convertedString);

// 10. Declare stringFiftySource = "50", convert it to a number into parsedNumberFifty, and log the type of parsedNumberFifty to confirm the conversion.
let stringFiftySource = "50";
parsedNumberFifty = Number(stringFiftySource);
console.log(typeof parsedNumberFifty);

// 11. Declare randomNumber as a random integer between 0 and 10 (inclusive) and log it.
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

// 12. Declare decimalToFloor=3.7 and decimalToCeil=3.2. Round decimalToFloor down using Math.floor and decimalToCeil up using Math.ceil; log both results.
let decimalToFloor = 3.7;
let decimalToCeil = 3.2;
console.log(Math.floor(decimalToFloor));
console.log(Math.ceil(decimalToCeil));

// 13. Declare a boolean variable enrolledInCourse = true. Log it.
let enrolledInCourse = true;
console.log(enrolledInCourse);

// 14. Initialize ticketCounter = 0, then increment it by 1 using ticketCounter++ and log ticketCounter.
let ticketCounter = 0;
ticketCounter++;
console.log(ticketCounter);

// 15. Initialize gameScorePoints = 10, add 5 to it using gameScorePoints += 5, then log gameScorePoints.
let gameScorePoints = 10;
gameScorePoints += 5;
console.log(gameScorePoints);

// 16. Declare residentName="Alice", residentAge=30, residentCity="Paris". Log "Alice (30) lives in Paris" using template literals.
let residentName = "Alice";
let residentAge = 30;
let residentCity = "Paris";
console.log(` ${residentName} ${residentAge} lives in ${residentCity};`);

// 17. Declare variables bundlePartOne=5, bundlePartTwo=10, bundlePartThree=15. Log their total sum.
let bundlePartOne = 5;
let bundlePartTwo = 10;
let bundlePartThree = 15;

console.log(bundlePartOne + bundlePartTwo + bundlePartThree);

// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
let divisionDividendAmount = 10;
let divisionDivisorAmount = 3;
divisionQuotient = divisionDividendAmount / divisionDivisorAmount;
subtractionDifference = divisionDividendAmount - divisionDivisorAmount;
console.log(divisionQuotient);
console.log(subtractionDifference);

// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
let applicantFirstName = "Demet";
let applicantLastName = "Karduz";
aplicantFullName = applicantFirstName + " " + applicantLastName;
console.log(aplicantFullName);

// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
let productFactorSeven = 7;
let productFactorTwo = 2;
console.log(productFactorSeven * productFactorTwo);

// 21. Log the value of Math.PI.
console.log(Math.PI);

// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
let demonstrationCounter = 0;

demonstrationCounter++;
console.log(demonstrationCounter);

demonstrationCounter += 1;
console.log(demonstrationCounter);

demonstrationCounter = demonstrationCounter + 1;
console.log(demonstrationCounter);

// 23. Declare baselineCelsiusTemp=20. Increase it by 5 and log the result.
let baselineCelsiusTemp = 20;
baselineCelsiusTemp += 5;
console.log(baselineCelsiusTemp);


// 24. Declare valueForPrefixIncrement=6. Increment it using the prefix ++ operator and log both the expression result and the variable after the update, as appropriate for prefix ++.
let valueForPrefixIncrement = 6;
console.log(++valueForPrefixIncrement);
console.log(valueForPrefixIncrement);

// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
let valueForPostfixIncrement = 8;
console.log(valueForPostfixIncrement++);
console.log(valueForPostfixIncrement);

// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let valueBeforeDoubleStep = -3;
let finalValue = ++valueBeforeDoubleStep * 2;
console.log(finalValue);

// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
let prefixBaseValue=2;
let addedNeighborValue=3;
let resultValue = ++prefixBaseValue + addedNeighborValue;
console.log(resultValue);

