class Client {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    orders: string[];

    constructor(
        id: number,
        name: string,
        surname: string,
        email: string,
        phone: string,
        orders: string[]
    ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.orders = orders;
    }
}
let clients: Client[] = [
    new Client(1, "Olena", "Koval", "olena.koval@example.com", "+380671112233", ['mouse', 'headphones'] ),

    new Client(2, "Andrii", "Shevchenko",  "andrii.shev@example.com", "+380672223344",  ['phone', 'charger', 'headphones', 'power adapter'] ),

    new Client(3, "Iryna",  "Tymoshenko", "iryna.t@example.com",  "+380673334455", ['notebook', 'pen'] ),

    new Client(4,  "Oleh", "Ivanov", "oleh.i@example.com",  "+380674445566",  ['monitor', 'keyboard', 'webcam'] ),

    new Client(5,  "Natalia",  "Lysenko",  "natalia.ly@example.com",  "+380675556677",  ['tablet', 'case'] ),

    new Client(6, "Taras",  "Bondarenko",  "taras.b@example.com",  "+380676667788",  ['camera', 'tripod', 'memory card'] ),

    new Client(7, "Sofiia",  "Melnyk",  "sofiia.m@example.com",  "+380677778899", ['printer', 'ink'] ),

    new Client(8, "Dmytro", "Kravchenko",  "dmytro.k@example.com",  "+380678889900",  ['router', 'ethernet cable', 'power adapter'] ),

    new Client(9, "Anastasiia", "Polishchuk",  "anastasiia.p@example.com",  "+380679990011", ['book', 'bookmark'] ),

    new Client(10, "Volodymyr",  "Horbenko",  "volodymyr.h@example.com",  "+380671001122", ['game console',  'HDMI cable', 'memory card', 'webcam'] )
];
console.log(clients);
console.log(clients.sort((cl1, cl2) => cl1.orders.length - cl2.orders.length));
