"use client";

import { createContext, useState, useEffect } from "react";

interface CryptoPrice {
  [key: string]: number;
}

export const PriceContext = createContext<CryptoPrice>({});

export default function PriceProvider({ children }: any) {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice>({});

  useEffect(() => {
    const ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tether,ripple,cardano,dogecoin,solana,polkadot,litecoin,avalanche,polygon,chainlink,stellar,cosmos,filecoin,tron,monero,vechain,tezos,aave,algorand,flow,theta,bitcoincash,hedera,quant",
    );
    ws.onopen = () => {
      console.log("WebSocket connection established");
    };
    ws.onmessage = (event) => {
        const message = JSON.parse(event.data) as CryptoPrice;
        setCryptoPrices((prevPrices) => {
          const updatedPrices = { ...prevPrices };
          let hasChanges = false;

          Object.entries(message).forEach(([key, value]) => {
            if (updatedPrices[key] !== value) {
              updatedPrices[key] = value;
              hasChanges = true;
            }
          });
  
          return hasChanges ? updatedPrices : prevPrices;
        });
    }
  }, []);

  return (
    <PriceContext.Provider value={cryptoPrices}>
      {children}
    </PriceContext.Provider>
  );
}
