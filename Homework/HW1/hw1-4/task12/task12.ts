function swap(array: number[], index1: number, index2: number): number[] | string {
    if (index1 < array.length && index2 < array.length) {
        let temp: number = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    }
    return "Error!"
}
let numbers412: number[] = [12, 7, 25, 9, 30, 41, 3, 17, 8, 21];
console.log(swap(numbers412, 0, 1));
