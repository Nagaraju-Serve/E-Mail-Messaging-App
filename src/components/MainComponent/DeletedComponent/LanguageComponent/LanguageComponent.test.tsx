import React from "react";
import { render, screen } from "@testing-library/react";
import LanguageComponent from "./LanguageComponent";

describe("<LanguageComponent />", () => {
  test("it should mount", () => {
    render(<LanguageComponent />);

    const languageComponent = screen.getByTestId("LanguageComponent");

    expect(languageComponent).toBeInTheDocument();
  });
});
