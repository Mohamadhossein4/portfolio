import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Snowfall from "react-snowfall";

import "@/styles/globals.css";

import { gilroy } from "@/lib/fonts/font";

export const metadata: Metadata = {
  title: "Gholikhah",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  className={`${gilroy.className} scroll-smooth`} lang="en"  {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <main>
          <MantineProvider>{children}</MantineProvider>
        </main>
      </body>
    </html>
  );
}
  