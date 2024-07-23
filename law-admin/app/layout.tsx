"use client";

import { Karla } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";
import { useState } from "react";

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
  const [toggleCollapse, setToggleCollapse] = useState(false);
  return (
    <html lang="en">
      <body className={karla.className}>
        <div className="flex min-h-screen">
          <SideBar toggleCollapse={toggleCollapse}></SideBar>
          <Header
            toggleCollapse={toggleCollapse}
            setToggleCollapse={setToggleCollapse}
          ></Header>
          <PageWrapper toggleCollapse={toggleCollapse}>{children}</PageWrapper>
        </div>
      </body>
    </html>
  );
}
