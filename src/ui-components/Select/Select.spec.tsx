import Select from "react-select";
import React from "react";
import {render, screen} from "@testing-library/react";

const Test:React.FC = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <Select options={options} />
    )
}

describe("react-select", () => {
    it("RTL", () => {
        render(<Test/>);
        screen.debug();
    })
})

