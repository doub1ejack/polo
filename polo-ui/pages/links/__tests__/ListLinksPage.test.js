import { render, screen } from "@testing-library/react";
import ListLinksPage from "../../../pages/links/LinkListPage";

// Mocked link data
const mockedLinks = [
  {
    id: 1,
    short_url: "https://example.com/abc123",
    long_url: "https://example.com/very/long/url",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2022-01-01T00:00:00Z",
    updated_at: "2022-01-01T00:00:00Z",
  },
  {
    id: 2,
    short_url: "https://example.com/blog",
    long_url: "https://example.com/very/long/url/3",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 4,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2022-01-01T00:00:00Z",
    updated_at: "2022-01-01T00:00:00Z",
  },
];

test("renders link data correctly", () => {
  render(<ListLinksPage links={mockedLinks} />);

  // Assert that each link is rendered with its short_url
  mockedLinks.forEach((link) => {
    const linkElement = screen.getByText(link.short_url);
    expect(linkElement).toBeInTheDocument();
  });
});
