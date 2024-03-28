import { render } from "@testing-library/react";
import { StoreProvider } from "../../lib/StoreProvider";
import LinkListPage from "./page";

test("renders LinkList correctly", () => {
  render(
    <StoreProvider>
      <LinkListPage />
    </StoreProvider>
  );
});
