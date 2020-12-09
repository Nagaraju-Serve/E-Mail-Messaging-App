import React from "react";
import { render, screen } from "@testing-library/react";
import Child from "./Child";

describe("<Child />", () => {
  test("it should mount", () => {
    render(<Child parentCallback="Hello" />);

    const child = screen.getByTestId("Child");

    expect(child).toBeInTheDocument();
  });
});
