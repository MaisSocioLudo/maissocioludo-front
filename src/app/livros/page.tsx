import { Metadata } from "next";
import LivrosComponent from "./(components)/livros-component";


export const metadata: Metadata = {
  title: "Livros didáticos | +SocioLudo",
};

export default function Livros() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-3xl items-center px-4 py-10 sm:px-6 lg:px-8">
      <LivrosComponent />
    </main>
  );
}
