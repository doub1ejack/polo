interface LinkFromAPI {
  id: number;
  slug: string;
  short_url: string;
  dest_url: string;
  ip: string;
  creator: string;
  clicks: number;
  secret_key: string;
  is_disabled: boolean;
  is_custom: boolean;
  is_api: boolean;
  created_at: string;
  updated_at: string;
}

interface PaginatedLinksFromAPI {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: LinkFromAPI[];
}

const linkApiData: LinkFromAPI[] = [
  {
    id: 1,
    slug: "static-dummy-data",
    short_url: "https://example.com/static-dummy-data",
    dest_url: "https://example.com/very/long/url",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-23T00:00:00Z",
    updated_at: "2024-03-23T00:00:00Z",
  },
  {
    id: 2,
    slug: "blog",
    short_url: "https://example.com/blog",
    dest_url: "https://example.com/very/long/url/3",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 4,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-04T00:00:00Z",
    updated_at: "2024-03-04T00:00:00Z",
  },
  {
    id: 3,
    slug: "Tonga",
    short_url: "https://example.com/Tonga",
    dest_url: "https://example.com/very/long/url/33",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-01T00:00:00Z",
    updated_at: "2024-03-01T00:00:00Z",
  },
  {
    id: 4,
    slug: "Kingdom",
    short_url: "https://example.com/United-Kingdom",
    dest_url: "https://example.com/very/long/url/4",
    ip: "192.168.1.1",
    creator: "Jane Smith",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-22T00:00:00Z",
    updated_at: "2024-03-22T00:00:00Z",
  },
  {
    id: 5,
    slug: "Paraguay",
    short_url: "https://example.com/Paraguay",
    dest_url: "https://example.com/very/long/url/5",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-09T00:00:00Z",
    updated_at: "2024-03-09T00:00:00Z",
  },
  {
    id: 6,
    slug: "Laos",
    short_url: "https://example.com/Laos",
    dest_url: "https://example.com/very/long/url/6",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-14T00:00:00Z",
    updated_at: "2024-03-14T00:00:00Z",
  },
  {
    id: 7,
    slug: "Venezuela",
    short_url: "https://example.com/Venezuela",
    dest_url: "https://example.com/very/long/url/7",
    ip: "192.168.1.1",
    creator: "Jane Smith",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-02T00:00:00Z",
    updated_at: "2024-03-02T00:00:00Z",
  },
  {
    id: 8,
    slug: "Libya",
    short_url: "https://example.com/Libya",
    dest_url: "https://example.com/very/long/url/8",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-13T00:00:00Z",
    updated_at: "2024-03-13T00:00:00Z",
  },
  {
    id: 9,
    slug: "Israel",
    short_url: "https://example.com/Israel",
    dest_url: "https://example.com/very/long/url/9",
    ip: "192.168.1.1",
    creator: "John Doe",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-12T00:00:00Z",
    updated_at: "2024-03-12T00:00:00Z",
  },
  {
    id: 10,
    slug: "Mali",
    short_url: "https://example.com/Mali",
    dest_url: "https://example.com/very/long/url/10",
    ip: "192.168.1.1",
    creator: "Jane Smith",
    clicks: 0,
    secret_key: "secret456",
    is_disabled: false,
    is_custom: false,
    is_api: false,
    created_at: "2024-03-20T00:00:00Z",
    updated_at: "2024-03-20T00:00:00Z",
  },
];

export const paginatedLinksFromAPI: PaginatedLinksFromAPI = {
  first: 1,
  prev: null,
  next: null,
  last: 1,
  pages: 1,
  items: 10,
  data: linkApiData,
};
