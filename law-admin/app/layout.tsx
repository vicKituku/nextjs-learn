"use client";

import { Karla } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <div className="flex min-h-screen">
          <SideBar></SideBar>
          <Header></Header>
          <PageWrapper>{children}</PageWrapper>
        </div>
      </body>
    </html>
  );
}
