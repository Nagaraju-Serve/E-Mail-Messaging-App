import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("<LoginComponent />", () => {
  test("it should mount", () => {
    render(<LoginComponent />);

    const loginComponent = screen.getByTestId("LoginComponent");

    expect(loginComponent).toBeInTheDocument();
  });

  test("Function Testing", () => {
    let component: any = renderer.create(<LoginComponent />).getInstance();

    const btn = screen.getByTestId("LoginButton");
    const btnClick: any = userEvent.click(btn);
    // expect(btn).toHaveAttribute("state", true);
    const cdn: any = screen.getByTestId("login-container");
    // let tree = component.loginHandler();
    expect(cdn).toHaveAttribute("state", true);
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
