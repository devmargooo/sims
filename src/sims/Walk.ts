import {ISim, CatStrangerFactory, HumanStrangerFactory, Human, Dog, IStrangerFactory} from "./Sims";

export function talkWithStranger(): string {
    const strangerFactory:IStrangerFactory = Math.random() > 0.5 ? new HumanStrangerFactory() : new CatStrangerFactory();
    const stanger = strangerFactory.createSim();
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
