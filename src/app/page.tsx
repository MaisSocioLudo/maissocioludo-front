import HomeClient from "./home-client";

export default function Home() {
  const temasSemArquivo: string[] = [];
  return <HomeClient temasSemArquivo={temasSemArquivo} />;
}
