import { memo } from "react";

interface PriceItemProps {
  currency: string;
  value: number;
}

const PriceItem = memo(({ currency, value }: PriceItemProps) => {
  return (
    <tr>
      <td className="text-center border border-slate-700">{currency}</td>
      <td className="py-3 text-center border border-slate-700">{value}</td>
    </tr>
  );
});

export default PriceItem;
