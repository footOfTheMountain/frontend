import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import MobileLayout from "@components/layout/MobileLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foot Of The Mountain",
  description: "등산로 추천 페이지",
  applicationName: "FOTM",
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
