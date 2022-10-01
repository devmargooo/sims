type Callback = (...arg:any) => any;

export function cachedDecorator(fn:Callback):Callback {
    const cache:Record<string, any> = {};
    return function (...arg) {
        const key = hash(...arg);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...arg);
        cache[key] = result;
        return result;
    }
}

function hash(...arg:any) {
    const [a, b] = arg;
    return `${a}${b}`;
}
