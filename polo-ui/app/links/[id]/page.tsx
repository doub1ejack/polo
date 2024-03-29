"use client";

import { useGetLinkDetailQuery } from "@/lib/features/links/linksApiSlice";
import { usePathname } from "next/navigation";
import RuntimeErrorMessages from "@/app/_components/helper/RuntimeErrors";
import { Button, InputAdornment, TextField } from "@mui/material";
import moment from "moment";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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
    console.log(query);
    return (
      <>
        <div className="polo-border p-7 w-full mt-5">
          <form className="flex flex-row flex-wrap gap-5 justify-between">
            <div className="w-full">
              <Link href="/links">
                <Button variant="text">&laquo; Back</Button>
              </Link>
            </div>

            <div className=" text-2xl my-5">{query.data.clicks} clicks</div>

            <div className="italic flex items-center text-right text-gray-500">
              {moment(query.data.created_at).format("MM/DD/YY @ h:mm a")}
            </div>

            <TextField
              className="w-full "
              varient="outlined"
              label="Custom URL"
              value={query.data.slug}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <ContentCopyIcon className="mr-6" /> */}
                    <span className=" text-gray-400">
                      http://{query.data.domainName} /
                    </span>
                  </InputAdornment>
                ),
              }}
              disabled
            />
            <TextField
              className="w-full"
              varient="outlined"
              label="Destination URL"
              value={query.data.dest_url}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <ContentCopyIcon className="mr-5" />
              //     </InputAdornment>
              //   ),
              // }}
              disabled
            />
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
