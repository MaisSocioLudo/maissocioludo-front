import { Metadata } from "next";
import LivrosComponent from "./(components)/livros-component";


export const metadata: Metadata = {
  title: "Livros didáticos | +SocioLudo",
};

export default function Livros() {
  return (
    <main className="mx-auto min-h-[calc(100vh-64px)] max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12">
      <LivrosComponent />
    </main>
  );
}
