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

console.log('EX. 8. ------------');

function printCharacters(str) {
 
  for (const character of str) {
    console.log(character);
  }
}
printCharacters("yigit");

console.log('-------------------');

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

console.log('EX. 9. ------------');

function sumObjectValues(obj) {
  let sum = 0;
  for (const num in obj) {
    sum += obj[num];
  }
  console.log(sum); 
}

sumObjectValues({a:10, b: 20, c: 5});

console.log('-------------------');
/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

console.log('EX. 10. ------------');

function printObjectKeys(obj) {
  for(const key in obj) {
    console.log(key);
  }
}

printObjectKeys({ name: "Alice", age: 25 });

console.log('-------------------');
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

console.log('EX. 11. ------------');

function sumWithDoWhile(numbers) {
  let i = 0;
  let sum = 0;
  do {
    
    sum += numbers[i];
    i++;
  } while (i<numbers.length);
  return sum;
}

console.log(sumWithDoWhile([1, 2, 3, 4, 5]));

console.log('-------------------');
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

console.log('EX. 12. ------------');


function removeDuplicates(arr) {
  const removed = [];
  for(const element of arr) {
  if(!removed.includes(element)){
   removed.push(element);
  }
  }
  return removed;
}

console.log(removeDuplicates([1,2,3,2,2,4,5,2,2,4,6]));


console.log('-------------------');

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/

console.log('EX. 13. ------------');


function factorial(n) {
  let product = 1; 
  for(let i=n; i >= 1; i-- ) {
    product *= i;
  }
  return product;
}

console.log(factorial(10));
console.log(factorial(0));


console.log('-------------------');
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

console.log('EX. 14. ------------');


function reverseWords(sentence) {
const words = sentence.split(" ");
  const reversed = words.reverse();
  const joined = reversed.join(" ");
return joined; }

console.log(reverseWords("i like to move it"));


console.log('-------------------');
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/


console.log('EX. 15. ------------');


function filterLongWords(words, minLength) {
  const resultArr = [];
  for(let i = 0; i < words.length; i++) {
    if(words[i].length >= minLength) {
      resultArr.push(words[i]);
    }
  }
  return resultArr;
}

console.log(filterLongWords(["green","red","black","blue"], 5));

console.log('-------------------');


/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
console.log('EX. 16. ------------');


function logElementsWithIndex(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    const indy = i; 
    const val = arr[i];
    console.log("Index: " + indy, "Value: " + val);
}
  }

  logElementsWithIndex(["laptop", "desktop", "phone", "tablet"]);

console.log('-------------------');

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log('EX. 17. ------------');


function findMin(numbers) {

let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  console.log('min is ' + min);
}

findMin([8, 3, 12, -2, 7]);


console.log('-------------------');

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
console.log('EX. 18. ------------');


function countOccurences(arr, word) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]=== word) {count++}
  }
  return count;
}

console.log(countOccurences(["cat","dog","cat","bird","dog","cat","fish","dog"], "cat"));


console.log('-------------------');
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log('EX. 19. ------------');


function removeFalsyValues(arr) {
  const removed = [];
  for(let i = 0; i <arr.length; i++) {
    if(arr[i]) {
      removed.push(arr[i]);
    
    }
  }
  console.log(removed);
}

removeFalsyValues(["dog", "cat", 0, "", NaN, "banana"]);

console.log('-------------------');
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
console.log('EX. 20. ------------');


function sumDigits(str) {
  let sum = 0; 
  for(const digit of str) {
    if(/\d/.test(digit)){
      sum += Number(digit);
      
    } 
    
  }
  console.log(sum);
}

sumDigits("yigit123245");

console.log('-------------------');
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log('EX. 21. ------------');


function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      
  }
   let average = sum / numbers.length; 
  return average;
}


console.log(averageArray([10, 20, 30, 40, 50, 60]));

console.log('-------------------');

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log('EX. 22. ------------');


function flattenArray(twoDArray) {
  const flattened = [];
  for(const first of twoDArray) {
    for(const second of first) {
    flattened.push(second);
    }
  }
return flattened;
}

console.log(flattenArray([[1, 2], [3, 4]]));

console.log('-------------------');

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log('EX. 23. ------------');


function findWordsWithLetter(words, letter) {
  
  const matched = [];
  
  for(const word of words){
    if(word.includes(letter)){
      matched.push(word);
    }
  }
  return matched;
}

console.log(findWordsWithLetter(["car", "plane", "bike", "motorcycle"], "e"));

console.log('-------------------');
/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log('EX. 24. ------------');


function pushPopExample(arr, itemToPush) {

  arr.push(itemToPush);
  console.log(arr);
  const popped =  arr.pop();
  console.log(popped);
  console.log(arr);
}


pushPopExample([1,2,3,4], 5);
 
console.log('-------------------');
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
console.log('EX. 25. ------------');


function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log(queue);
  const removed = queue.shift();
  console.log(removed);
  console.log(queue);
}

manageQueue(["A", "B", "C", "D"], "X");


console.log('-------------------');
/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
console.log('EX. 26. ------------');


function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log(todoList);
}

updateTodoList(["Frontend ögren", "HTML ögren", "CSS ögren", "JS ögren"], 1, 2, "React ögren", "Typescript ögren", "Tailwind ögren."
 )

 console.log('-------------------');