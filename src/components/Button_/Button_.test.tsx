import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button_";
import { render, cleanup } from "@testing-library/react";
// import "jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
it("render fine", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("button render", () => {
  const { getByTestId } = render(<Button lable="click me test"></Button>);
  expect(getByTestId("button")).toHaveTextContent("click me test");
});

it("button render 2", () => {
  const { getByTestId } = render(<Button lable="save"></Button>);
  expect(getByTestId("button")).toHaveTextContent("save");
});

//********************************** */
describe("true is truthy and false is falsy", () => {
  it("true is truthy", () => {
    expect(true).toBe(true);
  });

  test("false is falsy", () => {
    expect(false).toBe(false);
  });
});
