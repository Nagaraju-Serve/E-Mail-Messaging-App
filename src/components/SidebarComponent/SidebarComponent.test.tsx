import React from "react";
import { render, screen } from "@testing-library/react";
import "../MainComponent/ComposeComponent/node_modules/@testing-library/jest-dom/extend-expect";
import SidebarComponent from "./SidebarComponent";

describe("<SidebarComponent />", () => {
  test("it should mount", () => {
    render(<SidebarComponent />);

    const sidebarComponent = screen.getByTestId("SidebarComponent");

    expect(sidebarComponent).toBeInTheDocument();
  });
});
