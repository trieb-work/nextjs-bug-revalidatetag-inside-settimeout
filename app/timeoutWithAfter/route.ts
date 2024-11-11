import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse, unstable_after } from "next/server";

export async function GET(req: NextRequest) {
  unstable_after(() => {
    setTimeout(() => {
      revalidatePath("/")
      console.log("revalidated in timeout")
    }, 1000)
  })
  return NextResponse.json({ revalidated: true })
}
