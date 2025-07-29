// let elementByClassName: HTMLCollectionOf<Element> = document.getElementsByClassName("target");
// console.log(elementByClassName);
// let elementsByTagNameDiv: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName("div");
// console.log(elementsByTagNameDiv);
//
// let forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
// let f1: HTMLFormElement = forms[0];
// // console.log(f1.username);
// // console.log(f1['username']);//the same - even better variant
// let f1Element: HTMLInputElement = f1['username'];
// console.log(f1Element);

// let p: HTMLParagraphElement = document.createElement('p');

type UserType21 = {
    name: string;
    age: number;
    status: boolean;
}
let users21: UserType21[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users21) {
    let div: HTMLDivElement = document.createElement('div');
    div.innerText = user.name;
    document.body.appendChild(div);
}
function appender(tag: keyof HTMLElementTagNameMap) {
    document.createElement(tag)
}




