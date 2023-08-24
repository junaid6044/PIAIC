"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFailingGrades(grades) {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
    return grades;
}
const studentGrades = [85, 32, 70, 45, 90, 28, 60];
const passingGrades = removeFailingGrades(studentGrades);
console.log("Passing grades:", passingGrades);
