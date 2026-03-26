import fs from "fs";
import path from "path";
import { CommunityStore } from "@/lib/types";

const STORE_PATH = path.join(process.cwd(), "data", "community.json");

const DEFAULT_STORE: CommunityStore = { votes: {}, nominations: [] };

export function getStore(): CommunityStore {
  try {
    const data = fs.readFileSync(STORE_PATH, "utf-8");
    return JSON.parse(data) as CommunityStore;
  } catch {
    saveStore(DEFAULT_STORE);
    return DEFAULT_STORE;
  }
}

export function saveStore(store: CommunityStore): void {
  const dir = path.dirname(STORE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2));
}
