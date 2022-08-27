import {Item, Node, PreparedNode} from "./types";

function prepareList(list:Item[]):(Node & { sectionId?:number })[] {
    return list.map((item) => ({...item, sections:[]}));
}

export function createList(list:Item[]):Node[] {
    const preparedList:PreparedNode[] = prepareList(list);

    for (let i = preparedList.length - 1; i >=0; i--) {
        let item = preparedList[i];
        if (item) {
            if (item.sectionId) {
                let hasParent = false;
                for (let j = i - 1; j >=0; j--) {
                    const maybeParent = preparedList[j];
                    if (!maybeParent) {
                        continue;
                    }
                    if (maybeParent.id === item.sectionId) {
                        hasParent = true;
                        maybeParent.sections.push({
                            id: item.id,
                            title: item.title,
                            sections: item.sections,
                        });
                        preparedList.splice(i, 1);
                    }
                }
            }
        }
    }
    return preparedList as Node[];
}
