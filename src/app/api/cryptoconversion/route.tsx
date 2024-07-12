export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get("amount");
  const convert_id = searchParams.get("convert_id");
  const id = searchParams.get("id");
  const response = await fetch(
    `https://api.coinmarketcap.com/data-api/v3/tools/price-conversion?amount=${amount}&convert_id=${convert_id}&id=${id}`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": "f745ad44-994e-4e39-8920-f107b8d5a3c0",
      },
    },
  );
  const data = await response.json()
  return Response.json ({ data });
  
}
