//! Tests designed to confirm the functionality of the testing toolchain

import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

describe("Testing Toolchain Tests", () => {
  it("Basic assertions", () => {
    const element = React.createElement("h1", {}, "Hello, World!");
    render(element);
    expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
  });
});
