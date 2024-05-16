import data from "../data/crypto.json";

function Dashboard() {
  return (
    <div className="w-full max-w-5xl font-mono text-sm lg:flex">
      <table className="w-full border-collapse border border-slate-500">
        <thead className="bg-slate-700">
          <tr>
            <th scope="col" className="p-4 border border-slate-600">Currency</th>
            <th scope="col" className="border border-slate-600">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td className="p-4 text-center border border-slate-700">{d.name}</td>
              <td className="p-4 text-center border border-slate-700">{d.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
