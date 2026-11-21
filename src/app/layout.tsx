import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/header/header";
import Footer from "@/shared/components/footer/footer";
import { SITE_URL } from "@/core/config/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const author = "Luis Daniel Quiroz Osuna";
const siteName = "Photosnap";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Photosnap",
    default: "Photosnap",
  },
  description:
    "A responsive, multi-page photography website concept featuring visual stories, product features, and pricing plans.",
  applicationName: siteName,
  authors: [
    {
      name: author,
      url: "https://github.com/Quirozdev",
    },
  ],
  creator: author,
  openGraph: {
    type: "website",
    siteName: siteName,
    title: "Photosnap",
    description:
      "Explore Photosnap, a multi-page photography website featuring stories, product features, and pricing plans.",
    url: "/",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 900,
        height: 660,
        alt: "Preview of the Photosnap photography website homepage.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photosnap",
    description:
      "Explore Photosnap, a multi-page photography website featuring stories, product features, and pricing plans.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="bg-neutral-0 flex min-h-dvh flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
