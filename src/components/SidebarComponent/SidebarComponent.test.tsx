import React from "react";
import { render, screen } from "@testing-library/react";
import SidebarComponent from "./SidebarComponent";

describe("<SidebarComponent />", () => {
  test("it should mount", () => {
    render(<SidebarComponent />);

    const sidebarComponent = screen.getByTestId("SidebarComponent");

    expect(sidebarComponent).toBeInTheDocument();
  });
});
