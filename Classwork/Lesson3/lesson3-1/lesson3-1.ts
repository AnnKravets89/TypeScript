abstract class Animal {
    isAlive: boolean;

    protected constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }
    abstract bark(): void;
}
// let animal: Animal = new Animal(true);
class Bird extends Animal {
    wings: boolean;

    constructor(isAlive: boolean, wings: boolean) {
        super(isAlive);
        this.wings = wings;
    }
    bark(): void {
        console.log('chick chirick');
    }
}
