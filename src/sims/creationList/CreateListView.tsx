import React from "react";
import {Node} from "./types";
import {createList} from "./createList";
import {list} from "./data";

const ListNode:React.FC<{item: Node}> = ({item}) => {
    return (
        <li key={item.id}>
            <div>{item.title}</div>
            <List items={item.sections}/>
        </li>
    )
}

const List: React.FC<{items: Node[]}> = ({items}) => {
    return (
        <ul>
            {
                items.map((item) => <ListNode item={item}/>)
            }
        </ul>
    )
}

export const ShowList = () => {
    const items = createList(list);
    return (
        <div style={{width: 200, textAlign: "left"}}>
            <List items={items}/>
        </div>
    )
}
