"use client";

import Link from "next/link";
import { useGetLinkDetailQuery } from "@/lib/features/links/linksApiSlice";

export default function LinkPage() {
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
