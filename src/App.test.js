import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders select language", () => {
  render(<App />);
  const linkElement = screen.getByText(/select language/i);
  expect(linkElement).toBeInTheDocument();
});
