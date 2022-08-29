import {fireEvent, render, screen} from "@testing-library/react";
import {Input} from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
    it("has correct value", () => {
        const testValue = 123;
        render(<Input value={testValue} onChange={() => void 0}/>);
        const numberInput = screen.getByRole('input');
        expect(numberInput).toHaveValue(testValue);
    })

    it("test user event", () => {
        const testValue = 123;
        render(<Input value={testValue} onChange={() => void 0}/>);
        const numberInput = screen.getByRole('input');
        // fireEvent
        fireEvent.change(numberInput, { target: { value: "456" } });

        // userEvent
        userEvent.type(numberInput, '456');
    })
})
