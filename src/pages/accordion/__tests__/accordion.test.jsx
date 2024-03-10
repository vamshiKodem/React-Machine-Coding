import React from "react";
import { render } from "@testing-library/react";
import { AccordionUI } from "../accordion";

test("renders button with correct text", () => {
  const { container } = render(<AccordionUI />);
  expect(container).toMatchSnapshot();
});
