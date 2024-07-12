'use client'

import CurrencyTable from "../components/currencytable";
import Searchbar from "../components/searchbar";

function Dashboard() {
  

  return (
      <div className="w-full max-w-5xl font-mono text-sm">
        <Searchbar />
        <CurrencyTable />
      </div>
  );
}

export default Dashboard;
