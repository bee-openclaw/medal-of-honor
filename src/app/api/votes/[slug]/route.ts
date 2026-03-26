import { getStore } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const store = getStore();
  const count = store.votes[slug] || 0;
  return Response.json({ slug, count });
}
