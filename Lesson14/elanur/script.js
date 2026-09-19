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
countOddEven(exampleArray);
countOddEven([]);
countOddEven('1, 2, 3');

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

sumRange(1, 3);
sumRange('1', '3');
sumRange(3, 1);
sumRange(1, 1);

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

reverseArray(exampleArray);
reverseArray();

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
filterNegativeNumbers([0, -1, -1, -1, 2, 3]);
filterNegativeNumbers([]);

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
doubleValues(exampleArray);
doubleValues([1, 2, 3, '4']);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str) {
  if (typeof str !== 'string') {
    console.log(
      'Incorrect input type in the printCharacters function. Expected input type is string.',
    );
    return;
  }
  for (const char of str) {
    console.log(char);
  }
}
printCharacters('Hello');
printCharacters(123);

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  if (typeof obj !== 'object' || obj === null) {
    console.log(
      'Incorrect input type in the sumObjectValues function. Expected input type is object.',
    );
    return;
  }
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  console.log(sum);
}
sumObjectValues({ a: 10, b: 20, c: 5 });
sumObjectValues({ a: '10', b: 20, c: 5 });
/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj) {
  if (typeof obj !== 'object' || obj === null) {
    console.log(
      'Incorrect input type in the printObjectKeys function. Expected input type is object.',
    );
    return;
  }
  for (const key in obj) {
    console.log(key);
  }
}
printObjectKeys({ name: 'Alice', age: 25 });
printObjectKeys('not an object'); 
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {
  if (!Array.isArray(numbers)) {
    console.log(
      'Incorrect input type in the sumWithDoWhile function. Expected input type is array.',
    );
    return;
  }
  let sum = 0;
  let i = 0;

  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);

  console.log(sum);
}
sumWithDoWhile([1, 2, 3, 4, 5]);
sumWithDoWhile([]);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    console.log(
      'Incorrect input type in the removeDuplicates function. Expected input type is array.',
    );
    return;
  }
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  console.log(uniqueArray);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
removeDuplicates([]);
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/

function factorial(n) {
  if (typeof n !== 'number' || n < 0) {
    console.log(
      'Incorrect input type in the factorial function. Expected input type is a non-negative number.',
    );
    return;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}
factorial(5);
factorial(-1);  
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {
  if (typeof sentence !== 'string') {
    console.log(
      'Incorrect input type in the reverseWords function. Expected input type is string.',
    );
    return;
  }
  const wordsArray = sentence.split(' ');
  const reversedArray = [];
  for (let i = wordsArray.length - 1; i >= 0; i--) {
    reversedArray.push(wordsArray[i]);
  }
  const reversedSentence = reversedArray.join(' ');
  console.log(reversedSentence);
}
reverseWords('Hello world this is a test');
reverseWords(12345);
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
  if (!Array.isArray(words) || typeof minLength !== 'number') {
    console.log(
      'Incorrect input type in the filterLongWords function. Expected input types are array and number.',
    );
    return;
  }
  const filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      filteredWords.push(words[i]);
    }
  }
  console.log(filteredWords);
}
filterLongWords(['apple', 'banana', 'kiwi', 'pear'], 5);
filterLongWords('not an array', 3);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr) {
  if (!Array.isArray(arr)) {
    console.log(
      'Incorrect input type in the logElementsWithIndex function. Expected input type is array.',
    );
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(['a', 'b', 'c']);
logElementsWithIndex('not an array');
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers) {
  if (!Array.isArray(numbers)) {
    console.log(
      'Incorrect input type in the findMin function. Expected input type is array.',
    );
    return;
  }
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log(min);
}
findMin([3, 1, 4, 1, 5, 9]);
findMin('not an array');
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  if (!Array.isArray(arr) || typeof word !== 'string') {
    console.log(
      'Incorrect input type in the countOccurrences function. Expected input types are array and string.',
    );
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
countOccurrences(['apple', 'banana', 'apple', 'orange'], 'apple');
countOccurrences('not an array', 'apple');  
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  if (!Array.isArray(arr)) {
    console.log(
      'Incorrect input type in the removeFalsyValues function. Expected input type is array.',
    );
    return;
  }
  const truthyArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArray.push(arr[i]);
    }
  }
  console.log(truthyArray);
}
removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, NaN]);
removeFalsyValues('not an array');
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  if (typeof str !== 'string') {
    console.log(
      'Incorrect input type in the sumDigits function. Expected input type is string.',
    );
    return;
  }
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      sum += parseInt(str[i]);
    }
  }
  console.log(sum);
}
sumDigits("abc123");
sumDigits('not a string');  
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers) {
  if (!Array.isArray(numbers)) {
    console.log(
      'Incorrect input type in the averageArray function. Expected input type is array.',
    );
    return;
  }
  if (numbers.length === 0) {
    console.log('Cannot compute average of an empty array.');
    return;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log(average);
}
averageArray([1, 2, 3, 4, 5]);
averageArray([]);
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray) {
  if (!Array.isArray(twoDArray)) {
    console.log(
      'Incorrect input type in the flattenArray function. Expected input type is array of arrays.',
    );
    return;
  }
  const flattened = [];
  for (let i = 0; i < twoDArray.length; i++) {
    if (!Array.isArray(twoDArray[i])) {
      console.log(
        'Incorrect input type in the flattenArray function. Expected each element to be an array.',
      );
      return;
    }
    for (let j = 0; j < twoDArray[i].length; j++) {
      flattened.push(twoDArray[i][j]);
    }
  }
  console.log(flattened);
}
flattenArray([[1, 2], [3, 4], [5]]);
flattenArray('not an array');
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter) {
  if (!Array.isArray(words) || typeof letter !== 'string' || letter.length !== 1) {
    console.log(
      'Incorrect input type in the findWordsWithLetter function. Expected input types are array and single character string.',
    );
    return;
  }
  const filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      filteredWords.push(words[i]);
    }
  }
  console.log(filteredWords);
}
findWordsWithLetter(['apple', 'banana', 'cherry', 'date'], 'a');
findWordsWithLetter('not an array', 'a'); 
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
  if (!Array.isArray(arr)) {
    console.log(
      'Incorrect input type in the pushPopExample function. Expected input type is array.',
    );
    return;
  }
  arr.push(itemToPush);
  console.log('After push:', arr);
  const poppedItem = arr.pop();
  console.log('Popped item:', poppedItem);
  console.log('Final array:', arr);
}
pushPopExample([1, 2, 3], 4);
pushPopExample('not an array', 4);    
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
  if (!Array.isArray(queue)) {
    console.log(
      'Incorrect input type in the manageQueue function. Expected input type is array.',
    );
    return;
  }
  queue.push(newPerson);
  console.log('After push:', queue);
  const removedPerson = queue.shift();
  console.log('Removed person:', removedPerson);
  console.log('Final queue:', queue);
}
manageQueue(['Alice', 'Bob', 'Charlie'], 'David');
manageQueue('not an array', 'David'); 
/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  if (!Array.isArray(todoList)) {
    console.log(
      'Incorrect input type in the updateTodoList function. Expected input type is array.',
    );
    return;
  }
  console.log('Current tasks:', todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log('Updated tasks:', todoList);
}   