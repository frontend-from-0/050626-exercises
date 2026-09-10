/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
// CODE HERE

const firstNumber = 5;
const secondNumber = 3;
console.log(`Ex. 1. The sum is ${firstNumber + secondNumber}`);

// 2. Declare variables learnerName and learnerAge. Log a greeting: "Hello! I am (learnerName) and I am (learnerAge) years old."
// CODE HERE

const learnerName = "Elanur";
const learnerAge = 25;
console.log(`Ex. 2. Hello! I am ${learnerName} and I am ${learnerAge} years old.`);

// 3. Declare variables leftIntegerOperand=10 and rightIntegerOperand=4. Log the result of leftIntegerOperand-rightIntegerOperand, leftIntegerOperand*rightIntegerOperand, and leftIntegerOperand/rightIntegerOperand.
// CODE HERE
const leftIntegerOperand = 10;    
const rightIntegerOperand = 4;
console.log(`Ex. 3. The result of subtraction is ${leftIntegerOperand - rightIntegerOperand}`);
console.log(`Ex. 3. The result of multiplication is ${leftIntegerOperand * rightIntegerOperand}`);
console.log(`Ex. 3. The result of division is ${leftIntegerOperand / rightIntegerOperand}`);

// 4. Use template literals to log: "My name is (learnerName). I like JS." (reuse learnerName from exercise 2, or declare it again with the same value for a standalone answer).
// CODE HERE

console.log(`Ex. 4. My name is ${learnerName}. I like JS.`);

// 5. Declare a string secretPasswordString = "securePass". Log the length of secretPasswordString.
// CODE HERE
const secretPasswordString = "securePass";
console.log(`Ex. 5. The length of secretPasswordString is ${secretPasswordString.length}`);

// 6. Assign "hello world" to lowercasePhrase, convert lowercasePhrase to uppercase, and log the result.
// CODE HERE

const lowercasePhrase = "hello world";
console.log(`Ex. 6. The uppercase version of lowercasePhrase is ${lowercasePhrase.toUpperCase()}`);

// 7. Declare helloToken = "Hello" and worldToken = "World". Concatenate them with a space in between and log the result.
// CODE HERE

const helloToken = "Hello";
const worldToken = "World";
console.log(`Ex. 7. The concatenated result is ${helloToken + " " + worldToken}`);

// 8. Declare sampleNumberForTypeof = 42. Log the type of sampleNumberForTypeof using typeof.
// CODE HERE

const sampleNumberForTypeof = 42;
console.log(`Ex. 8. The type of sampleNumberForTypeof is ${typeof sampleNumberForTypeof}`);

// 9. Declare numericValue = 100, convert numericValue to a string, and log the result.
// CODE HERE

const numericValue = 100;
console.log(`Ex. 9. The string version of numericValue is ${String(numericValue)}`);

// 10. Declare stringFiftySource = "50", convert it to a number into parsedNumberFifty, and log the type of parsedNumberFifty to confirm the conversion.
// CODE HERE
const stringFiftySource = "50";
const parsedNumberFifty = Number(stringFiftySource);
console.log(`Ex. 10. The type of parsedNumberFifty is ${typeof parsedNumberFifty}`);

// 11. Declare randomNumber as a random integer between 0 and 10 (inclusive) and log it.
// CODE HERE

const randomNumber = Math.floor(Math.random() * 11);
console.log(`Ex. 11. The random number is ${randomNumber}`);

// 12. Declare decimalToFloor=3.7 and decimalToCeil=3.2. Round decimalToFloor down using Math.floor and decimalToCeil up using Math.ceil; log both results.
// CODE HERE

const decimalToFloor = 3.7;
const decimalToCeil = 3.2;
console.log(`Ex. 12. The result of Math.floor(decimalToFloor) is ${Math.floor(decimalToFloor)}`);
console.log(`Ex. 12. The result of Math.ceil(decimalToCeil) is ${Math.ceil(decimalToCeil)}`);

// 13. Declare a boolean variable enrolledInCourse = true. Log it.
// CODE HERE

