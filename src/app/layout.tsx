import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";


import "@/styles/globals.css";

import { morabba } from "@/lib/fonts/font";

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
    <html  className={`${morabba.className} scroll-smooth`} lang="fa" dir="rtl" {...mantineHtmlProps}>
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
  