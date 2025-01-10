import {getDb} from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb()
    const data = await db.all('SELECT * FROM your_table')
    return Response.json({ data })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
