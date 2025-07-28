class User71 {
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
let users71: User71[] = [
     new User71(1, "Olena", "Koval", "olena.koval@example.com", "+380671112233" ),
     new User71(2, "Andrii", "Shevchenko",  "andrii.shev@example.com", "+380672223344" ),
     new User71(3, "Iryna",  "Tymoshenko", "iryna.t@example.com",  "+380673334455" ),
     new User71(4,  "Oleh", "Ivanov", "oleh.i@example.com",  "+380674445566" ),
     new User71(5,  "Natalia",  "Lysenko",  "natalia.ly@example.com",  "+380675556677" ),
     new User71(6, "Taras",  "Bondarenko",  "taras.b@example.com",  "+380676667788" ),
     new User71(7, "Sofiia",  "Melnyk",  "sofiia.m@example.com",  "+380677778899" ),
     new User71(8, "Dmytro", "Kravchenko",  "dmytro.k@example.com",  "+380678889900" ),
     new User71(9, "Anastasiia", "Polishchuk",  "anastasiia.p@example.com",  "+380679990011" ),
     new User71(10, "Volodymyr",  "Horbenko",  "volodymyr.h@example.com",  "+380671001122" )
];
console.log(users71);


