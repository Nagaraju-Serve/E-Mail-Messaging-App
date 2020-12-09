import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ComposeComponent from "./ComposeComponent";

describe("<ComposeComponent />", () => {
  test("it should mount", () => {
    render(<ComposeComponent />);
    const composeComponent = screen.getByTestId("ComposeComponent");
    expect(composeComponent).toBeInTheDocument();
  });
});

describe("input", () => {
  test("it should mount", () => {
    render(<ComposeComponent />);

    const To = screen.getByLabelText("To:");
    expect(To).toBeInTheDocument();

    const Text = screen.getByText("Subject:");
    expect(Text).toHaveTextContent("Subject");
  });
});
