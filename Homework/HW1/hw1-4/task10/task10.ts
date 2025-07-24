function returnTheSmallestNumber(array: number[]): number {
    let smallestNumber: number = array[0];
    for (let i = 1; i < array.length; i++) {
        let num: number = array[i];
        if (num < smallestNumber) {
            smallestNumber = num;
        }
    }
    return smallestNumber;
}

let numbers: number[] = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(returnTheSmallestNumber(numbers));
