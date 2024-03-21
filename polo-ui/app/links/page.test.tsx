import { render } from "@testing-library/react";
import { StoreProvider } from "../../lib/StoreProvider";
import LinkList from "./page";

test("renders LinkList correctly", () => {
  render(
    <StoreProvider>
      <LinkList />
    </StoreProvider>
  );
});
