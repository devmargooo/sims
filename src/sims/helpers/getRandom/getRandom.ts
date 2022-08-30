export function getRandom(min:number, max:number) {
    if (min === NaN || max === NaN) {
        throw new Error("min or max is NaN");
    }
    const diff = max - min;
    return Math.trunc(Math.random() * diff) + min;
}
