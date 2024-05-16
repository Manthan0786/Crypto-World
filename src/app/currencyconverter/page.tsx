export default function CurrencyConverter() {
  return (
    <>
      <div className="flex justify-center items-center size-full rounded-md h-[80vh] text-slate-950">
        <div className="flex flex-col justify-center items-center px-8 space-y-4 gap-4 rounded-lg border-2 w-[40%] h-[80%] bg-stone-700">
          <input
            type="text"
            className="w-full h-[40px] bg-white rounded-md placeholder-slate-400 border-2 border-indigo-500"
          />
          <div className="w-[40px] h-[40px] bg-neutral-300 rounded-full">
            <div>&#x2191;</div>
          </div>
          <input
            type="text"
            value="1"
            className="w-full h-[40px] bg-white rounded-md placeholder-slate-400 border-2 border-indigo-500"
          />
          <button className="bg-white p-2 rounded outline-offset-2 outline-4 hover:bg-slate-300">Convert</button>
        </div>
      </div>
    </>
  );
}
