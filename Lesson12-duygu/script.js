/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
const firstNumber = 5;
const secondNumber = 3;
console.log ('Ex. 1. The result is:' , firstNumber + secondNumber);


// 2. Declare variables learnerName and learnerAge. Log a greeting: "Hello! I am (learnerName) and I am (learnerAge) years old."
const learnerName = "Duygu";
const learnerAge = 39;
console.log ('Ex. 2a. Hello! I am ' + learnerName + ' and I am ' + learnerAge + ' years old.');  //string concation (using +  operator)
console.log (`Ex. 2b. Hello! I am ${learnerName} and I am ${learnerAge} years old.`); ////string interpolation (using backticks ` and variables ${})


// 3. Declare variables leftIntegerOperand=10 and rightIntegerOperand=4. Log the result of leftIntegerOperand-rightIntegerOperand, leftIntegerOperand*rightIntegerOperand, and leftIntegerOperand/rightIntegerOperand.
const leftIntegerOperand = 10;
const rightIntegerOperand = 4;
console.log ('Ex.3a. the result of leftIntegerOperand - rightIntegerOperand is:' , leftIntegerOperand - rightIntegerOperand );
console.log ('Ex.3a. the result of leftIntegerOperand * rightIntegerOperand is:' , leftIntegerOperand * rightIntegerOperand);
console.log ('Ex.3a. the result of leftIntegerOperand / rightIntegerOperand is:' , leftIntegerOperand / rightIntegerOperand );


// 4. Use template literals to log: "My name is (learnerName). I like JS." (reuse learnerName from exercise 2, or declare it again with the same value for a standalone answer).
console.log('Ex. 4.' , `My name is ${learnerName}. I like JS.`);


// 5. Declare a string secretPasswordString = "securePass". Log the length of secretPasswordString.
const secretPasswordString = "securePass";
console.log('Ex. 5.' , secretPasswordString.length);


// 6. Assign "hello world" to lowercasePhrase, convert lowercasePhrase to uppercase, and log the result.
const lowercasePhrase = 'hello world';
console.log (`Ex. 6. ${lowercasePhrase.toUpperCase()}`);
 

// 7. Declare helloToken = "Hello" and worldToken = "World". Concatenate them with a space in between and log the result.
const helloToken = 'Hello';
const worldToken = 'World';
console.log ('Ex. 7a.' , helloToken + ' ' + worldToken );
console.log(`Ex. 7b. ${helloToken} ${worldToken}`);    // aradaki bosluklar bu backtikli olanda direkt cikti ile ayni, bunu kullanmak daha iyi.
console.log ('Ex. 7c.', helloToken.concat(' ', worldToken));


// 8. Declare sampleNumberForTypeof = 42. Log the type of sampleNumberForTypeof using typeof.
const sampleNumberForTypeof = 42;
console.log('Ex. 8. The type of sampleNumberForTypeof is:',  typeof sampleNumberForTypeof);


// 9. Declare numericValue = 100, convert numericValue to a string, and log the result.
const numericValue = 100;
console.log(`Ex. 9.${String(numericValue)}`);
console.log ('Ex. 9.1', numericValue + '');
console.log('Ex. 9.2', "numericValue");  
console.log('Ex. 9.2.b', `${numericValue}`);
console.log('Ex. 9.3', numericValue.toString()); 


// 10. Declare stringFiftySource = "50", convert it to a number into parsedNumberFifty, and log the type of parsedNumberFifty to confirm the conversion.
const stringFiftySource = '50';
const parsedNumberFifty = parseInt (stringFiftySource);
console.log('Ex. 10.' , parsedNumberFifty );
console.log(`Ex. 10.1 original type: ${ typeof stringFiftySource}, result is: ${ typeof parsedNumberFifty}`);


// 11. Declare randomNumber as a random integer between 0 and 10 (inclusive) and log it.
const randomNumber = Math.floor(Math.random()*11); 

//5-15 arasindaysa
Math.floor(Math.random()*15) + 5; // ya da 
Math.floor(Math.random()* (16-5))+ 5; 

//Math.floor(Math.random()* (upperLimit +1 - lowerLimit)) + lowerLimit;
console.log('Ex. 11.',randomNumber );


