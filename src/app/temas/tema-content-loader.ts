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

  let content: TemaContent;

  try {
    const file = await readFile(filePath, "utf-8");
    content = JSON.parse(file) as TemaContent;
  } catch (error) {
    // Se o arquivo não for encontrado, carrega o 'vazio.json'
    const fallbackFilePath = path.join(
      process.cwd(),
      "src",
      "content",
      "temas",
      "vazio.json"
    );
    const fallbackFile = await readFile(fallbackFilePath, "utf-8");
    content = JSON.parse(fallbackFile) as TemaContent;
  }

  return {
    ...content,
    menu: buildMenuFromContent(content),
  };
}