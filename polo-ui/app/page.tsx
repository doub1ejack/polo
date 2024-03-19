import type { Metadata } from "next";
import { Links } from "./components/links/Links";

export default function IndexPage() {
  return <Links />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
