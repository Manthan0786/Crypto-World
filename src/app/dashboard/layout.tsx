import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import PriceProvider from "../components/priceprovider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PriceProvider>
        <div className="flex text-sm/[20px] md:text-base pt-14">
          <Sidebar />
          <div className="ml-44 lg:ml-64 flex min-h-screen flex-col items-center justify-between p-12 w-full">
            <div className="w-full max-w-5xl font-mono text-sm lg:flex">
              {children}
            </div>
          </div>
        </div>
      </PriceProvider>
    </>
  );
}
