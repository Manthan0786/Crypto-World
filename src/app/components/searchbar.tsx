"use client";

import { ReactHTMLElement, useState, useEffect, useContext } from "react";
import { PriceContext } from "./priceprovider";

export default function Searchbar() {
  const prices = useContext(PriceContext);
  const [searchInput, setSearchInput] = useState<string>("");
  const [results, setResults] = useState<[string, number][]>([]);
  const [showres, setShowRes] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  function fetchsearch() {
    if (searchInput.trim() === "") {
      setResults([]);
      setShowRes(false);
      return;
    }
    if (prices) {
      const res = Object.entries(prices).filter(([k]) =>
        k.startsWith(searchInput),
      );
      setResults(res);
      setShowRes(true);
    }
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function debounce(callback: () => void, delay: number) {
      clearTimeout(timer);
      timer = setTimeout(callback, delay);
    }
    debounce(() => fetchsearch(), 1000);
  }, [searchInput]);

  useEffect(() => {
    if (setSearchInput == null) {
      setResults([]);
    }
  });

  return (
    <>
      <div className="mb-2 relative ">
        <input
          type="search"
          placeholder="search..."
          value={searchInput}
          onChange={handleChange}
          className="p-2 rounded text-black focus:outline-none border shadow-sm border-slate-300 focus:ring-2 focus:ring-sky-500"
        />
        {showres && (
          <div className="bg-slate-100 absolute text-black rounded-b overflow-hidden">
            {results.map(([key, val]) => (
              <p
                key={key}
                className="p-1 w-[11.5rem] border-b-2 hover:bg-slate-400"
              >
                {key} : {val}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