const enrolledInCourse = true;
console.log(`Ex. 13. The value of enrolledInCourse is ${enrolledInCourse}`);


// 14. Initialize ticketCounter = 0, then increment it by 1 using ticketCounter++ and log ticketCounter.
// CODE HERE

let ticketCounter = 0;
ticketCounter++;
console.log(`Ex. 14. ticketCounter is ${ticketCounter}`);
// 15. Initialize gameScorePoints = 10, add 5 to it using gameScorePoints += 5, then log gameScorePoints.
// CODE HERE

let gameScorePoints = 10;
gameScorePoints += 5;
console.log(`Ex. 15. gameScorePoints is ${gameScorePoints}`);

// 16. Declare residentName="Alice", residentAge=30, residentCity="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE

const residentName = "Alice";
const residentAge = 30;
const residentCity = "Paris";
console.log(`Ex. 16. ${residentName} (${residentAge}) lives in ${residentCity}`); 


// 17. Declare variables bundlePartOne=5, bundlePartTwo=10, bundlePartThree=15. Log their total sum.
// CODE HERE

const bundlePartOne = 5;
const bundlePartTwo = 10;
const bundlePartThree = 15;
console.log(`Ex. 17. The total sum is ${bundlePartOne + bundlePartTwo + bundlePartThree}`);


// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
// CODE HERE

const divisionDividendAmount = 10;
const divisionDivisorAmount = 3;
const divisionQuotient = divisionDividendAmount / divisionDivisorAmount;
const subtractionDifference = divisionDividendAmount - divisionDivisorAmount;
console.log(`Ex. 18. The quotient is ${divisionQuotient} and the subtraction difference is ${subtractionDifference}`);
// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
// CODE HERE

const applicantFirstName = "John";
const applicantLastName = "Doe";
const applicantFullName = `${applicantFirstName} ${applicantLastName}`;
console.log(`Ex. 19. Full name is${applicantFullName}`);

// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
// CODE HERE

const productFactorSeven = 7;
const productFactorTwo = 2;
console.log(`Ex. 20. The product is ${productFactorSeven * productFactorTwo}`);
// 21. Log the value of Math.PI.
// CODE HERE

console.log(`Ex. 21. The value of Math.PI is ${Math.PI}`);
// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
// CODE HERE

let demonstrationCounter = 0;
demonstrationCounter++;
console.log(`Ex. 22. After demonstrationCounter++: ${demonstrationCounter}`);

demonstrationCounter += 1;
console.log(`Ex. 22. After demonstrationCounter += 1: ${demonstrationCounter}`);

demonstrationCounter = demonstrationCounter + 1;
console.log(`Ex. 22. After demonstrationCounter = demonstrationCounter + 1: ${demonstrationCounter}`);
// 23. Declare baselineCelsiusTemp=20. Increase it by 5 and log the result.
// CODE HERE

const baselineCelsiusTemp = 20;
const increasedTemp = baselineCelsiusTemp + 5;
console.log(`Ex. 23. The increased temperature is ${increasedTemp}`);
// 24. Declare valueForPrefixIncrement=6. Increment it using the prefix ++ operator and log both the expression result and the variable after the update, as appropriate for prefix ++.
// CODE HERE

let valueForPrefixIncrement = 6;
const prefixIncrementResult = ++valueForPrefixIncrement;
console.log(`Ex. 24. The result of prefix increment is ${prefixIncrementResult} and the updated variable is ${valueForPrefixIncrement}`);
// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
// CODE HERE

let valueForPostfixIncrement = 8;
const postfixIncrementResult = valueForPostfixIncrement++;
console.log(`Ex. 25. The result of postfix increment is ${postfixIncrementResult} and the updated variable is ${valueForPostfixIncrement}`);

// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE

let valueBeforeDoubleStep = -3;
const doubleStepResult = ++valueBeforeDoubleStep * 2;
console.log(`Ex. 26. The final value is ${doubleStepResult}`);
// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
// CODE HERE

let prefixBaseValue = 2;
const addedNeighborValue = 3;
const finalResult = ++prefixBaseValue + addedNeighborValue;
console.log(`Ex. 27. The final result is ${finalResult}`);