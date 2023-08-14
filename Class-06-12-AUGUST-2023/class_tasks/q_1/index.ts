export {};

var todoList: string [] = ["Learn Array", "Learn Array Method", "Add Values in Array"]
// Add new value at the end of the todoList array
todoList.splice(todoList.length, 0, "Remove Values in Array using splice")
console.log(`Updated TodoList is: ${todoList}`);

// Add new value at the start of the todoList array
todoList.splice(0, 0, "Add Values in Array using splice")
console.log(`Updated TodoList is: ${todoList}`);

// Remove existed value at the end of the todoList array
todoList.splice(todoList.length-1, 1)
console.log(`Updated TodoList is: ${todoList}`);

// Remove existed value at the start of the todoList array
todoList.splice(0, 1)
console.log(`Updated TodoList is: ${todoList}`);