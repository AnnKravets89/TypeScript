class Cinderella {
    name: string;
    age: number;
    legSize: number;

        constructor(name: string, age: number, legSize: number) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
        }
}
class Prince {
    name:string;
    age: number;
    foundShoe: number;

        constructor(name: string, age: number, foundShoe: number) {
            this.name = name;
            this.age = age;
            this.foundShoe = foundShoe;
        }
}
const cinderellas: Cinderella[] = [
    new Cinderella("Anna",  19,  35 ),
    new Cinderella( "Olena",  21,  36 ),
    new Cinderella( "Iryna",  18,  34 ),
    new Cinderella( "Sofiia",  20,  35.5 ),
    new Cinderella( "Marta",  22,  37),
    new Cinderella( "Kateryna",  23,  36.5),
    new Cinderella( "Natalia",  19,  34.5 ),
    new Cinderella( "Viktoria",  20,  35.2 ),
    new Cinderella( "Alina",  18,  36.8 ),
    new Cinderella( "Liza",  21,  33.5)
];

const prince = new Prince('Caspian', 22, 33.5);

for (const cinderella of cinderellas) {
    if (cinderella.legSize === prince.foundShoe) {
        console.log(`${prince.name} found his cinderella ${cinderella.name}`);
    }
}

let foundCinderella: Cinderella | undefined = cinderellas.find(cinderella => cinderella.legSize === prince.foundShoe);
if (foundCinderella) {
    console.log(foundCinderella.name);
} else {
    console.log('No cinderella here.');
}
console.log(foundCinderella);
