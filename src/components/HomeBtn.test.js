import React from "react";
import { render, screen } from "@testing-library/react";

import HomeBtn from "./HomeBtn";

describe("Home Button Present", () => {
  it("renders HomeBtn button", () => {
    render(<HomeBtn />);
    // log render
    screen.debug();

    // expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

// describe("Get Paragraph", () => {
//   it("renders HomeBtn paragraph", () => {
//     render(<HomeBtn />);
//     expect(
//       screen.getByText(
//         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed divoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Ste clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sitamet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Loremipsum dolor sit amet."
//       )
//     ).toBeInTheDocument();
//   });
// });
