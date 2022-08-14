interface IBed {
    lie: () => string;
}

interface IWindow {
    look: () => string;
}

interface IChair {
    seat: () => string;
}

interface IHouseFactory {
    createBed: () => IBed;
    createWindow: () => IWindow;
    createChair: () => IChair;
}

class BaroqueBed implements IBed {
    lie = () => "лежишь на кровати в стиле барокко!";
}

class ModernBed implements IBed {
    lie = () => "лежишь на современной кровати";
}

class BaroqueWindow implements IWindow {
    look = () => "высокомерно смотришь из окна";
}

class ModernWindow implements IWindow {
    look = () => "дружелюбно смотришь из окна";
}

class BaroqueChair implements IChair {
    seat = () => "сидишь как король";
}

class ModernChair implements IChair {
    seat = () => "удобно сидишь";
}

class baroqueHouseFactory implements IHouseFactory {
    createBed = () => new BaroqueBed();
    createWindow = () => new BaroqueWindow();
    createChair = () => new BaroqueChair();
}

class modernHouseFactory implements IHouseFactory {
    createBed = () => new ModernBed();
    createWindow = () => new ModernWindow();
    createChair = () => new ModernChair();
}

function createCheapHouse(factory: IHouseFactory): string {
    const window = factory.createWindow();
    const bed = factory.createBed();
    return "Сначала ты " + window.look() + ", затем " + bed.lie();
}

function createExpensiveHouse(factory: IHouseFactory): string {
    const window = factory.createWindow();
    const bed = factory.createBed();
    const chair = factory.createChair();
    const chair2 = factory.createChair();
    return (
        "Сначала ты " +
        window.look() +
        ", затем " +
        chair.seat() +
        ", потом снова " +
        chair2.seat() +
        " и в конце " +
        bed.lie()
    );
}

export function createHouse(): string {
    const factory: IHouseFactory = new (Math.random() > 0.5
        ? baroqueHouseFactory
        : modernHouseFactory)();

    const haveLotMoney = Math.random() > 0.5;
    return haveLotMoney
        ? createExpensiveHouse(factory)
        : createCheapHouse(factory);
}
