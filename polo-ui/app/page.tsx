import type { Metadata } from "next";
import ErrorMessages from "@/app/_components/helper/RuntimeErrors";
import LinkListPage from "@/app/links/page";
import {
  EnvVariablesErrorMessage,
  validateEnvVariables,
} from "@/lib/helpers/env";

// Validate environment variables
const envsValidation = validateEnvVariables();
const envsValid = envsValidation == null ? true : false;

export default function IndexPage() {
  if (!envsValid) {
    return (
      <ErrorMessages envErrors={envsValidation as EnvVariablesErrorMessage[]} />
    );
  } else {
    return <LinkListPage />;
  }
}

export const metadata: Metadata = {
  title: "Dashboard Stats",
};
