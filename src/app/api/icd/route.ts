import {getDb} from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb() as {all:(v:string) => unknown}
    const data = await db.all('SELECT * FROM your_table')
    return Response.json({ data })
  } catch (error:unknown) {
    return Response.json({ error: (error as {message:string}).message }, { status: 500 })
  }
}
