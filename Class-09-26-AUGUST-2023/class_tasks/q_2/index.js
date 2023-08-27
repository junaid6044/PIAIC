"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todos = [{ id: 1, text: "Have Breakfast" }, { id: 2, text: "Have Lunch" }];
let addTodo = (addID, newText) => {
    todos.push({ id: addID, text: newText });
};
let deleteTodo = (deletedID) => {
    todos = todos.filter((item) => {
        return item.id !== deletedID;
    });
};
let updateTodo = (id, updatedText) => {
    todos = todos.map((item) => {
        if (item.id === id) {
            return { id, text: updatedText };
        }
        else {
            return item;
        }
    });
};
addTodo(3, "Have Dinner");
addTodo(4, "Sleep");
deleteTodo(1);
updateTodo(4, "Good Morning");
console.log(todos);
