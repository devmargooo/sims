import React from "react";
import styles from "./styles.module.css";

interface IButtonProps {
    text:string;
    onClick?:() => void;
    pressed?:boolean;
    focused?:boolean;
    disabled?:boolean;
}
export const Button:React.FC<IButtonProps> = (
    {text, onClick, pressed, focused, disabled}
) => {
    let className = "";
    if (disabled) {
        if (focused) {
            className = styles.disabledFocused
        } else {
            className = styles.disabled;
        }
    } else if (pressed && onClick) {
        className = styles.pressed;
    } else if (focused) {
        className = styles.focused;
    } else {
        className = styles.idle;
    }
    return <button onClick={onClick} className={className}>{text}</button>
}
