// Until we have a login page, this will be the home page

import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/links/LinkListPage">My Links</Link>
    </div>
  );
};

export default Dashboard;
