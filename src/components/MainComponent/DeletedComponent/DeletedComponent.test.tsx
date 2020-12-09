import React from "react";
import { render, screen } from "@testing-library/react";
import DeletedComponent from "./DeletedComponent";

describe("<DeletedComponent />", () => {
  test("it should mount", () => {
    render(<DeletedComponent />);

    const deletedComponent = screen.getByTestId("DeletedComponent");

    expect(deletedComponent).toBeInTheDocument();
  });
});
