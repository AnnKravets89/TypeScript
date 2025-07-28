interface ICourse82 {
    id: number;
    title: string;
    monthDuration: number;
    greeting(message: string): void;
    foo(): void;
}
let course: ICourse82 =  {
    id: 1,
    title: 'JavaScript Complex',
    monthDuration: 5,
    greeting(message: string): void  {
        console.log(`Greeting: ${message}`);
    },
    foo(): void {}
};
function deepCopy<T extends Record<string, any>>(obj: T): T {
    if (!obj) {
        throw new Error('Object is undefined or null!');
    }
     const functionArr: {key: keyof T; fn: Function}[] = [];
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                functionArr.push({key, fn: obj[key]});
            }
        }

    const copyObj = JSON.parse(JSON.stringify(obj)) as T;
        for (let {key, fn} of functionArr) {
            copyObj[key] = fn.bind({});
        }
        return copyObj;
}

console.log(deepCopy(course));
course.greeting('Hello World!');
course.foo();
