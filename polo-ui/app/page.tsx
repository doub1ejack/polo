import type { Metadata } from "next";
import RuntimeErrorMessages from "@/app/_components/helper/RuntimeErrors";
import LinkListPage from "@/app/links/page";
import { PoloErrorMessage, validateEnvVariables } from "@/lib/helpers/env";

// Validate environment variables
const envsValidation = validateEnvVariables();
const envsValid = envsValidation == null ? true : false;

export default function IndexPage() {
  if (!envsValid) {
    return (
      <RuntimeErrorMessages envErrors={envsValidation as PoloErrorMessage[]} />
    );
  } else {
    return <LinkListPage />;
  }
}

export const metadata: Metadata = {
  title: "Dashboard Stats",
};