// 12. Declare decimalToFloor=3.7 and decimalToCeil=3.2. Round decimalToFloor down using Math.floor and decimalToCeil up using Math.ceil; log both results.
const decimalToFloor = 3.7;
const decimalToCeil = 3.2;
console.log('Ex. 12.1 Math.floor of 3.7' , + Math.floor (decimalToFloor));
console.log('Ex. 12.2 Math ceil of 3.2' , + Math.ceil (decimalToCeil));


// 13. Declare a boolean variable enrolledInCourse = true. Log it.
const enrolledInCourse = true;
console.log('Ex. 13.', enrolledInCourse);


// 14. Initialize ticketCounter = 0, then increment it by 1 using ticketCounter++ and log ticketCounter.
let ticketCounter = 0;
console.log (`Ex. 14.1. ${ticketCounter++}`); 
console.log (`Ex. 14.2. ${ticketCounter}`); 


// 15. Initialize gameScorePoints = 10, add 5 to it using gameScorePoints += 5, then log gameScorePoints.
let gameScorePoints = 10;
gameScorePoints += 5;
console.log('Ex. 15. Result is:', gameScorePoints);


// 16. Declare residentName="Alice", residentAge=30, residentCity="Paris". Log "Alice (30) lives in Paris" using template literals.
const residentName ="Alice";
residentAge = 30;
residentCity = "Paris";
console.log(`Ex. 16. ${residentName} (${residentAge}) lives in ${residentCity}.`);


// 17. Declare variables bundlePartOne=5, bundlePartTwo=10, bundlePartThree=15. Log their total sum.
const bundlePartOne = 5;
const bundlePartTwo = 10;
const bundlePartThree = 15;
console.log('Ex. 17. Result is:', bundlePartOne + bundlePartTwo + bundlePartThree);


// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the 
// subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
divisionDividendAmount = 10;
divisionDivisorAmount = 3;
divisionQuotient = divisionDividendAmount /divisionDivisorAmount;
console.log('Ex. 18a.', divisionQuotient);
console.log(`Ex. 18b. subtractionDifference is:`, divisionDividendAmount - divisionDivisorAmount );
//Note for Anna: I was not sure which style you want us to log this exercise results. That's why i used two different ways fyi.


// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
const applicantFirstName = "Duygu";
const applicantLastName = "Edemen";
console.log(`Ex. 19. ${applicantFirstName} ${applicantLastName}`); 


// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
//In programming and mathematics, the word "product" means the result of multiplying two or more numbers together (çarpım).
productFactorSeven = 7;
productFactorTwo = 2;
console.log('Ex. 20.', productFactorSeven  * productFactorTwo);


// 21. Log the value of Math.PI.
console.log('Ex. 21.', Math.PI);


// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., 
// demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
let demonstrationCounter = 0;
demonstrationCounter++;
console.log('Ex. 22a.', demonstrationCounter);

demonstrationCounter+=1;
console.log('Ex. 22a.', demonstrationCounter);

demonstrationCounter = demonstrationCounter+1;
console.log('Ex. 22a.', demonstrationCounter);


// 23. Declare baselineCelsiusTemp=20. Increase it by 5 and log the result.
let baselineCelsiusTemp = 20;
baselineCelsiusTemp+= 5;
console.log('Ex. 23.', baselineCelsiusTemp);


// 24. Declare valueForPrefixIncrement=6. Increment it using the prefix ++ operator and log both the expression result and the variable after the update, as appropriate for prefix ++.
let valueForPrefixIncrement = 6;
console.log('Ex. 24a.', valueForPrefixIncrement);
console.log('Ex. 24b.', ++valueForPrefixIncrement);


// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
let valueForPostfixIncrement = 8;
console.log('Ex. 25a.' , valueForPostfixIncrement);

valueForPostfixIncrement++;
console.log('Ex. 25b.' , valueForPostfixIncrement);


// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let valueBeforeDoubleStep = -3;
console.log('Ex. 26.', (++valueBeforeDoubleStep) * 2);


// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
let prefixBaseValue = 2;
let addedNeighborValue = 3;
prefixBaseValue++;
console.log('Ex. 27.' , prefixBaseValue + addedNeighborValue );
