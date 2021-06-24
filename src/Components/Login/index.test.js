import React from "react";
import { render } from "@testing-library/react";

import Login from "./index";

describe("Login", () => {
  test("renders Login component", () => {
    render(<Login />);
  });
});
