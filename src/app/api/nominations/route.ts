import { NextRequest } from "next/server";
import { getStore, saveStore } from "@/lib/store";
import { Nomination, CategoryId } from "@/lib/types";
import crypto from "crypto";

export const dynamic = "force-dynamic";

const VALID_CATEGORIES: CategoryId[] = [
  "tech",
  "science",
  "arts",
  "civil-rights",
  "medicine",
  "exploration",
];

export async function GET(request: NextRequest) {
  const status = request.nextUrl.searchParams.get("status");
  const store = getStore();
  let nominations = store.nominations;
  if (status) {
    nominations = nominations.filter((n) => n.status === status);
  }
  return Response.json(nominations);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, category, reason, submittedBy } = body;

  if (!name || !category || !reason || !submittedBy) {
    return Response.json(
      { error: "name, category, reason, and submittedBy are required" },
      { status: 400 }
    );
  }

  if (!VALID_CATEGORIES.includes(category)) {
    return Response.json({ error: "Invalid category" }, { status: 400 });
  }

  const nomination: Nomination = {
    id: crypto.randomUUID(),
    name,
    category,
    reason,
    submittedBy,
    submittedAt: new Date().toISOString(),
    status: "pending",
  };

  const store = getStore();
  store.nominations.push(nomination);
  saveStore(store);

  return Response.json(nomination, { status: 201 });
}
