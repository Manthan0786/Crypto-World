import { NextApiRequest } from "next"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res = await fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`, {
        method: 'GET',
    })
    const data = await res.json()
    return Response.json({ data: data })
}