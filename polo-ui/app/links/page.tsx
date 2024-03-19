import { Links } from "../components/links/Links";
import Link from "next/link";

const LinkList = () => {
  return (
    <>
      <div>
        <h1>My Links</h1>
        <Link href="/">Dashboard</Link>
      </div>

      <div>
        <Links />
      </div>
    </>
  );
};

export default LinkList;
