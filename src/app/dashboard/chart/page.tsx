"use client";

import * as d3 from "d3";
import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Loading from './loading'
import styles from "./page.module.css";
import PriceProvider, { PriceContext } from "../../components/priceprovider";
import LineChart from "../../components/linechart";

interface DataList {
  priceUsd: string;
  time: number;
  date: string;
}

const currnames = [
  "bitcoin",
  "ethereum",
  "tether",
  "ripple",
  "cardano",
  "dogecoin",
  "solana",
  "polkadot",
  "litecoin",
  "avalanche",
  "polygon",
  "chainlink",
  "stellar",
  "cosmos",
  "filecoin",
  "tron",
  "monero",
  "vechain",
  "tezos",
  "aave",
  "algorand",
  "flow",
  "theta",
  "bitcoincash",
  "hedera",
  "quant",
];

export default function Chart() {
  const [fetchedData, setFetchedData] = useState<DataList[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCrypto(e.target.value);
  };

  useEffect(() => {
    async function fetchdata(selectedCrypto: string) {
      const response = await fetch(`/api/cryptohistory/?id=${selectedCrypto}`);
      const result = await response.json();
      setFetchedData(result.data.data);
    }
    fetchdata(selectedCrypto);
  }, [selectedCrypto]);

  return (
    <>
      <div className="flex flex-col gap-y-8 bg-white-300">
        <div>
          <label htmlFor="crypto-select">Select Crypto: </label>
          <select
            name="crypto"
            value={selectedCrypto}
            onChange={handleChange}
            className="w-56 text-black bg-white px-3 py-2 shadow-sm outline-none hover:ring-4 hover:ring-blue-300 rounded"
          >
            <option value="">-Please choose an option-</option>
            {currnames.map((k) => (
              <option value={k}>{k}</option>
            ))}
          </select>
        </div>
        <Suspense fallback={<Loading />}>
          <LineChart data={fetchedData} />
        </Suspense>
      </div>
    </>
  );
}


