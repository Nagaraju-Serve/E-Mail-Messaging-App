import React from "react";
import { render, screen } from "@testing-library/react";
import "../../MainComponent/ComposeComponent/node_modules/@testing-library/jest-dom/extend-expect";
import DraftComponent from "./DraftComponent";

describe("<DraftComponent />", () => {
  test("it should mount", () => {
    render(<DraftComponent />);

    const draftComponent = screen.getByTestId("DraftComponent");

    expect(draftComponent).toBeInTheDocument();
  });
});
