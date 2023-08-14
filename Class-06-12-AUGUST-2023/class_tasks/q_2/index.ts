export {};

var todoList: string [] = ["Learn Array", "Learn Array Method", "Add Values in Array", "Learn Push"]

function removeMiddleValueOfTodoList(arr: string []) {
    var arrLength: number = arr.length;
    if (arrLength % 2 === 0) {
        console.log(`Deleted Elements are: ${arr.splice((arrLength/2)-1, 2)}`);
        console.log(`Updated todoList are: ${arr}`);
    }
    else {
        console.log(`Deleted Elements are: ${arr.splice(Math.floor(arrLength/2), 1)}`);
        console.log(`Updated todoList are: ${arr}`);
    }
}

removeMiddleValueOfTodoList(todoList);