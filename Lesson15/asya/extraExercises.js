/*
===========================================================
  EXERCISE 1: SIMPLE SHOPPING LIST
===========================================================

1. Create an array called shoppingList
2. Access first, second, and last items
3. Create displayShoppingList(items)
4. Check for empty list before looping
5. Create addShoppingItem(item, items)
6. Validate input using Array.isArray() and typeof item === 'string'
*/
const shoppingList = ["egg","bread","chocolate","milk"];
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[shoppingList.length - 1]);
function displayShoppingList(items) {
  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
  } else {
    console.log("Shopping list is empty.");
  }
}
function addShoppingItem(item, items) {
  if (!Array.isArray(items) || typeof item !== 'string') {
    console.log("Validation failed: Item must be a string and items must be an array.");
    return;
  }
  items.push(item);
  console.log(`${item} added to the list.`);
}
displayShoppingList(shoppingList);
addShoppingItem("cheese", shoppingList);
addShoppingItem(123, shoppingList);
displayShoppingList(shoppingList);

/*
===========================================================
  EXERCISE 2: STUDENT SCORE CHECKER
===========================================================

1. Create an array called students with objects
2. Create displayStudents(students)
3. Create checkStudentResult(student)
4. Create checkAllStudents(students)
5. Create findStudent(name, students)
6. Make the search case-insensitive using toLocaleLowerCase()
*/
const students = [
  { name: "Alice", score: 88 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 75 }
];

function displayStudents(students) {
  if (!Array.isArray(students) || students.length === 0) {
    console.log("Student list is empty.");
    return;
  }
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`Name: ${student.name}, Score: ${student.score}`);
  }
}

function checkStudentResult(student) {
  const passingScore = 50;
  if (student.score >= passingScore) {
    return "Passed";
  } else {
    return "Failed";
  }
}

function checkAllStudents(students) {
  if (!Array.isArray(students)) return;
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const result = checkStudentResult(student);
    console.log(`${student.name}: ${result}`);
  }
}

function findStudent(name, students) {
  if (!Array.isArray(students) || typeof name !== 'string') return null;

  const searchName = name.toLocaleLowerCase();

  for (let i = 0; i < students.length; i++) {
    if (students[i].name.toLocaleLowerCase() === searchName) {
      return students[i];
    }
  }
  return null;
}

displayStudents(students);
checkAllStudents(students);
console.log(findStudent("alice", students));
console.log(findStudent("asya", students));
/*
===========================================================
  EXERCISE 3: SIMPLE TODO LIST
===========================================================

1. Create const todos = [...] with objects
2. Create displayTodos(todos)
3. Create addTodo(title, todos)
4. Prevent duplicate titles case-insensitively
5. Create completeTodo(title, todos)
6. Show friendly status: Completed / Not completed
*/
const todos = [
  { title: "Learn JavaScript", completed: false },
  { title: "Build a project", completed: true }
];

function displayTodos(todos) {
  if (!Array.isArray(todos) || todos.length === 0) {
    console.log("Todo list is empty.");
    return;
  }
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    let status;
    if (todo.completed) {
      status = "Completed";
    } else {
      status = "Not completed";
    }
    console.log(`- ${todo.title}: ${status}`);
  }
}

function addTodo(title, todos) {
  if (!Array.isArray(todos) || typeof title !== 'string') return;

  const lowerTitle = title.toLocaleLowerCase();

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].title.toLocaleLowerCase() === lowerTitle) {
      console.log(`Todo "${title}" already exists!`);
      return;
    }
  }

  todos.push({ title: title, completed: false });
  console.log(`Todo "${title}" added.`);
}

function completeTodo(title, todos) {
  if (!Array.isArray(todos) || typeof title !== 'string') return;

  const lowerTitle = title.toLocaleLowerCase();

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].title.toLocaleLowerCase() === lowerTitle) {
      todos[i].completed = true;
      console.log(`Todo "${todos[i].title}" marked as completed.`);
      return;
    }
  }

  console.log(`Todo "${title}" not found.`);
}

displayTodos(todos);
addTodo("Read a book", todos);
addTodo("learn javascript", todos);
completeTodo("read a book", todos);
completeTodo("Go to gym", todos);
displayTodos(todos);

