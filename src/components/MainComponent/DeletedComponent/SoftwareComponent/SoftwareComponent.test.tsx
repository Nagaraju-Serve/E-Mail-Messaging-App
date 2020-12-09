import React from "react";
import { render, screen } from "@testing-library/react";
import SoftwareComponent from "./SoftwareComponent";

describe("<SoftwareComponent />", () => {
  test("it should mount", () => {
    render(<SoftwareComponent />);

    const softwareComponent = screen.getByTestId("SoftwareComponent");

    expect(softwareComponent).toBeInTheDocument();
  });
});
