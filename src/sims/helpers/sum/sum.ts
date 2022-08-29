export function sum(a:any, b:any):number {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("arg is not a number");
    }
    return a + b;
}
