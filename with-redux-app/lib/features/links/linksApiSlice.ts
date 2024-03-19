import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

// modeled after quotesApiSlice.ts

interface Link {
  id: number;
  short_url: string;
  long_url: string;
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

interface PaginatedLinkApiResponse {
  first: number;
  prev: number;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Link[];
}

// Define a service using a base URL and expected endpoints
export const linksApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/links` }),
  reducerPath: "linksApi",
  tagTypes: ["Links"],
  endpoints: (build) => ({
    // Supply generics for the return type (in this case `QuotesApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getLinks: build.query<PaginatedLinkApiResponse, number>({
      query: (pageNumber = 1) => `?_page=${pageNumber}`,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: (result, error, id) => [{ type: "Links", id }],
    }),
  }),
});

// Hooks are auto-generated by RTK-Query
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useGetLinksQuery } = linksApiSlice;