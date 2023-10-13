import BackLayout from "@/components/Back";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MORE Tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className,
          "bg-gradient-to-r from-[#00092A] from-23.91%  to-[#011971] to-94.62% min-h-screen min-w-full")
        }
      >
        <BackLayout>
          <Header />
          {children}
        </BackLayout>
      </body>
    </html>
  );
}
