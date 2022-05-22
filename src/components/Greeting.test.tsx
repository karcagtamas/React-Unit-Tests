import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const el = screen.getByText("Hello World");
    expect(el).toBeInTheDocument();
  });

  test("renders `good to see you` if the button was not clicked", () => {
    render(<Greeting />);

    const el = screen.getByText("good to see you", { exact: false });
    expect(el).toBeInTheDocument();
  });

  test("renders `changed` if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btn = screen.getByRole("button");
    userEvent.click(btn);

    // Assert
    const el = screen.getByText("changed", { exact: false });
    expect(el).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the buttin was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btn = screen.getByRole("button");
    userEvent.click(btn);

    // Assert
    const el = screen.queryByText("good to see you", { exact: false });
    expect(el).toBeNull();
  });
});
