import React from "react";
import { render, screen } from "@testing-library/react";
import SentComponent from "./SentComponent";

describe("<SentComponent />", () => {
  test("it should mount", () => {
    render(<SentComponent />);

    const sentComponent = screen.getByTestId("SentComponent");

    expect(sentComponent).toBeInTheDocument();
  });
});
