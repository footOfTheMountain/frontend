import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import MobileLayout from "@components/layout/MobileLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOTM",
  description: "등산로 추천 페이지",
  applicationName: "Foot Of The Mountain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MobileLayout children={children} />
      </body>
    </html>
  );
}
