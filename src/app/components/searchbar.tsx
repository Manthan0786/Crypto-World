"use client";

import { useEffect, useState } from "react";
import Searchbar from "../components/searchbar";

interface CryptoPrice {
  [key: string]: number;
}

function Dashboard() {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice>({});

  useEffect(() => {
    fetchdata();
  }, []);

  function fetchdata() {
    const ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tether,ripple,cardano,dogecoin,solana,polkadot,litecoin,avalanche,polygon,chainlink,stellar,cosmos,filecoin,tron,monero,vechain,tezos,aave,algorand,flow,theta,bitcoincash,hedera,quant",
    );
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setCryptoPrices((prevPrices) => ({
        ...prevPrices,
        ...message,
      }));
    };
  }

  return (
    <div className="w-full max-w-5xl font-mono text-sm">
      <Searchbar cryptoPrices={cryptoPrices} />
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
          {Object.entries(cryptoPrices).map(([key, value]) => (
            <tr key={key}>
              <td className="text-center border border-slate-700">{key}</td>
              <td className="py-3 text-center border border-slate-700">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
