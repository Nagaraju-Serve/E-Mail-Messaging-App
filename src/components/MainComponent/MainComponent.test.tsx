import React from "react";
import { render, screen } from "@testing-library/react";
import MainComponent from "./MainComponent";

describe("<MainComponent />", () => {
  test("it should mount", () => {
    render(<MainComponent />);

    const mainComponent = screen.getByTestId("MainComponent");

    expect(mainComponent).toBeInTheDocument();
  });
});
