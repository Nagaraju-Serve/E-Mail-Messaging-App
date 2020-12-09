import React from "react";
import { render, screen } from "@testing-library/react";
import DetailedInboxComponent from "./DetailedInboxComponent";

describe("<DetailedInboxComponent />", () => {
  test("it should mount", () => {
    render(<DetailedInboxComponent />);

    const detailedInboxComponent = screen.getByTestId("DetailedInboxComponent");

    expect(detailedInboxComponent).toBeInTheDocument();
  });
});
