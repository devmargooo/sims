import Select from "react-select";
import React from "react";

export const Test:React.FC = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <Select options={options} />
    )
}
