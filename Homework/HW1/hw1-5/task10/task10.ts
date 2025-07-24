//@ts-ignore
const returnMinNumber = (array: number[]): number => {
    let minNumber: number = array[0];
    for (let i = 1; i < array.length; i++) {
        let number: number = array[i];
        if (number < minNumber) {
            minNumber = number;
        }
    }
    return minNumber;
}
let numbers510: number[] = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(returnMinNumber(numbers510));
