import React from "react";
interface ISimpleButtonProps {
    text:string;
    onClick:() => void;
}
export const SimpleButton:React.FC<ISimpleButtonProps> =
    ({text}) => (
        <button style={{color: 'blue'}}>{text}</button>
)
