import {Checkbox} from "./Checkbox";
import {render, screen} from "@testing-library/react";

// Checkbox.spec.tsx
describe("Checkbox", () => {
    it("should have correct value", () => {
        render(<Checkbox checked onChange={() => void 0}/>);
        const checkbox = screen.getByTestId('input-checkbox');
        expect(checkbox).toBeChecked();
    })
})
