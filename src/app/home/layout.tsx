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
        <div className="w-full h-screen pt-14 text-black bg-slate-200">
            {children}
        </div>
      </PriceProvider>
    </>
  );
}
