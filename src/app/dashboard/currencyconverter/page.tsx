"use client";

import { useState } from "react";

export default function CurrencyConverter() {
  const rotateCSS = {
    transform: 'rotate(360deg)',
    transition: 'transform 1s ease'
  }

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState<Number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [showConvertedAmount, setShowConvertedAmount] = useState<boolean>(false);
  const [rotate, setRotate] = useState(false)

  const handleFromCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = async () => {
    if (!fromCurrency || !toCurrency || !amount) {
      alert("Please fill in all fields.");
      return;
    }
    setRotate(!rotate)
    async function fetchdata() {
      const res = await fetch(
        `/api/cryptoconversion?amount=1&convert_id=${toCurrency}&id=${fromCurrency}`,
      );
      const result = await res.json();
      const number = result.data.data.quote[0].price;
      setConvertedAmount(number.toFixed(2))
      if(convertedAmount !== null) {
        setShowConvertedAmount(true)
      }
    }
    fetchdata();
  };

  return (
    <>
      <div className="flex justify-center items-center size-full rounded-md h-[80vh] text-slate-950 bg-transparent">
        <div className="flex flex-col justify-center items-center bg-slate-200 space-y-4 gap-4 rounded-lg border-2 w-[50%] h-[80%]">
          <select
            name="crypto_select"
            value={fromCurrency}
            onChange={handleFromCurrency}
            className="w-56 text-black shadow-xl shadow-lg shadow-black-500/50 bg-white px-3 py-2 outline-none hover:ring-4 hover:ring-blue-300 rounded"
          >
            {data.map((k) => (
              <option key={k.id} value={k.id}>
                {k.name}
              </option>
            ))}
          </select>
          <div style={rotate ? rotateCSS : {}} className="w-[60px] h-[60px] bg-neutral-300 rounded-full flex justify-center items-center gap-1">
            <div className="text-xl">&#x2191;</div>
            <div className="text-xl">&#x2193;</div>
          </div>
          <select
            name="crypto_select"
            value={toCurrency}
            onChange={handleToCurrency}
            className="w-56 text-black shadow-xl shadow-lg shadow-black-500/50 bg-white px-3 py-2 outline-none hover:ring-4 hover:ring-blue-300 rounded"
          >
            {data.map((k) => (
              <option key={k.id} value={k.id}>
                {k.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleConvert}
            className="bg-white p-2 rounded outline-offset-2 outline-4 hover:bg-slate-300"
          >
            Convert
          </button>
          <div>
            {showConvertedAmount && (
              <p className="text-red-500">{convertedAmount}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    category: "coin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  },
  { id: 1027, name: "Ethereum", symbol: "ETH", category: "coin" },
  {
    id: 2010,
    name: "Cardano",
    symbol: "ADA",
    category: "coin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
  },
  {
    id: 1839,
    name: "BNB",
    symbol: "BNB",
    category: "coin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  },
  {
    id: 74,
    name: "Dogecoin",
    symbol: "DOGE",
    category: "coin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
  },
  {
    id: 5994,
    name: "Shiba Inu",
    symbol: "SHIB",
    category: "token",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
  },
  {
    id: 5426,
    name: "Solana",
    symbol: "SOL",
    category: "coin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    id: 3408,
    name: "USDC",
    symbol: "USDC",
    category: "token",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
  },
  {
    id: 825,
    name: "Tether USDt",
    symbol: "USDT",
    category: "token",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
  },
  {
    id: 52,
    name: "XRP",
    symbol: "XRP",
    category: "coin",
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
  },
];
