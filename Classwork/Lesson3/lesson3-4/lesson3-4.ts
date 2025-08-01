// class UserGen<T1> {
//     id: T1;
//     name: string;
//
//     constructor(id: T1, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
// let userGen: UserGen<number> = new UserGen<number>(1, 'Anna');
// let userGen1: UserGen<string> = new UserGen<string>('45', 'dfghjk');
// let userGen2: UserGen<{x: number}> = new UserGen<{x: number}>({x: 100500}, 'dgbhnjk');
interface IUserLS {
    id: number;
    name: string;
}


let item1 = localStorage.getItem('x');

    if (item1) {
        let obj = JSON.parse('item1')as IUserLS;

    }
interface IDog {
        aka: string;
}
function getIDog<T>(key: string): T {
    let dogObjJS = localStorage.getItem('dog');
    if (dogObjJS) {
        return JSON.parse('dogObjJS') as T;
    }
    return {} as T;
}
getIDog<IDog>('dog');
getIDog<IUserLS>('user');
