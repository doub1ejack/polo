import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Nav />);

    // Replace 'Home' with actual text from your Nav component
    expect(getByText("Quotes")).toBeInTheDocument();
  });
});
