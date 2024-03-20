"use client";

import { useGetLinksQuery } from "@/lib/features/links/linksApiSlice";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Pagination } from "@mui/material";

export default function LinkList() {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: paginationData,
    isError,
    isLoading,
    isSuccess,
  } = useGetLinksQuery(pageNumber);

  debugger;

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
        <List className="text-green-500">
          {paginationData.data.map(
            ({ id, short_url, clicks, created_at, updated_at }) => (
              <ListItem key={id}>
                <ListItemText primary={short_url} secondary={created_at} />
              </ListItem>
            )
          )}
        </List>

        <Pagination
          page={pageNumber}
          count={paginationData.pages}
          shape="rounded"
        />
      </div>
    );
  }

  // error state
  else {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }
}
