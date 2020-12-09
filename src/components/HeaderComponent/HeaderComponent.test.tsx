import React from "react";
<<<<<<< Updated upstream
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
=======
import { render, screen } from "@testing-library/react";
>>>>>>> Stashed changes
import HeaderComponent from "./HeaderComponent";

describe("<HeaderComponent />", () => {
  test("it should mount", () => {
    render(<HeaderComponent />);

    const headerComponent = screen.getByTestId("HeaderComponent");

    expect(headerComponent).toBeInTheDocument();
  });
});

describe("---", () => {
  test("it should mount", () => {
    render(<HeaderComponent />);
    expect(true).toBe(true);
  });
});

describe("headerComponent", () => {
  test("get by text", () => {
    render(<HeaderComponent />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
