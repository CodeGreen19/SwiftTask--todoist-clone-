import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactQuery } from "@/components/shared/ReactQuery";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import ThemeWrapper from "@/components/shared/ThemeWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const logoFont = localFont({
  src: "./fonts/logo.ttf",
  variable: "--font-logo",
  weight: "100 900",
});
const mainFonot = localFont({
  src: "./fonts/mainFont.ttf",
  variable: "--font-main",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SwiftTask | Organized your task, finally",
  description: "marketing description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: " dark;" }}>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${logoFont.variable} ${mainFonot.variable} font-main antialiased dark:bg-neutral-800`}
      >
        <ReactQuery>
          <SessionProvider>
            <ThemeWrapper>
              <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
            </ThemeWrapper>
            <Toaster
              position="bottom-right"
              className="py-9 shadow-sm"
              theme="light"
            />
          </SessionProvider>
        </ReactQuery>
      </body>
    </html>
  );
}
