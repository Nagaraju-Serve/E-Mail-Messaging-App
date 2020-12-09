import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";
import "@testing-library/jest-dom/extend-expect";

describe("<LoginComponent />", () => {
  test("it should mount", () => {
    render(<LoginComponent />);

    const loginComponent = screen.getByTestId("LoginComponent");

    expect(loginComponent).toBeInTheDocument();
  });
});

describe("headerComponent", () => {
  test("get by text", () => {
    render(<LoginComponent />);
    const name = screen.getByTestId("name");
    const password = screen.getByTestId("password");
    expect(name).not.toBeDisabled();
    expect(password).not.toBeDisabled();
  });
});

describe("headerComponentbutton", () => {
  test("button type", () => {
    render(<LoginComponent />);
    const button = screen.getByTestId("button");
    expect(button).toHaveAttribute("type", "submit");
  });
});

// it("increments counter", () => {
//   const { getByTestId } = render(<TestEvents />);

//   fireEvent.click(getByTestId("button-up"));
//   expect(getByTestId("counter")).toHaveTextContent("1");
// });
