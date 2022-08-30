import { makeHappyFamily } from "../../Family";
import { createHouse } from "../../House";
import {communicate, talkWithStranger} from "../../Walk";

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
    },
    {
        title: "Пообщаться",
        action: communicate
    }
];
