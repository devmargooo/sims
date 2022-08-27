import {ISim, Stranger, Human, Dog} from "./Sims";

export function talkWithStranger(): string {
    const strangerType = Math.random() > 0.5 ? "human" : "cat";
    const stanger = new Stranger().createSim(strangerType);
    return stanger.speak();
}

export function communicate():string {
    let talk = "";
    const human:ISim = new Human();
    talk += "Human says: " + human.speak() + ", ";

    const dog:ISim = new Dog();
    dog.speak();
    talk += "Dog says: " + dog.speak() + ".";

    return talk;
}
