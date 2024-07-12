import PriceItem from "../components/priceitem";
import { useContext } from "react";
import { PriceContext } from "../components/priceprovider";

export default function CurrencyTable() {
  const prices = useContext(PriceContext);
  return (
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
          <PriceItem
            key={currency}
            currency={currency}
            value={Number(value)}
          />
        ))}
      </tbody>
    </table>
  );
}
