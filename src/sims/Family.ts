import { ISim, Human, Cat } from "./Sims";

interface IFamilyBuilder {
    makeMaleSim: () => void;
    makeFemaleSim: () => void;
    makeKid: () => void;
    getResult: () => string;
}

class HumanFamilyBuilder implements IFamilyBuilder {
    makeMaleSim(): void {
        this.family.push(new Human({ gender: "male" }));
    }
    makeFemaleSim(): void {
        this.family.push(new Human({ gender: "female" }));
    }
    makeKid(): void {
        Math.random() > 0.5 ? this.makeMaleSim() : this.makeFemaleSim();
    }
    getResult(): string {
        return "Human family: " + this.family.map((sim) => sim.whoAmI() + " ");
    }
    private family: ISim[] = [];
}

class CatFamilyBuilder implements IFamilyBuilder {
    makeMaleSim(): void {
        this.family.push(new Cat({ gender: "male" }));
    }
    makeFemaleSim(): void {
        this.family.push(new Cat({ gender: "female" }));
    }
    makeKid(): void {
        return Math.random() > 0.5 ? this.makeMaleSim() : this.makeFemaleSim();
    }
    getResult(): string {
        return "Cat family: " + this.family.map((sim) => sim.whoAmI() + " ");
    }
    private family: ISim[] = [];
}

function buildFamily(builder: IFamilyBuilder): string {
    builder.makeMaleSim();
    builder.makeFemaleSim();
    builder.makeKid();
    builder.makeKid();
    return builder.getResult();
}

export function makeHappyFamily(): string {
    const humanFamilyBuilder = new HumanFamilyBuilder();
    const catFamilyBuilder = new CatFamilyBuilder();
    return `
    ${buildFamily(humanFamilyBuilder)}
    ==========================================
    ${buildFamily(catFamilyBuilder)}
  `;
}
