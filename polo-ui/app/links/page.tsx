"use client";

import { useGetLinksQuery } from "@/lib/features/links/linksApiSlice";
import { useState } from "react";
import { LinkList } from "@/app/_components/links/LinkList";
import { Pagination, Stack } from "@mui/material";

export default function LinkListPage() {
  const [pageNumber, setPageNumber] = useState(1); // TODO: Implement pagination
  const {
    data: paginationData,
    isError,
    isLoading,
    isSuccess,
  } = useGetLinksQuery(pageNumber);

  if (isLoading) {
    // TODO: Make this a pretty loading spinner
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        {typeof window !== "undefined" && (
          <LinkList linkList={paginationData.data} />
        )}

        {paginationData.pages > 1 && (
          <Stack alignItems="center">
            <Pagination
              page={pageNumber}
              count={paginationData.pages}
              shape="rounded"
              className="justify-center"
              onChange={(event, value) => setPageNumber(value)}
            />
          </Stack>
        )}
      </>
    );
  }

  // error state
  else {
    return (
      <>
        <h1>There was an error!!!</h1>
      </>
    );
  }
}
