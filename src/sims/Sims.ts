export interface ISim {
    speak: () => string;
    whoAmI: () => string;
}

type Sims = "human" | "cat" | "dog";
type Gender = "male" | "female" | "other" | "unknown";

export abstract class Sim implements Sim {
    constructor({ name, gender }: { name?: string; gender?: Gender } = {}) {
        this.gender = gender || "unknown";
        this.name = name || "Stranger";
    }

    private gender: Gender;
    private name: string;
    public whoAmI() {
        return `${this.name}, ${this.gender}`;
    }
    public abstract speak(): string;
}

export class Human extends Sim {
    public speak() {
        return "Hello";
    }
}

export class Cat extends Sim {
    public speak() {
        return "meow meow";
    }
}

type DogCommand = "seat" | "voice"

interface IDog extends ISim {
    executeCommand: (command: DogCommand) => string;
}

export class Dog extends Sim implements IDog {
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
