type Driver = {
    name: string;
    age: number;
    experience: number;
}
class Car {
    model: string;
    maker: string;
    yearOfRelease: number;
    maxSpeed: number;
    engineCapacity: number;
    driver?: Driver;

    constructor(model: string, maker: string, yearOfRelease: number, maxSpeed: number, engineCapacity: number) {
        this.model = model;
        this.maker = maker;
        this.yearOfRelease = yearOfRelease;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive(): void {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info(): void {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeed(newSpeed: number): number {
        return this.maxSpeed += newSpeed;
    }
    changeYear(year: number): number {
        if (year > 1815) {
            return this.yearOfRelease = year;
        }
        return this.yearOfRelease;
    }
    addDriver(driver: Driver): void {
        this.driver = driver;
    }
}

let car = new Car("Mustang",  "Ford",  2018,  260,  5.0);

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(10);
car.changeYear(2022);
car.addDriver({
    name: "Oleh",
    age: 32,
    experience: 5});
console.log(car);
