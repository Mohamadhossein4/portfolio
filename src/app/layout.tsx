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
import SnowWall from "@/components/Section/SnowWall";

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
    <html
      className={`${gilroy.className} scroll-smooth`}
      lang="en"
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <SnowWall />
        <div className="flex flex-row lg:flex-col gap-10 fixed bottom-2 left-1/2 -translate-x-1/2 lg:top-40 lg:left-6 lg:translate-x-0 z-20">
          <Menu />
          <div className="hidden lg:block">
          <Social/>
          </div>
        </div>

        <main>
          <MantineProvider>{children}</MantineProvider>
        </main>
      </body>
    </html>
  );
}
