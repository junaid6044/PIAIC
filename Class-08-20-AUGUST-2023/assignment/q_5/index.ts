export {};

function removeFailingGrades(grades: number[]): number[] {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
    return grades;
}

const studentGrades: number[] = [85, 32, 70, 45, 90, 28, 60];
const passingGrades: number[] = removeFailingGrades(studentGrades);
console.log("Passing grades:", passingGrades);
