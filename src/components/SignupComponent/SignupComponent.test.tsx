import React from "react";
import { render, screen } from "@testing-library/react";
import "../MainComponent/ComposeComponent/node_modules/@testing-library/jest-dom/extend-expect";
import SignupComponent from "./SignupComponent";

describe("<SignupComponent />", () => {
  test("it should mount", () => {
    render(<SignupComponent />);

    const signupComponent = screen.getByTestId("SignupComponent");

    expect(signupComponent).toBeInTheDocument();
  });
});
