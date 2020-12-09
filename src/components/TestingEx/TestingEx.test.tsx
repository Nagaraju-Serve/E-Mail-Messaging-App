import React from "react";
import { render, screen } from "@testing-library/react";

import TestingEx from "./TestingEx";

describe("TestingEx", () => {
  test("renders TestingEx component", () => {
    render(<TestingEx />);

    screen.debug();
  });
});
