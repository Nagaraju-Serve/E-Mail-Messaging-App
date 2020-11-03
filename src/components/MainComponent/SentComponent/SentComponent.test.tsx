import React from "react";
import { render, screen } from "@testing-library/react";
import "../../MainComponent/ComposeComponent/node_modules/@testing-library/jest-dom/extend-expect";
import SentComponent from "./SentComponent";

describe("<SentComponent />", () => {
  test("it should mount", () => {
    render(<SentComponent />);

    const sentComponent = screen.getByTestId("SentComponent");

    expect(sentComponent).toBeInTheDocument();
  });
});
