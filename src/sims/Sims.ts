import {getRandom} from "./helpers/getRandom/getRandom";
import {catsViews, dogViews, humanViews} from "./views/views";
import {getUid} from "./helpers/getUid";

export interface ISim {
    id:number;
    speak: () => string;
    whoAmI: () => string;
    getView: () => string;
    serialize: () => string;
    parse:(data:string) => ISim;
}

type Sims = "human" | "cat" | "dog";
type Gender = "male" | "female" | "other" | "unknown";
type SimView = string;

export abstract class Sim implements ISim {
    constructor({ name, gender }: { name?: string; gender?: Gender } = {}) {
        this.gender = gender || "unknown";
        this.name = name || "Stranger";
    }

    private gender: Gender;
    private name: string;

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
    public parse(data:string):ISim {
        return JSON.parse(data);
    }
}

export class Human extends Sim {
    protected views = humanViews;
    protected type:Sims = "human";
    public speak() {
        return "Hello";
    }
}

export class Cat extends Sim {
    protected views = catsViews;
    protected type:Sims = "cat";
    public speak() {
        return "meow meow";
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

export class Stranger {
    createSim(type: Sims): ISim {
        switch (type) {
            case "cat":
                return new Cat();
            case "dog":
                return new Dog();
            case "human":
                return new Human();
        }
    }
}
