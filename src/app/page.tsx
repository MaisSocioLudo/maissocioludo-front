import Image from "next/image";
import { PiBookBold, PiCaretLeftBold, PiCaretRightBold, PiHashBold } from "react-icons/pi";
import { Metadata } from "next";
import Banner from "./(components)/banner";

export const metadata: Metadata = {
  title: "+SocioLudo - Página inicial",
};

const cartas = [
  {
    src: "/imagens/cartas/Carta.jpg",
    alt: "Carta temática Gênero e dominação masculina",
    titulo: "Gênero e dominação masculina",
  },
  {
    src: "/imagens/cartas/Carta7.jpg",
    alt: "Carta temática Gênero e diversidade sexual",
    titulo: "Gênero e diversidade sexual",
  },
  {
    src: "/imagens/cartas/Carta13.jpg",
    alt: "Carta temática Trabalho",
    titulo: "Trabalho",
  },
  {
    src: "/imagens/cartas/Carta19.jpg",
    alt: "Carta temática Racismo",
    titulo: "Racismo",
  },
  {
    src: "/imagens/cartas/Carta31.jpg",
    alt: "Carta temática Durkheim",
    titulo: "Karl Marx",
  },
  {
    src: "/imagens/cartas/Carta37.jpg",
    alt: "Carta temática Karl Marx",
    titulo: "Max Weber",
  },
];

export default function Home() {
  return (
    <>
    <div className="px-4 md:px-8 lg:px-12 py-8">
      <div className="mb-10">
        <Banner />
      </div>
      
      <div id="sobre" className="flex flex-col gap-12">
        <section id="socioludo" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-4">
            <PiHashBold className="text-[30px] text-[#C02A3A]" />
            <h1 className="font-bold text-[30px]">
              <a href="#socioludo">O que é o SocioLudo</a>
            </h1>
          </div>

          <div className="space-y-4 text-[17px] leading-8 text-zinc-700">
            <p>
              O SocioLudo Digital é um serious game criado para tornar o ensino
              de Sociologia mais dinâmico e acessível, buscando se afastar do
              modelo tradicional de ensino.
            </p>

            <p>
              O projeto surgiu a partir da desvalorização da disciplina após a
              contrarreforma do Ensino Médio e tem como objetivo reaproximar os
              estudantes da Sociologia por meio de uma aprendizagem mais
              interativa e lúdica.
            </p>

            <p>
              No jogo, o estudante aprende a partir da própria experiência:
              quando erra uma pergunta, recebe uma explicação sobre o tema,
              transformando o erro em oportunidade de aprendizado. O SocioLudo
              também utiliza a competitividade de forma positiva, incentivando
              os alunos a se engajarem mais no conteúdo.
            </p>

            <p>
              Inicialmente criado em versão de tabuleiro, o jogo foi adaptado
              para o formato digital para reduzir custos e ampliar o acesso,
              especialmente em escolas públicas. A versão digital é gratuita,
              funciona sem internet e atualmente conta com 348 questões,
              organizadas por temas e níveis de dificuldade, permitindo que
              professores adaptem o jogo aos conteúdos trabalhados em sala de
              aula.
            </p>
          </div>
        </section>

        <section id="temas" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-4">
            <PiBookBold className="text-[30px] text-[#C02A3A]" />
            <h1 className="font-bold text-[30px]">
              <a href="#temas">Temas abordados</a>
            </h1>
          </div>

          <p className="text-[17px] leading-8 text-zinc-700 mb-6">
            Explore os <b>18 temas</b> disponíveis no SocioLudo, organizados para apoiar o aprendizado de forma dinâmica e interativa.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {cartas.map((carta) => (
              <div
                key={carta.src}
                className="mx-auto w-full max-w-[140px] group"
              >
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition">
                  <div className="relative w-full aspect-[750/1039] bg-zinc-100">
                    <Image
                      src={carta.src}
                      alt={carta.alt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-125"
                      sizes="140px"
                      priority={carta.src === "/imagens/cartas/Carta.jpg"}
                    />
                  </div>
                </div>

                <p className="mt-1 text-center text-sm font-medium leading-5 text-zinc-700">
                  {carta.titulo}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition hover:bg-zinc-100"
              aria-label="Página anterior"
            >
              <PiCaretLeftBold size={18} />
            </button>

            <button className="h-10 min-w-[40px] rounded-xl bg-[#C02A3A] px-4 font-semibold text-white shadow-sm">
              1
            </button>

            <button className="h-10 min-w-[40px] rounded-xl border border-zinc-200 bg-white px-4 font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-100">
              2
            </button>

            <button className="h-10 min-w-[40px] rounded-xl border border-zinc-200 bg-white px-4 font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-100">
              3
            </button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition hover:bg-zinc-100"
              aria-label="Próxima página"
            >
              <PiCaretRightBold size={18} />
            </button>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}