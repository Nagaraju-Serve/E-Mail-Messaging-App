import React from "react";
import { render, screen } from "@testing-library/react";
import FooterComponent from "./FooterComponent";
import renderer from "react-test-renderer";

describe("<FooterComponent />", () => {
  test("it should mount", () => {
    render(<FooterComponent />);

    const footerComponent = screen.getByTestId("FooterComponent");

    expect(footerComponent).toBeInTheDocument();
  });

  test("Function Testing", () => {
    let component: any = renderer.create(<FooterComponent />).getInstance();

    let tree = component.greetParent("I'm Child");

    expect(tree).toBe("Hello Hello Parent from I'm Child");
  });
});
