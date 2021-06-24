import React from "react";
import { render } from "@testing-library/react";

import Register from "./index";

describe("Register", () => {
  test("renders Register component", () => {
    render(<Register />);
  });
});
