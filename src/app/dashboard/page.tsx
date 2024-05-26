'use client'
import { useContext } from "react";
import { PriceContext } from "../components/priceprovider";
import Searchbar from "../components/searchbar";
import PriceItem from "../components/priceitem";

function Dashboard() {
  const prices = useContext(PriceContext)

  return (
      <div className="w-full max-w-5xl font-mono text-sm">
        <Searchbar />
        <table className="w-full border-collapse border border-slate-500">
          <thead className="bg-slate-700">
            <tr>
              <th scope="col" className="p-4 border border-slate-600">
                Currency
              </th>
              <th scope="col" className="border border-slate-600">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(prices).map(([currency, value]) => (
              <PriceItem key={currency} currency={currency} value={parseFloat(value)} />
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default Dashboard;
