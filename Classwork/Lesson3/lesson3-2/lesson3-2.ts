interface IAnimal {
    isAlive: boolean;
    sound: () => void;
}
interface IX {
    id: number;
}
class BirdClass implements IAnimal, IX {
    private _id: number;
    private _isAlive: boolean;
    private _wings: boolean;

    constructor(isAlive: boolean, wings: boolean, id: number) {
        this._isAlive = isAlive;
        this._wings = wings;
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get isAlive(): boolean {
        return this._isAlive;
    }

    set isAlive(value: boolean) {
        this._isAlive = value;
    }

    get wings(): boolean {
        return this._wings;
    }

    set wings(value: boolean) {
        this._wings = value;
    }

    sound(): void {

    }
}
