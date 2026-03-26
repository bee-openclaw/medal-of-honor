import { NextRequest } from "next/server";
import { getStore, saveStore } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const store = getStore();
  return Response.json(store.votes);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const slug = body?.slug;
  if (!slug || typeof slug !== "string") {
    return Response.json({ error: "slug is required" }, { status: 400 });
  }

  const store = getStore();
  store.votes[slug] = (store.votes[slug] || 0) + 1;
  saveStore(store);

  return Response.json({ slug, count: store.votes[slug] });
}
