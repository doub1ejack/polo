"use client";

import { usePathname } from "next/navigation";
import { Tabs, Tab } from "@mui/material";

export const Nav = () => {
  let rootPath = "/" + usePathname().split("/")[1];
  const a11yProps = (index: number) => {
    return {
      id: `nav-tab-${index}`,
      "aria-controls": `nav-tabpanel-${index}`,
    };
  };

  // TODO: Remove this once we have added authentication
  rootPath = rootPath === "/links" ? "/" : rootPath;

  return (
    <nav className="max-w-lg">
      <Tabs value={rootPath || false} aria-label="Navigation tabs">
        <Tab label="My Short Urls" value="/" href="/" {...a11yProps(0)} />
        <Tab
          label="Dashboard"
          value="/dashboard"
          href="/dashboard"
          {...a11yProps(1)}
        />
      </Tabs>
    </nav>
  );
};
