import {getRandom} from "./helpers/getRandom/getRandom";
import {catsViews, dogViews, humanViews} from "./views/views";
import {getUid} from "./helpers/getUid";

export interface ISim {
    id:number;
    speak: () => string;
    whoAmI: () => string;
    getView: () => string;
    serialize: () => string;
}

type Sims = "human" | "cat" | "dog";
type Gender = "male" | "female" | "other" | "unknown";
type SimView = string;

export function parseSim(str:string):ISim {
    const data = JSON.parse(str);
    const type:Sims = data.type
    const simData = {name: data.name, gender: data.gender, age: data.age};
    switch (type) {
        case "cat":
            return new Cat(simData);
        case "dog":
            return new Dog(simData);
        case "human":
            return new Human(simData);
    }
}

export abstract class Sim implements ISim {
    constructor({ name, gender, age }: { name?: string; gender?: Gender, age?:number } = {}) {
        this.gender = gender || "unknown";
        this.name = name || "Stranger";
        this.age = age || 0;
    }

    private gender: Gender;
    private name: string;
    private age:number;

    protected abstract views:SimView[];
    protected abstract type:Sims;

    public readonly id:number = getUid();
    public whoAmI() {
        return `${this.name}, ${this.gender}`;
    }
    public abstract speak(): string;
    public getView() {
        const index = getRandom(0, this.views.length - 1);
        return this.views[index];
    }
    public serialize() {
        const obj = {
            id: this.id,
            type: this.type,
            name: this.name,
            gender: this.gender,
        }
        return JSON.stringify(obj);
    }
}

export class Human extends Sim {
    protected views = humanViews;
    protected type:Sims = "human";
    public speak() {
        return "Hello";
    }
}

export interface ICat extends ISim {
    eat():string;
}

export class Cat extends Sim implements ICat {
    protected views = catsViews;
    protected type:Sims = "cat";
    public speak() {
        return "meow meow";
    }
    public eat(): string {
        return "я поел вискас"
    }
}



export class Tiger extends Cat {
    public eat():string {
        return "я поел мяса, которое принес сотрудник зоопарка"
    }

}

export class TysonsTiger extends Tiger {
    public eat():string {
        return "я поел мяса, которое принес Майк Тайсон"
    }
}

type DogCommand = "seat" | "voice"

interface IDog extends ISim {
    executeCommand: (command: DogCommand) => string;
}

export class Dog extends Sim implements IDog {
    protected views = dogViews;
    protected type:Sims = "dog";
    public speak() {
        return "wof wof";
    }

    public executeCommand(command:DogCommand) {
        switch (command) {
            case "seat": return "Я сижу";
            case "voice": return this.speak();
        }
    }
}

export interface IStrangerFactory {
    createSim(): ISim
}

abstract class StrangerFactory implements IStrangerFactory {
    public abstract createSim(): ISim
}

export class CatStrangerFactory extends StrangerFactory {
    public createSim(): ISim {
        return new Cat();
    }
}

export class HumanStrangerFactory extends StrangerFactory {
    public createSim(): ISim {
        return new Human();
    }
}

export class DogStrangerFactory extends StrangerFactory {
    public createSim(): ISim {
        return new Dog();
    }
}
