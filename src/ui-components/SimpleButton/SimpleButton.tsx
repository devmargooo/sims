import React from "react";
interface ISimpleButtonProps {
    text:string;
    onClick:() => void;
}
export const SimpleButton:React.FC<ISimpleButtonProps> =
    ({text, onClick}) => (
        <button onClick={onClick}>{text}</button>
)
