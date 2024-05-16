import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex text-sm/[20px] md:text-base">
          <Sidebar />
          <div className="flex min-h-screen flex-col items-center justify-between p-12 w-full">
            <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
