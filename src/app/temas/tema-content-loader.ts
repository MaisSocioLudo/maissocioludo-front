// src/data/tema-content-loader.ts
import { readFile } from "fs/promises";
import path from "path";
import type { TemaContent } from "@/types/tema-content";

export async function getTemaContent(id: string): Promise<TemaContent> {
  const safeId = id.replace(/[^a-z0-9_-]/gi, "");

  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "temas",
    `${safeId}.json`
  );

  const file = await readFile(filePath, "utf-8");
  return JSON.parse(file) as TemaContent;
}