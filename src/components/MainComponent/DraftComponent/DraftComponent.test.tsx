import React from "react";
import { render, screen } from "@testing-library/react";
import DraftComponent from "./DraftComponent";

describe("<DraftComponent />", () => {
  test("it should mount", () => {
    render(<DraftComponent />);

    const draftComponent = screen.getByTestId("DraftComponent");

    expect(draftComponent).toBeInTheDocument();
  });
});
