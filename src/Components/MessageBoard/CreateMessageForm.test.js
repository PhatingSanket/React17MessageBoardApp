import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import CreateMessageForm from "./CreateMessageForm";

describe("CreateMessageForm", () => {
  test("renders CreateMessageForm component", () => {
    render(<CreateMessageForm />);
    expect(screen.queryByPlaceholderText("Write something..."));
  });

  const Button = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  );

  test("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole(/button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
