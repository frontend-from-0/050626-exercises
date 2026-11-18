/*
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
// let/const ile değişken tanımlanır, + operatörü sayılarda toplama yapar.
let firstNumber = 5;
let secondNumber = 3;
console.log(firstNumber + secondNumber);

// 2. Declare variables learnerName and learnerAge. Log a greeting: "Hello! I am (learnerName) and I am (learnerAge) years old."
// Metinleri (string) "+" ile yan yana ekleyip birleştirmeye "concatenation" denir.
let learnerName = "İlker";
let learnerAge = 25;
console.log("Hello! I am " + learnerName + " and I am " + learnerAge + " years old.");

// 3. Declare variables leftIntegerOperand=10 and rightIntegerOperand=4. Log the result of leftIntegerOperand-rightIntegerOperand, leftIntegerOperand*rightIntegerOperand, and leftIntegerOperand/rightIntegerOperand.
// -, *, / temel aritmetik operatörleridir.
let leftIntegerOperand = 10;
let rightIntegerOperand = 4;
console.log(leftIntegerOperand - rightIntegerOperand);
console.log(leftIntegerOperand * rightIntegerOperand);
console.log(leftIntegerOperand / rightIntegerOperand);

// 4. Use template literals to log: "My name is (learnerName). I like JS." (reuse learnerName from exercise 2, or declare it again with the same value for a standalone answer).
// Template literal: çift tırnak yerine backtick (`) kullanılır, ${...} içine değişken konur.
// Bu, uzun "+" ile birleştirme yapmaktan daha okunaklıdır.
console.log(`My name is ${learnerName}. I like JS.`);

// 5. Declare a string secretPasswordString = "securePass". Log the length of secretPasswordString.
// Her string'in ".length" özelliği kaç karakter içerdiğini verir.
let secretPasswordString = "securePass";
console.log(secretPasswordString.length);

// 6. Assign "hello world" to lowercasePhrase, convert lowercasePhrase to uppercase, and log the result.
// .toUpperCase() metodu string'i büyük harfe çevirir (küçük harf için .toLowerCase() vardır).
let lowercasePhrase = "hello world";
console.log(lowercasePhrase.toUpperCase());

// 7. Declare helloToken = "Hello" and worldToken = "World". Concatenate them with a space in between and log the result.
let helloToken = "Hello";
let worldToken = "World";
console.log(helloToken + " " + worldToken);

// 8. Declare sampleNumberForTypeof = 42. Log the type of sampleNumberForTypeof using typeof.
// typeof, bir değerin veri tipini (number, string, boolean vb.) söyler.
let sampleNumberForTypeof = 42;
console.log(typeof sampleNumberForTypeof);

// 9. Declare numericValue = 100, convert numericValue to a string, and log the result.
// String(...) bir sayıyı metne çevirir.
let numericValue = 100;
console.log(String(numericValue));

// 10. Declare stringFiftySource = "50", convert it to a number into parsedNumberFifty, and log the type of parsedNumberFifty to confirm the conversion.
// Number(...) bir metni sayıya çevirir.
let stringFiftySource = "50";
let parsedNumberFifty = Number(stringFiftySource);
console.log(typeof parsedNumberFifty);

// 11. Declare randomNumber as a random integer between 0 and 10 (inclusive) and log it.
// Math.random() 0 ile 1 arası ondalıklı rastgele sayı üretir; *11 ile 0-10.99 aralığına genişletip
// Math.floor ile alt tam sayıya yuvarlıyoruz, böylece 0-10 arası tam sayı elde ediyoruz.
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

// 12. Declare decimalToFloor=3.7 and decimalToCeil=3.2. Round decimalToFloor down using Math.floor and decimalToCeil up using Math.ceil; log both results.
// Math.floor aşağı, Math.ceil yukarı yuvarlar.
let decimalToFloor = 3.7;
let decimalToCeil = 3.2;
console.log(Math.floor(decimalToFloor));
console.log(Math.ceil(decimalToCeil));

// 13. Declare a boolean variable enrolledInCourse = true. Log it.
// boolean, sadece true/false değeri alabilen veri tipidir.
let enrolledInCourse = true;
console.log(enrolledInCourse);

// 14. Initialize ticketCounter = 0, then increment it by 1 using ticketCounter++ and log ticketCounter.
// ++ operatörü değişkeni 1 artırır (ticketCounter = ticketCounter + 1 ile aynı iş).
let ticketCounter = 0;
ticketCounter++;
console.log(ticketCounter);

// 15. Initialize gameScorePoints = 10, add 5 to it using gameScorePoints += 5, then log gameScorePoints.
// += kısayolu: gameScorePoints = gameScorePoints + 5 ile aynıdır.
let gameScorePoints = 10;
gameScorePoints += 5;
console.log(gameScorePoints);

// 16. Declare residentName="Alice", residentAge=30, residentCity="Paris". Log "Alice (30) lives in Paris" using template literals.
let residentName = "Alice";
let residentAge = 30;
let residentCity = "Paris";
console.log(`${residentName} (${residentAge}) lives in ${residentCity}`);

// 17. Declare variables bundlePartOne=5, bundlePartTwo=10, bundlePartThree=15. Log their total sum.
let bundlePartOne = 5;
let bundlePartTwo = 10;
let bundlePartThree = 15;
console.log(bundlePartOne + bundlePartTwo + bundlePartThree);

// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
let divisionDividendAmount = 10;
let divisionDivisorAmount = 3;
let divisionQuotient = divisionDividendAmount / divisionDivisorAmount;
let subtractionDifference = divisionDividendAmount - divisionDivisorAmount;
console.log(divisionQuotient);
console.log(subtractionDifference);

// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
let applicantFirstName = "Ahmet";
let applicantLastName = "Yılmaz";
let applicantFullName = applicantFirstName + " " + applicantLastName;
console.log(applicantFullName);

// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
let productFactorSeven = 7;
let productFactorTwo = 2;
console.log(productFactorSeven * productFactorTwo);

// 21. Log the value of Math.PI.
// Math.PI, JavaScript'in hazır tanımladığı pi sayısı sabitidir (3.14159...).
console.log(Math.PI);

// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
// Üç yöntem de aynı sonucu verir, sadece yazım şekli farklıdır.
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
// Prefix (++x): ÖNCE artırır, SONRA yeni değeri döner. Yani console.log(++x) zaten artmış hâli gösterir.
let valueForPrefixIncrement = 6;
console.log(++valueForPrefixIncrement); // 7 (artmış hali direkt görünür)
console.log(valueForPrefixIncrement); // 7 (değişken de kalıcı olarak 7 oldu)

// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
// Postfix (x++): ÖNCE eski değeri döner, SONRA arka planda artırır. Yani console.log(x++) eski değeri gösterir.
let valueForPostfixIncrement = 8;
console.log(valueForPostfixIncrement++); // 8 (eski değer görünür)
console.log(valueForPostfixIncrement); // 9 (ama değişken artık 9 oldu)

// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// Önce ++ ile -3 -> -2 olur, sonra bu sonucu 2 ile çarpıyoruz: -2 * 2 = -4.
let valueBeforeDoubleStep = -3;
let doubledResult = ++valueBeforeDoubleStep * 2;
console.log(doubledResult);

// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
// Önce ++ ile 2 -> 3 olur, sonra 3 + 3 = 6.
let prefixBaseValue = 2;
let addedNeighborValue = 3;
let finalSum = ++prefixBaseValue + addedNeighborValue;
console.log(finalSum);
