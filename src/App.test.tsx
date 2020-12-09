import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
<<<<<<< Updated upstream

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("fake test", () => {
  expect(true).toBeTruthy();
=======
import userEvent from "@testing-library/user-event";

test("renders App Component", () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();

  //expect(App).toBeInTheDocument();
  const app = screen.getByTestId("App");
  expect(app).toBeInTheDocument();
});

test("types into the input", () => {
  render(
    <>
      <label htmlFor="time">Enter a time</label>
      <input type="time" id="time" />
    </>
  );
  const input: any = screen.getByLabelText(/enter a time/i);
  userEvent.type(input, "13:58");
  expect(input.value).toBe("13:58");
>>>>>>> Stashed changes
});

// const mockFn = jest.fn();

// const a = new mockFn();
// const b = new mockFn();

// mockFn.mock.instances[0] === a; // true
// mockFn.mock.instances[1] === b; // true
// expect(mockFn.mock.instances[1] === b).toBeTruthy();

// test("click", () => {
//   render(
//     <div>
//       <label htmlFor="checkbox">Check</label>
//       <input id="checkbox" type="checkbox" />
//     </div>
//   );

//   userEvent.click(screen.getByText("Check"));
//   expect(screen.getByLabelText("Check")).toHaveAttribute("checked", true);
// });
