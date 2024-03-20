"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tab, Tabs } from "@mui/material";

export const Nav = () => {
  const pathname = usePathname();
  const a11yProps = (index: number) => {
    return {
      id: `nav-tab-${index}`,
      "aria-controls": `nav-tabpanel-${index}`,
    };
  };

  return (
    <nav>
      <Tabs value={pathname || false} aria-label="Navigation tabs">
        <Tab
          label="Dashboard"
          value="/"
          component={Link}
          href="/"
          {...a11yProps(0)}
        />
        <Tab
          label="Links"
          value="/links"
          component={Link}
          href="/links"
          {...a11yProps(1)}
        />
      </Tabs>
    </nav>
  );
};
