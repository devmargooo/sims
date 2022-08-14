import { Stranger } from "./Sims";

export function talkWithStranger(): string {
    const strangerType = Math.random() > 0.5 ? "human" : "cat";
    const stanger = new Stranger().createSim(strangerType);
    return stanger.speak();
}
