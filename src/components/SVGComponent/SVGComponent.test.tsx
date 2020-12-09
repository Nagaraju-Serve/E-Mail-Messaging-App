import React from "react";
import { render, screen } from "@testing-library/react";
import SVGComponent from "./SVGComponent";

describe("<SVGComponent />", () => {
  test("it should mount", () => {
    render(<SVGComponent />);

    const svgComponent = screen.getByTestId("SVGComponent");

    expect(svgComponent).toBeInTheDocument();
  });
});
