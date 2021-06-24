import React from "react";
import { render, screen } from "@testing-library/react";

import Messages from "./index";

describe("Messages", () => {
  test("renders Messages component", () => {
    render(<Messages />);
  });
});
