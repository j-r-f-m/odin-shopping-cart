import React from "react";
import { render, screen } from "@testing-library/react";

import Products from "./Products";

describe("Card Heading Present", () => {
  it("renders Card Heading", () => {
    render(<Products />);
    // screen.debug();
    // expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
