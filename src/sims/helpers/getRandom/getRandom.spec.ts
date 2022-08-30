import {getRandom} from "./getRandom";

describe("getRandom", () => {
    it("works", () => {
        const min = 0, max = 5;
        const result = getRandom(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    })
})
