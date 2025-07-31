let firstNameP: string|null = prompt('What is your name?');
let middleNameP: string|null = prompt('What is your middle name?');
let ageStrValue: string|null = prompt('How old are you?');

let result = `${firstNameP} ${middleNameP} ${ageStrValue}`;

if (ageStrValue !== null) {
    let ageNumValue: number = +ageStrValue;
    console.log(ageNumValue);
}
