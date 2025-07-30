interface IUser25 { // the same in type intersection
    name: string;
    age: number;
    status: boolean;
}

interface IUser25 {
    id: number;
}
// or we can extends
// interface IUser26 extends IUser25{ // more flexible
//     id: number;
// }

let users25: IUser25[] = [
    {id: 1,  name: 'vasya', age: 31, status: false},
    {id: 1,  name: 'petya', age: 30, status: true},
    {id: 1,  name: 'kolya', age: 29, status: true},
    {id: 1,  name: 'olya', age: 28, status: false},
    {id: 1,  name: 'max', age: 30, status: true},
    {id: 1,  name: 'anya', age: 31, status: false},
    {id: 1,  name: 'oleg', age: 28, status: false},
    {id: 1,  name: 'andrey', age: 29, status: true},
    {id: 1,  name: 'masha', age: 30, status: true},
    {id: 1,  name: 'olya', age: 31, status: false},
    {id: 1,  name: 'max', age: 31, status: true}
];
