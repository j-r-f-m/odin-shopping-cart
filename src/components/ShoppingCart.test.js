import React from "react";
import { render, screen } from "@testing-library/react";

import Shopping from "./ShoppingCart";

describe("Shopping Cart Heading Present", () => {
  it("renders Shopping Cart Heading", () => {
    render(<Shopping />);
    // screen.debug();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
