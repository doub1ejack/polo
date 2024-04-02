"use client";

import { useGetLinksQuery } from "@/lib/features/links/linksApiSlice";
import { useState } from "react";
import { LinkList } from "@/app/_components/links/LinkList";
import { Pagination, Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LinkListPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageNumber = Number(searchParams.get("_page")) || 1;

  // const [pageNumber, setPageNumber] = useState(1); // TODO: Implement pagination
  const {
    data: paginationData,
    isError,
    isLoading,
    isSuccess,
  } = useGetLinksQuery(pageNumber);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    // alert("ding");
    router.push(`${pathname}?_page=${page}`);
  };

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
              onChange={handlePaginationChange}
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
