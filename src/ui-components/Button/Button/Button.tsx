import React from "react";

interface IButtonProps {
    text:string;
    onClick:() => void;
}
export const Button:React.FC<IButtonProps> = ({text, onClick}) => (
        <button onClick={onClick}>{text}</button>
)
