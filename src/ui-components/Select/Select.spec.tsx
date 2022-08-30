import Select from "react-select";
import React from "react";
import {render, screen} from "@testing-library/react";
import {Test} from "./Test";

describe("react-select", () => {
    it("RTL", () => {
        render(<Test/>);
        screen.debug();
    })
})

