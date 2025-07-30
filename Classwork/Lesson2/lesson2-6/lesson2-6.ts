 class User26 {
     get name(): string {
         return this._name;
     }

     set name(value: string) {
         this._name = value;
     }

     get age(): number {
         return this._age;
     }

     set age(value: number) {
         this._age = value;
     }

     get status(): boolean {
         return this._status;
     }

     set status(value: boolean) {
         this._status = value;
     }
    // private name: string;
    // private age: number;
    // private status: boolean;

    constructor(private _name: string, private _age: number, private _status: boolean) {
        this._name = _name;
        this._age = _age;
        this._status = _status;
    }
    public greeting(): void {
        console.log('Hello World!');

   }
}
let user26: User26 = new User26('anna', 12, true);
 console.log(user26.name);
 user26.name = 'banana';

 class User27 extends User26 {
     // id: number;

     constructor(name: string, age: number, status: boolean, private _id: number) {
         super(name, age, status);
         this._id = _id;
     }

     get id(): number {
         return this._id;
     }

     set id(value: number) {
         this._id = value;
     }
 }
 let user27 = new User27('Mark', 45, false, 3);
 console.log(user27.name);
 console.log(user27.id);

