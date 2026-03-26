import { getStore } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const store = getStore();
  const nomination = store.nominations.find((n) => n.id === id);
  if (!nomination) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }
  return Response.json(nomination);
}
