"use client";

import { useGetLinksQuery } from "@/lib/features/links/linksApiSlice";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const Links = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isError, isLoading, isSuccess } = useGetLinksQuery(pageNumber);

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
        <List>
          {data.data.map(
            ({ id, short_url, clicks, created_at, updated_at }) => (
              <ListItem key={id}>
                <ListItemText primary={short_url} secondary={created_at} />
              </ListItem>
            )
          )}
        </List>
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

  return null;
};
