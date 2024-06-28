import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/app/globals.css";

import Providers from "@/app/providers";

const inter = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebRTC",
  description: "Your Virtual Meeting Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-dvh flex flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
