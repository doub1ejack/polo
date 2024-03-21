import type { Metadata } from "next";
import {
  EnvVariablesErrorMessage,
  validateEnvVariables,
} from "@/lib/helpers/env";
import ErrorMessages from "@/app/components/helper/page";

// Validate environment variables
const envsValidation = validateEnvVariables();
const envsValid = envsValidation == null ? true : false;

export default function IndexPage() {
  if (!envsValid) {
    return (
      <ErrorMessages envErrors={envsValidation as EnvVariablesErrorMessage[]} />
    );
  } else {
    return <h2>Dashboard coming soon</h2>;
  }
}

export const metadata: Metadata = {
  title: "Dashboard Stats",
};
