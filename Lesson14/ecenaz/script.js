/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return 'Incorrect input type in the sumArray function. Expected input type is array.';
  }
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    // numbers[i] - square bracket notation
  }
  return sum;
}

const exampleArray = [1, 2, 3, 4, 5];
const exampleArray2 = Array(1, 2, 3, 4, 5, 5);
console.log('EX. 1. ------------');
console.log(sumArray(exampleArray));
console.log(sumArray(exampleArray2));
console.log(sumArray());
console.log('-----------------------------')
/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/
function findMax(numbers) {
  if (!Array.isArray(numbers)) {
    console.log(
      'Incorrect input type in the findMax function. Expected input type is array.',
    );
    return;
  }
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  console.log('max is ' + max);
}

// [1, 2, 3, 4, 5]

console.log('EX. 2. ------------');
findMax();
findMax([123, 1312, 122, 0]);
console.log('--- ------------');
/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
function countOddEven(numbers) {
  if (!Array.isArray(numbers)) {
    console.log(
      'Incorrect input type in the countOddEven function. Expected input type is array.',
    );
    return;
  }
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
  console.log(`Odd: ${oddCount}, Even: ${evenCount}`);
}
console.log('EX. 3. ------------');
countOddEven(exampleArray);
countOddEven([]);
countOddEven('1, 2, 3');
console.log('------------');
/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') {
    console.error(
      'Incorrect input type for function sumRange. Expected start and end range in number format.',
    );
    return;
  }
  let sum = 0;

  if (start < end) {
    let i = start;
    while (i <= end) {
      sum += i;
      i++;
    }
  } else if (start > end) {
    let i = end;
    while (i <= start) {
      sum += i;
      i++;
    }
  } else if (start === end) {
    sum = start;
  }

  console.log(`final sum of the range \'${start} - ${end}\'`, sum);
}
console.log('EX. 4. ------------');
sumRange(1, 3);
sumRange('1', '3');
sumRange(3, 1);
sumRange(1, 1);
console.log(' ------------');
/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    console.log(
      'Incorrect input type in the reverseArray function. Expected input type is array.',
    );
    return;
  }
  const reversed = [];
  const indexOfLastElement = arr.length - 1;
  for (let i = indexOfLastElement; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  console.log(reversed);
}
console.log('EX. 5. ------------');
reverseArray(exampleArray);
reverseArray();
console.log('----------------');
/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegativeNumbers(array) {
  if (!Array.isArray(array)) {
    console.log(
      'Incorrect input type in the filterNegativeNumbers function. Expected input type is array.',
    );
    return;
  }
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      newArray.push(array[i]);
    }
  }

  console.log(newArray);
}
console.log('EX. 6. ------------');
filterNegativeNumbers([0, -1, -1, -1, 2, 3]);
filterNegativeNumbers([]);
console.log('---- ------------');
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
function doubleValues(numbers) {

  if (!Array.isArray(numbers)) {
    console.log(
      'Incorrect input type in the doubleValues function. Expected input type is array.',
    );
    return;
  }
  let doublearray = [];
  for (const number of numbers) {
    if (typeof number !== 'number') {
      console.log(
        'Incorrect input type in the doubleValues function. Expected input type is array of numbers.',
      );
      return;
    }
    doublearray.push(number * 2);
  }
  console.log(doublearray);
}
console.log('EX. 7. ------------');
doubleValues(exampleArray);
doubleValues([1, 2, 3, '4']);
console.log('---- ------------');
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {


  // I want to make sure this is a string form.
  if (typeof str !== 'string') {
    console.log(`The input is a ${typeof str}, not text. Please check the input.`);
    return;
  }

  // An empty string has no characters, so the loop would print nothing.
  if (str === '') {
    console.log('The text is empty. Please provide some text.');
    return;
  }

  for (const char of str) {
    console.log(char)
  }

}
console.log('EX. 8. ------------');
printCharacters('Ece');
printCharacters(5);
printCharacters('');
console.log('---------------');
/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {


  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    console.log('Please provide an object.');
    return;
  }

  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key]
    }

  }
  console.log(sum);
}
console.log('EX. 9. ------------');
sumObjectValues({ a: 10, b: 20, c: 5 });
sumObjectValues([10], [20], [5]);
sumObjectValues('');
console.log('----------------');
/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj) {

  if (typeof obj !== 'object') {
    console.log(`The value you provided is a ${typeof obj}. Please provide an object.`);
    return;
  }

  // I add this line because for..in loop does not work in arry situation.
  if (Array.isArray(obj)) {
    console.log('The value you provided is an array. Please provide an object.');
    return;
  }

  for (const key in obj) {
    console.log(key);
  }
}
console.log('EX. 10. ------------');
printObjectKeys({ name: 'Alice', age: 25 });
printObjectKeys(123);
printObjectKeys('hello');
printObjectKeys([1, 2]);
printObjectKeys('');
console.log('--- ------------');
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {

  //input must be an array.
  if (!Array.isArray(numbers)) {
    console.log(`The value you provided is a ${typeof numbers}. Please provide an array.`);
    return;
  }

  // do-while always runs at least once so an empty array would give NaN.
  // That's why I check for an empty array before the loop.
  if (numbers.length === 0) {
    console.log('The array is empty. Total: 0');
    return;
  }

  let sum = 0;
  let i = 0;

  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);

  console.log(`Total: ${sum}`);
}
console.log('EX. 11. ------------');
sumWithDoWhile([5, 10, 15]);
sumWithDoWhile([1, 2, 3, 4]);
sumWithDoWhile([]);
sumWithDoWhile('123');
console.log('------------------');
/*

12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {

  if (!Array.isArray(arr)) {
    console.log(`The value you provided is a ${typeof arr}. Please provide an array.`);
    return;
  }
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
console.log('EX. 12. ------------');
removeDuplicates([1, 2, 2, 3, 1, 4]);
removeDuplicates(1, 2, 3, 5, 5, 5, 6);
console.log('------------------');
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/
function factorial(n) {

  //If I started with 0 here, every multiplication would give 0. so 1 does not change the outcome.
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}
console.log('EX. 13. ------------');
factorial(5);
factorial(10);
console.log('----------------');
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {

  if (typeof sentence !== 'string') {
    console.log(`The value you provided is a ${typeof sentence}. Please provide a sentence.`);
    return;
  }


  const words = sentence.split(' ');
  const reversedArr = [];

  // Uzunluktan 1 çıkardım çünkü sayma 0'dan başladığı için son kelimenin sırası uzunluğun 1 eksiği.
  // Sondan başa doğru i 0'a eşit ya da büyük olduğu sürece devam etsin diye i >= 0 yazdım.
  // i-- ile her turda bir geri gittim.
  for (let i = words.length - 1; i >= 0; i--) {
    reversedArr.push(words[i]);
  }
  console.log(reversedArr.join(' '));
}
console.log('EX. 14. ------------');
reverseWords('I love JavaScript');
reverseWords('Today is a sunny day');
console.log('-----------------');
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {


  // words must be an array.
  if (!Array.isArray(words)) {
    console.log(`The value you provided is a ${typeof words}. Please provide an array of words.`);
    return;
  }

  //minLength must be a number and can not be negative.
  if (typeof minLength !== 'number' || minLength < 0) {
    console.log('Please provide a positive number for minLength.');
    return;
  }


  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      result.push(words[i]);
    }
  }
  console.log(result);
}
console.log('EX. 15. ------------');
filterLongWords(['cat', 'elephant', 'dog'], 5);
filterLongWords('elephant', 5);
filterLongWords(['cat', 'dog'], '5');
filterLongWords(['cat', 12345, 'apple'], 3);
console.log('------ ------------');

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  //input must be an array.
  if (!Array.isArray(arr)) {
    console.log(`The value you provided is a ${typeof arr}. Please provide an array.`);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i} , Value: ${arr[i]}`);

  }
}
console.log('EX. 16. ------------');
logElementsWithIndex(['elma', 'armut', 'muz']);
console.log('----- ------------');
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {

  if (!Array.isArray(numbers)) {
    console.log('Please provide array.');
    return;
  }

  let min = numbers[0];


  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log('Min is: ', min);
}
console.log('EX. 17. ------------');
findMin([8, 3, 10, 1, 5]);
findMin([-4, 2, -9, 0]);
console.log('-----------------');

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word) {

  if (!Array.isArray(arr)) {
    console.log(`The value you provided is a ${typeof arr}. Please provide an array.`);
    return;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(count);
}
console.log('EX. 18. ------------');
countOccurrences(['apple', 'banana', 'apple', 'cherry', 'apple'], 'apple');
countOccurrences(['cat', 'dog', 'bird'], 'dog'); 
console.log('-----------------');
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {

  if (!Array.isArray(arr)) {
    console.log(`The value you provided is a ${typeof arr}. Please provide an array.`);
    return;
  }


  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
console.log('EX. 19. ------------');
removeFalsyValues([0, 'Ece', false, 5, '', null, 'Bodrum', undefined, NaN, 10]);
console.log('-----------------');
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  if (typeof str !== 'string') {
    console.log(`The value you provided is a ${typeof str}. Please provide a text.`);
    return;

  }

  let sum = 0;

  for (const char of str) {

    if (char >= '0' && char <= '9') {
      sum += Number(char);
    }
  }
  console.log(sum);
}
console.log('EX. 20. ------------');
sumDigits('abc123');
sumDigits('ece12111996');

console.log('----------------');
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {

  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.log('Please provide a non-empty array of numbers.');
    return;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]) {
      sum += numbers[i];

    }

  }
  const averaged = sum / numbers.length;
  console.log(averaged);
}
console.log('EX. 21------------');
averageArray([1, 2, 9]);
averageArray([10, 20, 30]);
averageArray([]);
console.log('----- ------------');
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {

  if (!Array.isArray(twoDArray)) {
    console.log(`The value you provided is a ${typeof twoDArray}. Please provide an array`);
    return;
  }


  const result = [];

  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      result.push(twoDArray[i][j]);
    }
  }
  console.log(result);
}
console.log('EX. 22------------');
flattenArray([[1, 2], [3, 4]]);
flattenArray([[1], [2, 3], [4, 5, 6]]);
flattenArray([['a', 'b'], ['c']]);
console.log('-----------------');

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {

  if (!Array.isArray(words, letter)) {
    console.log(`The value you provided is a ${typeof twoDArray}. Please provide an array of arrays.`);
    return;
  }

  const foundLetter = [];

  for (let word of words) {
    if (word.includes(letter)) {
      foundLetter.push(word);
    }
  }

  console.log(foundLetter);

}
console.log('EX. 23 ------------');
findWordsWithLetter(['cat', 'dog', 'apple', 'tree'], 'a');
console.log('------ ------------');
/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
function pushPopExample(arr, itemToPush) {

  arr.push(itemToPush);

  console.log('Array after push: ', arr);

  const poppedItem = arr.pop();
  console.log('Popped item: ', poppedItem);

  console.log('Final array: ', arr);

}
console.log('EX. 24 ------------');
pushPopExample([1, 2, 3], 4);
console.log('------------------');
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
function manageQueue(queue, newPerson) {
  console.log('Before added and removed: ', queue);

  queue.push(newPerson);

  console.log('New person added version : ', queue);

  const shifted = queue.shift();

  console.log('Removed person : ', shifted);

  console.log('Final queue: ', queue);
}
console.log('EX. 25. ------------');
manageQueue(['Ece', 'Altan', 'Asil'], 'pamuk');
console.log('----------------');
/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {

  console.log('Current list: ', todoList);

  todoList.splice(startIndex, deleteCount); //splice removes deleteCount tasks starting from startIndex.

  // normalde delete nereden yaptıysak yenileri oraya eklenecekti. fakat biz push yaptığımız için sona eklendi. 
  todoList.push(...newTasks);

  console.log('Updated tasks:', todoList);
}
console.log('EX. 26 ------------');
const myTasks = ['breakfast', 'homework', 'clean the house', 'shopping'];
updateTodoList(myTasks, 1, 2, 'coding', 'walking');

console.log('------------------');
// öğrendiğim ve araştırıp anladığım şekilde neyi neden uyguladığımı yorum şeklinde yazıyorum. bazen ingilizce anlatbiliyorsam öyle yazıyorum bazen çevirirken zorlanıyorum o yüzden türkçe yazdım.

