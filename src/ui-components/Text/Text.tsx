import React from "react";

interface ITextProps {
    text:string;
}
export const Text:React.FC<ITextProps> = ({text}) => <p>{text}</p>;
