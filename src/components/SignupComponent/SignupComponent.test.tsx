import React from "react";
import { render, screen } from "@testing-library/react";
import SignupComponent from "./SignupComponent";

describe("<SignupComponent />", () => {
  test("it should mount", () => {
    render(<SignupComponent />);

    const signupComponent = screen.getByTestId("SignupComponent");

    expect(signupComponent).toBeInTheDocument();
  });
});
