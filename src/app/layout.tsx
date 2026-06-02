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
  title: "Gholikhah | Frontend Developer",
  description: "My name is Mohamad Hossein Gholikhah, I am a Frontend Developer with a passion for creating,  beautiful and functional web applications.",
  keywords: [
    "Mohammad Hossein Gholikhah",
    "Mohammad Gholikhah",
    "Mohammad H Gholikhah",
    "M H Gholikhah",
    "محمد حسین قلی خواه",
    "محمدحسین قلی خواه",
    " محمدحسین قلی خواه مهویزانی",
    "محمد",
    "محمد حسین",
    "محمد",
    "مهویزانی",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Portfolio"
  ]
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammad Hossein Gholikhah",
  alternateName: [
    "محمد حسین قلی خواه",
    "محمدحسین قلی خواه",
    "Mohammad Gholikhah"
  ],
  jobTitle: "Frontend Developer",
  url: "https://your-domain.com"
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
      <body className="bg-primary">
        <SnowWall />
        <div className="flex flex-row lg:flex-col gap-10 fixed bottom-2 left-1/2 -translate-x-1/2 lg:top-40 lg:left-6 lg:translate-x-0 z-20">
          <Menu />
          <div className="hidden lg:block">
            <Social />
          </div>
        </div>

        <main>
          <MantineProvider>{children}</MantineProvider>
        </main>
        <div className="sr-only">
          Mohammad Hossein Gholikhah
          Mohammad Gholikhah
          Mohamad Gholikhah
          محمد حسین قلی خواه
          محمد
          حسین
          محمد حسین
          قلی خواه
          مهویزانی
          محمد حسین قلی خواه
          محمد حسین قلی خواه مهویزانی
          Personal portfolio of Mohammad Hossein Gholikhah.
          frontend Developer specialized in Next.js, React, TypeScript and modern web technologies.
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </body>
    </html>
  );
}
