"use client";

import type { ReactNode } from "react";
import { StoreProvider } from "../lib/StoreProvider";
import Grid from "@mui/material/Unstable_Grid2"; // Grid v2 adapts to screen size and orientation
import { Nav } from "./components/Nav";
import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Grid container spacing={2}>
            <Grid
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Nav />
            </Grid>
            <Grid
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <main>{children}</main>
            </Grid>
          </Grid>
        </body>
      </html>
    </StoreProvider>
  );
}
