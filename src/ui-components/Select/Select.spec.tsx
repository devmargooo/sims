import Select from "react-select";
import React from "react";
import {render, screen} from "@testing-library/react";
import {TestSelect} from "./TestSelect";

describe("react-select", () => {
    it("RTL", () => {
        render(<TestSelect/>);
        screen.debug();
    })
})

