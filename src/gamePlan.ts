import { makeHappyFamily } from "./sims/Family";
import { createHouse } from "./sims/House";
import { talkWithStranger } from "./sims/Walk";

export type Game = {
    title: string;
    action: () => string;
};

export const gamePlan: Game[] = [
    {
        title: "Поговорить с незнакомцем",
        action: talkWithStranger
    },
    {
        title: "Создать семью",
        action: makeHappyFamily
    },
    {
        title: "Создать дом",
        action: createHouse
    }
];
