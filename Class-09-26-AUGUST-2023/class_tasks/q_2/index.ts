export {};

let todos = [{ id: 1, text: "Have Breakfast" }, { id: 2, text: "Have Lunch" }];

let addTodo = (addID: number, newText: string) => {
    todos.push({ id: addID, text: newText });
}

let deleteTodo = (deletedID: number) => {
    todos = todos.filter((item) => {
        return item.id !== deletedID;
    });
}

let updateTodo = (id: number, updatedText: string) => {
    todos = todos.map((item) => {
        if (item.id === id) {
            return { id, text: updatedText };
        } else {
            return item;
        }
    });
}

addTodo(3, "Have Dinner");
addTodo(4, "Sleep");
deleteTodo(1);
updateTodo(4, "Good Morning");
console.log(todos);
