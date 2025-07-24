//@ts-ignore
let sum511 = (arr: number[]): number => {
    let sumNumbers: number = 0;
    for (let number of arr) {
        sumNumbers += number;
    }
    return sumNumbers;
}
let numbers511: number[] = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(sum511(numbers511));
