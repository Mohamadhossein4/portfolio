import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Snowfall from "react-snowfall";

import "@/styles/globals.css";

import { gilroy } from "@/lib/fonts/font";
import Menu from "@/components/Menu";
import Social from "@/components/Social";

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
        <div className="flex flex-col gap-10 fixed top-40 left-6 z-0!">
        <Menu />
        <Social/>
      </div>
        <main>
          <MantineProvider>{children}</MantineProvider>
        </main>
      </body>
    </html>
  );
}
  