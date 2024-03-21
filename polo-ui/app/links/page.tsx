"use client";

import { useGetLinksQuery } from "@/lib/features/links/linksApiSlice";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Pagination } from "@mui/material";
import moment from "moment";

export default function LinkList() {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: paginationData,
    isError,
    isLoading,
    isSuccess,
  } = useGetLinksQuery(pageNumber);

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
          {paginationData.data.map(
            ({ id, short_url, clicks, created_at, updated_at }) => (
              <ListItem
                key={id}
                className="bg-white border-slate-100 border-2 rounded-xl m-3"
              >
                <ListItemText
                  className="w-20 text-gray-400"
                  primary={moment(created_at).fromNow(true)}
                />
                <div className="text-purple-500 text-xl w-80">{short_url}</div>
                <div className="w-2 text-gray-400 text-right">{clicks}</div>
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
