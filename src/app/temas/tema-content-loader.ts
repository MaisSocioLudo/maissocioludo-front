// src/data/tema-content-loader.ts
import { readFile } from "fs/promises";
import path from "path";
import type { TemaContent } from "@/types/tema-content";

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function buildMenuFromContent(content: TemaContent) {
  const menu: { id: string; label: string }[] = [];

  for (const section of content.sections) {
    for (const block of section.blocks) {
      if (block.type === "heading" && block.id) {
        menu.push({
          id: block.id,
          label: stripHtml(block.content),
        });
      }
    }
  }

  for (const section of content.sections) {
    if (
      section.id &&
      ["indicacoes", "referencias"].includes(section.id)
    ) {
      menu.push({
        id: section.id,
        label: section.title,
      });
    }
  }

  return menu;
}

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
  const content = JSON.parse(file) as TemaContent;

  return {
    ...content,
    menu: buildMenuFromContent(content),
  };
}