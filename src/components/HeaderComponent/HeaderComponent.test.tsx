import React from "react";
import { render, screen } from "@testing-library/react";
import "../MainComponent/ComposeComponent/node_modules/@testing-library/jest-dom/extend-expect";
import HeaderComponent from "./HeaderComponent";

describe("<HeaderComponent />", () => {
  test("it should mount", () => {
    render(<HeaderComponent />);

    const headerComponent = screen.getByTestId("HeaderComponent");

    expect(headerComponent).toBeInTheDocument();
  });
});
