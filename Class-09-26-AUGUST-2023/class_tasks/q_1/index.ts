export {};

let todos = [{ id: 1, text: "Have Breakfast" }, { id: 2, text: "Have Lunch" }];

let AddTodo = () => {
    todos.push({ id: 3, text: "Have Dinner" }, { id: 4, text: "Sleep" })
}

let deleteTodo = () => {
    todos = todos.filter((item) => {
        if (item.id != 1) {
            return item;
        }
    })
}

let updateTodo = () => {
    todos = todos.map((item) => {
        if (item.id == 4) {
            return {id: 4, text: "Good Morning"};
        }
        else {
            return item;
        }
    })
}
AddTodo();
deleteTodo();
updateTodo();
console.log(todos);