import React from "react";
import { render, screen } from "@testing-library/react";
import "../MainComponent/ComposeComponent/node_modules/@testing-library/jest-dom/extend-expect";
import FooterComponent from "./FooterComponent";

describe("<FooterComponent />", () => {
  test("it should mount", () => {
    render(<FooterComponent />);

    const footerComponent = screen.getByTestId("FooterComponent");

    expect(footerComponent).toBeInTheDocument();
  });
});
