import { access } from "fs/promises";
import path from "path";

import HomeClient from "./home-client";
import { temas } from "./temas/temas";

function getTemaFilePath(id: string) {
  const safeId = id.replace(/[^a-z0-9_-]/gi, "");

  return path.join(
    process.cwd(),
    "src",
    "content",
    "temas",
    `${safeId}.json`
  );
}

async function temaTemArquivo(id: string) {
  try {
    await access(getTemaFilePath(id));
    return true;
  } catch {
    return false;
  }
}

export default async function Home() {
  const temasSemArquivo = (
    await Promise.all(
      temas.map(async (tema) => ({
        id: tema.id,
        temArquivo: await temaTemArquivo(tema.id),
      }))
    )
  )
    .filter((tema) => !tema.temArquivo)
    .map((tema) => tema.id);

  return <HomeClient temasSemArquivo={temasSemArquivo} />;
}
