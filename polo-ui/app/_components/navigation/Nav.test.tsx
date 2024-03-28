import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Nav />);
    expect(getByText("Links")).toBeInTheDocument();
  });
});
