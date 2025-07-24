//@ts-ignore
let swap512 = (arr: number[], i1: number, i2: number): number[] | string => {
    if (i1 < arr.length && i2 < arr.length) {
        let temp: number = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return "Error!";
}
let numbers512: number[] = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(swap512(numbers512, 0, 1));
