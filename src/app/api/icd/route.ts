import { getInitialBlocks} from "@/lib/db";

export async function GET() {
  try {
    const db = getInitialBlocks()
    return Response.json({ db })
  } catch (error:unknown) {
    return Response.json({ error: (error as {message:string}).message }, { status: 500 })
  }
}
