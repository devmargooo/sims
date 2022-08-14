export interface ISim {
    speak: () => string;
    whoAmI: () => string;
}

type Sims = "human" | "cat";
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

export class Stranger {
    createSim(type: Sims): ISim {
        switch (type) {
            case "cat":
                return new Cat();
            case "human":
                return new Human();
        }
    }
}
