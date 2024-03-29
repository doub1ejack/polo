"use client";

import type { ReactNode } from "react";
import { StoreProvider } from "../lib/StoreProvider";
import Grid from "@mui/material/Unstable_Grid2"; // Grid v2 adapts to screen size and orientation
import { Nav } from "./_components/navigation/Nav";
import "@/lib/styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Grid container spacing={2}>
            {/* Navigation (centered) */}
            <Grid xs={12} display="flex" justifyContent="center">
              <Nav />
            </Grid>

            {/* Main Content (narrow) */}
            <Grid xs={12} display="flex" justifyContent="center">
              <main className="max-w-lg">{children}</main>
            </Grid>
          </Grid>
        </body>
      </html>
    </StoreProvider>
  );
}
