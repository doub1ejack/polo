/**
 * API slice for handling links-related operations.
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

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
  prev: number;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: LinkFromAPI[];
}

interface Link extends LinkFromAPI {
  domainName: string;
}

interface PaginatedLinks extends PaginatedLinksFromAPI {
  data: Link[];
}

// Define a service using a base URL and expected endpoints
export const linksApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${apiDomain}/links` }),
  reducerPath: "linksApi",
  tagTypes: ["Links"],
  endpoints: (build) => ({
    // Get paginated links
    getLinks: build.query<PaginatedLinks, number>({
      query: (pageNumber) => `?_page=${pageNumber}`,
      providesTags: (result, error, id) => [{ type: "Links", id }],
      transformResponse: (response: PaginatedLinksFromAPI): PaginatedLinks => {
        const transformedLinks: Link[] = transformPaginatedLinksFromAPI(
          response.data
        );
        return { ...response, data: transformedLinks };
      },
    }),
    // getLinkDetail: build.query<Link, number>({
    //   query: (linkId) => `/${linkId}`,
    // }),
  }),
});

/**
 * Transforms LinkFromAPI objects to Link objects for use in the UI
 * @param linksFromAPI
 * @returns
 */
function transformPaginatedLinksFromAPI(linksFromAPI: LinkFromAPI[]): Link[] {
  const envDomainName = process.env.NEXT_PUBLIC_SHORT_URL_DOMAIN_NAME;
  return linksFromAPI.map((link): Link => {
    return {
      ...link,
      domainName: envDomainName as string, // safe type narrowing (see env.ts)
    };
  });
}

export const { useGetLinksQuery } = linksApiSlice;
