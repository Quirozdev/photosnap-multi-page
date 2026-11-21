"use client";

import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/header/header";
import Footer from "@/shared/components/footer/footer";
import { ErrorIcon } from "@/shared/icons/error-icon";
import Button from "@/shared/components/button/button";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="bg-neutral-0 flex min-h-dvh flex-col">
        <Header />
        <main className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4">
            <ErrorIcon
              aria-hidden="true"
              className="size-16 text-neutral-950 md:size-20 xl:size-24"
            />
            <h1 className="text-preset-3 xl:text-preset-2 text-center text-neutral-950">
              Something went terribly wrong
            </h1>
            <Button variant="normal" tone="dark" onClick={retry}>
              Try again
            </Button>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
