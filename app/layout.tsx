import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import Sidebar from "@/components/Sidebar";
import MarginWidthWrapper from "@/components/WidthWrapper";
import PageWrapper from "@/components/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRUD App",
  description: "Code By Andre Gamaliel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
