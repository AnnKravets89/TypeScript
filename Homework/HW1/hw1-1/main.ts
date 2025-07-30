let hello: string = `hello`;
let owu: string = `owu`;
let com: string = `com`;
let ua: string = `ua`;
let one: number = 1;
let ten: number = 10;
let negative: number = -999;
let n: number = 123;
let pi: number = 3.14;
let point: number = 2.7;
let six: number = 16;
let t: boolean = true;
let f11: boolean = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(negative);
console.log(n);
console.log(pi);
console.log(point);
console.log(six);
console.log(t);
console.log(f);
// ----------------------------------------------------

let firstName: string = 'John';
let middleName: string = 'Michael';
let lastName: string = 'Doe';

let fullName: string = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);
// -------------------------------------------------------

let hundred: number = 100;
let oneHundred: string = '100';
let co: boolean = true;
console.log(typeof hundred);
console.log(typeof oneHundred);
console.log(typeof co);
// --------------------------------------------------------
let firstNameP: string|null = prompt('What is your name?');
let middleNameP: string|null = prompt('What is your middle name?');
let ageStrValue: string|null = prompt('How old are you?');

let result = `${firstNameP} ${middleNameP} ${ageStrValue}`;

if (ageStrValue !== null) {
    let ageNumValue: number = +ageStrValue;
    console.log(ageNumValue);
}




