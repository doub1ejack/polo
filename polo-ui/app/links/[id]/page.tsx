"use client";

import Link from "next/link";
import { useGetLinkDetailQuery } from "@/lib/features/links/linksApiSlice";
import { usePathname } from "next/navigation";
import { link } from "fs";
import RuntimeErrorMessages from "@/app/_components/helper/RuntimeErrors";

export default function LinkPage() {
  const linkId = Number(usePathname().split("/").pop());
  const query = useGetLinkDetailQuery(linkId);
  // console.log("LinkPage query", query.data);

  if (isNaN(linkId)) {
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

  return (
    <>
      <div className="polo-border p-7 w-full text-center mt-5">
        <p>
          Link Details not available until I configure codesandbox.io
          <br /> to run the mockapi json-server on startup.
        </p>
        <Link href="/">
          <button className="polo-btn polo-btn-blue mt-2">
            Return to Links Listing
          </button>
        </Link>
      </div>
    </>
  );
}
