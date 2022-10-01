// export interface ICat extends ISim {
//     eat():string;
// }

import {Cat, ICat, Tiger, TysonsTiger} from "../sims/Sims";

export function feed(cat:ICat):string {
    return cat.eat();
}
