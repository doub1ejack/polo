/**
 * API slice for handling links-related operations.
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

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
  baseQuery: fetchBaseQuery({ baseUrl: `${apiDomain}/links` }),
  reducerPath: "linksApi",
  tagTypes: ["Links"],
  endpoints: (build) => ({
    getLinks: build.query<PaginatedLinkApiResponse, number>({
      query: (pageNumber) => `?_page=${pageNumber}`,
      providesTags: (result, error, id) => [{ type: "Links", id }],
    }),
    // getLinkDetail: build.query<Link, number>({
    //   query: (linkId) => `/${linkId}`,
    // }),
  }),
});

export const { useGetLinksQuery } = linksApiSlice;
