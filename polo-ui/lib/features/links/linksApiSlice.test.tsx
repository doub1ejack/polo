import { useGetLinksQuery } from "./linksApiSlice";
import { ReactNode } from "react";
import { StoreProvider } from "@/lib/StoreProvider";
import { renderHook, act, waitFor } from "@testing-library/react";

function Wrapper(props: { children: ReactNode }) {
  return <StoreProvider>{props.children}</StoreProvider>;
}

describe("linksApiSlice", () => {
  const dataWithOneLink = {
    first: 1,
    prev: 1,
    next: null,
    last: 1,
    pages: 1,
    items: 1,
    data: [
      {
        id: "1",
        short_url: "https://example.com/Congo",
        long_url: "https://example.com/very/long/url/11",
        ip: "192.168.1.1",
        creator: "John Doe",
        clicks: 0,
        secret_key: "secret456",
        is_disabled: false,
        is_custom: false,
        is_api: false,
        created_at: "2024-03-02T00:00:00Z",
        updated_at: "2024-03-02T00:00:00Z",
      },
    ],
  };
  const pageNumber = 1;

  it("renders the hook", async () => {
    // Note: because I'm mocking the api data in the Links slice for this
    // codesandbox repo, I don't need to mock the fetch function right now.
    // In my dev repo where I'm using json-server as a mock api, I will need
    // to mock the fetch function below.

    // Mock the fetch function to return a specific response
    // global.fetch = jest.fn(() =>
    //   Promise.resolve(new Response(JSON.stringify(dataWithOneLink)))
    // );

    const { result } = renderHook(() => useGetLinksQuery(pageNumber), {
      wrapper: Wrapper,
    });

    // Check if fetch was called
    await waitFor(() => !result.current.isLoading);
    // expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "getLinks",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
  });
  it.todo("returns an empty list when there are no links");
  it.todo("returns different list results for different page numbers");
});
