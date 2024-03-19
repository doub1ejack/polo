"use client";

import { useGetLinksQuery } from "@/lib/features/links/linksApiSlice";
import { useState } from "react";
// import styles from "./Links.module.css"; // todo

export const Links = () => {
  const [pageNumber, setPageNumber] = useState(1);
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetLinksQuery(pageNumber);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div>
        {data.data.map(({ id, short_url, clicks, created_at, updated_at }) => (
          <blockquote key={id}>
            <div className="w-1/2">
              &ldquo;{short_url}&rdquo;
              <footer>
                <cite>{created_at}</cite>
              </footer>
            </div>
          </blockquote>
        ))}
      </div>
    );
  }

  return null;
};
