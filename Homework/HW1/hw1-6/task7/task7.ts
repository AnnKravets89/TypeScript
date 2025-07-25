function sortNums(array: number[],direction: string): number[] {
    if (direction === 'ascending') {
        array.sort((a: number,b: number): number => a - b)
    }
    if (direction === 'descending') {
        array.sort((a: number,b: number): number => b - a)
    }
    return array;
}
let nums: number[] = [3, 11, 21];
console.log(sortNums(nums,'descending'));
