type UserType =  {
    name: string;
    age: number;
    status: boolean;
    greeting?: (srt: string) => string;
}

let users: UserType[] = [
    {greeting: (str: string) => 'Hello World1',
        name: 'vasya', age: 31, status: false,},
    {greeting: (str: string) => 'Hello World2',
        name: 'petya', age: 30, status: true},
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

