import React from "react";
import { render, screen } from "@testing-library/react";

import HomeBtn from "./HomeBtn";

describe("Home Button Present", () => {
  it("renders HomeBtn button", () => {
    render(<HomeBtn />);
    // log render
    // screen.debug();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("Get Paragraph", () => {
  it("renders HomeBtn paragraph", () => {
    render(<HomeBtn />);
    expect(screen.getByRole("intro-text")).toBeInTheDocument();
  });
});
