type Car79 = {
    model: string;
    maker: string;
    yearOfRelease: number;
    maxSpeed: number;
    engineCapacity: number;
}
interface Array<T> {
    myForEach(callback: (item: T, index: number, array: T[]) => void): void;
    myFilter(callback: (item: T, index: number, array: T[]) => boolean): T[];
}

Array.prototype.myForEach = function<T>(
    this: T[],
    callback: (item: T, index: number, array: T[]) => void
): void {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype.myFilter = function<T>(
    this: T[],
    predicate: (item: T, index: number, array: T[]) => boolean
): T[] {
    const result: T[] = [];
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const cars: Car79[] = [
    { model: "Civic", maker: "Honda", yearOfRelease: 2020, maxSpeed: 210, engineCapacity: 1.8 },
    { model: "Model S", maker: "Tesla", yearOfRelease: 2022, maxSpeed: 250, engineCapacity: 0 },
    { model: "Corolla", maker: "Toyota", yearOfRelease: 2019, maxSpeed: 195, engineCapacity: 1.6 },
    { model: "A4", maker: "Audi", yearOfRelease: 2021, maxSpeed: 240, engineCapacity: 2.0 },
    { model: "Mustang", maker: "Ford", yearOfRelease: 2018, maxSpeed: 260, engineCapacity: 5.0 },
    { model: "3 Series", maker: "BMW", yearOfRelease: 2020, maxSpeed: 235, engineCapacity: 2.0 },
    { model: "CX-5", maker: "Mazda", yearOfRelease: 2021, maxSpeed: 210, engineCapacity: 2.5 },
    { model: "Octavia", maker: "Skoda", yearOfRelease: 2017, maxSpeed: 200, engineCapacity: 1.4 },
    { model: "Accord", maker: "Honda", yearOfRelease: 2022, maxSpeed: 230, engineCapacity: 2.0 },
    { model: "Elantra", maker: "Hyundai", yearOfRelease: 2019, maxSpeed: 190, engineCapacity: 1.6 }
];
cars.myForEach(car => console.log(car.model));

let carsSpeed = cars.myFilter(car => car.maxSpeed > 200);
console.log(carsSpeed);
