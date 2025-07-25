function stringToArray(str: string): string[] {
    if (str) {
        return str.split(' ');
    }
    return [''];
}
let str56: string = 'Ревуть воли як ясла повні';
let arr65: string[] = stringToArray(str56);
console.log(arr65);
