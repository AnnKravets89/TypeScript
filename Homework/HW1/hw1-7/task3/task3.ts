class User73 {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    constructor(
        id: number,
        name: string,
        surname: string,
        email: string,
        phone: string
    ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users73: User73[] = [
    new User73(1, "Olena", "Koval", "olena.koval@example.com", "+380671112233" ),
    new User73(2, "Andrii", "Shevchenko",  "andrii.shev@example.com", "+380672223344" ),
    new User73(3, "Iryna",  "Tymoshenko", "iryna.t@example.com",  "+380673334455" ),
    new User73(4,  "Oleh", "Ivanov", "oleh.i@example.com",  "+380674445566" ),
    new User73(5,  "Natalia",  "Lysenko",  "natalia.ly@example.com",  "+380675556677" ),
    new User73(6, "Taras",  "Bondarenko",  "taras.b@example.com",  "+380676667788" ),
    new User73(7, "Sofiia",  "Melnyk",  "sofiia.m@example.com",  "+380677778899" ),
    new User73(8, "Dmytro", "Kravchenko",  "dmytro.k@example.com",  "+380678889900" ),
    new User73(9, "Anastasiia", "Polishchuk",  "anastasiia.p@example.com",  "+380679990011" ),
    new User73(10, "Volodymyr",  "Horbenko",  "volodymyr.h@example.com",  "+380671001122" )
];
console.log(users73.sort((user1, user2) => user1.id - user2.id));
