// Greet.spec.tsx

import {fireEvent, render, screen} from "@testing-library/react";
import {Email} from "../../services/AuthService/AuthServiceDummy";
import {Greet} from "./Greet";

jest.mock("./AuthService.ts", () => ({
    loginByEmail:(email:Email) => Promise.resolve('Petya'),
}))

describe("Greet", () => {
    it("should render greet", async () => {
        render(<Greet email="blabla@test.com"/>);
        const greet = await screen.findByTestId("greeting");
        expect(greet).toHaveTextContent("hello, Petya");
    })
})
