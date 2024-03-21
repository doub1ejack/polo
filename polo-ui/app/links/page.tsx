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
        <div>
          <span className="float-left text-gray-400 text-sm pl-5">Created</span>
          <span className="float-right text-gray-400 text-sm">Clicks</span>
        </div>
        <List>
          {paginationData.data.map(
            ({ id, domainName, slug, clicks, created_at }) => (
              <ListItem
                key={id}
                className="bg-white border-slate-100 border-2 rounded-xl m-3"
              >
                <ListItemText
                  className="w-20 text-gray-400"
                  primary={moment(created_at).fromNow(true)}
                />
                <div className="text-xl w-80">
                  <span className="text-gray-400">{domainName}</span>
                  <span className="text-purple-500 ">/{slug}</span>
                </div>

                <div className="w-2 text-gray-400 text-right pr-4">
                  {clicks}
                </div>
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
