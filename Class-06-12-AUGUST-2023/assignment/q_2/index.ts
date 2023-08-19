export {};

function insertValueAtIndex(array: number[], index: number, value: number): number[] {
    if (index < 0 || index > array.length) {
        throw new Error("Index out of range");
    }

    console.log(`\nThe new value ${value} is add at ${index} index in the array.`);
    console.log("Original Array ",array);
    array.splice(index, 0, value);
    return array;
}


try {
    const originalArray: number[] = [1, 2, 3, 4];
    const index: number = 2;
    const value: number = 10;
    
    const modifiedArray: number[] = insertValueAtIndex(originalArray, index, value);
    console.log("Modified Array ",modifiedArray);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}