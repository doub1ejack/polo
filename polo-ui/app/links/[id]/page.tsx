"use client";

import { useGetLinkDetailQuery } from "@/lib/features/links/linksApiSlice";
import { usePathname } from "next/navigation";
import RuntimeErrorMessages from "@/app/_components/helper/RuntimeErrors";
import { Button, InputAdornment, TextField } from "@mui/material";
import moment from "moment";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

export default function LinkPage() {
  const linkId = Number(usePathname().split("/").pop());
  const query = useGetLinkDetailQuery(linkId);

  if (query.isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  if (query.isSuccess) {
    return (
      <>
        <div className="polo-border p-7 w-full mt-5">
          <form className="flex flex-row flex-wrap gap-5 justify-between">
            <div className="w-full">
              <Link href="/links">
                <Button variant="text" className="text-mui-blue">
                  &laquo; Back
                </Button>
              </Link>
            </div>

            <div className=" text-2xl my-5">{query.data.clicks} clicks</div>

            <div className="italic flex items-center text-right text-gray-500">
              {moment(query.data.created_at).format("MM/DD/YY @ h:mm a")}
            </div>

            {/* Short URL */}
            <div className="w-full flex items-center">
              <TextField
                className="basis-5/6"
                label="Custom URL"
                value={query.data.slug}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span className=" text-gray-400">
                        {/* TODO: address hardcoded https + SSL */}
                        https://{query.data.domainName} /{" "}
                      </span>
                    </InputAdornment>
                  ),
                }}
                disabled
              />
              <div>
                <ContentCopyIcon
                  className="ml-3 text-2xl text-gray-600 hover:text-mui-blue hover:cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://${query.data.domainName}/${query.data.slug}`
                    );
                  }}
                />
              </div>
              <div>
                <a href="{query.data.dest_url}" target="_blank">
                  <OpenInNewIcon className="ml-3 text-2xl text-gray-600 hover:text-mui-blue hover:cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Destinatoin URL */}
            <div className="w-full flex items-center">
              <TextField
                className="basis-5/6"
                label="Destination URL"
                value={query.data.dest_url}
                disabled
              />
              <div>
                <ContentCopyIcon
                  className="ml-3 text-2xl text-gray-600 hover:text-mui-blue hover:cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(`${query.data.dest_url}`);
                  }}
                />
              </div>
              <div>
                <a href={query.data.dest_url} target="_blank">
                  <OpenInNewIcon className="ml-3 text-2xl text-gray-600 hover:text-mui-blue hover:cursor-pointer" />
                </a>
              </div>
            </div>
          </form>

          <pre className="hidden">{JSON.stringify(query.data, null, 2)}</pre>
        </div>
      </>
    );
  }

  // Fail gracefully if the url is invalid
  if (query.isError) {
    return (
      <RuntimeErrorMessages
        errors={[
          {
            message: "This url is missing a valid id for the short-url",
            type: "required",
          },
        ]}
      />
    );
  }
}
