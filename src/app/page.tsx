"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  PiBookBold,
  PiCaretLeftBold,
  PiCaretRightBold,
  PiHashBold,
} from "react-icons/pi";

import Banner from "./(components)/banner";
import { temas } from "./temas/temas";
import { Metadata } from "next";

const TEMAS_POR_PAGINA = 6;

export default function Home() {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const totalPaginas = Math.ceil(temas.length / TEMAS_POR_PAGINA);

  const temasPaginados = useMemo(() => {
    const inicio = (paginaAtual - 1) * TEMAS_POR_PAGINA;
    const fim = inicio + TEMAS_POR_PAGINA;

    return temas.slice(inicio, fim);
  }, [paginaAtual]);

  const paginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);

  function irParaPagina(pagina: number) {
    if (pagina < 1 || pagina > totalPaginas) return;
    setPaginaAtual(pagina);
  }

  function paginaAnterior() {
    if (paginaAtual > 1) {
      setPaginaAtual((prev) => prev - 1);
    }
  }

  function proximaPagina() {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual((prev) => prev + 1);
    }
  }

  return (
    <main className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12 lg:py-10">
        <div className="mb-12">
          <Banner />
        </div>

        <div id="sobre" className="flex flex-col gap-10">
          <section
            id="socioludo"
            className="scroll-mt-24 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-md md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C02A3A]/10 text-[#C02A3A]">
                <PiHashBold className="text-[24px]" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C02A3A]">
                  Apresentação
                </p>
                <h1 className="text-2xl font-black text-zinc-900 md:text-3xl">
                  <a href="#socioludo">O que é o SocioLudo</a>
                </h1>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-4 text-[16px] leading-8 text-zinc-700 md:text-[17px]">
                <p>
                  O <strong>SocioLudo Digital</strong> é um serious game criado
                  para tornar o ensino de Sociologia mais dinâmico, acessível e
                  interessante, buscando se afastar do modelo tradicional de
                  ensino.
                </p>

                <p>
                  O projeto surgiu a partir da desvalorização da disciplina após
                  a contrarreforma do Ensino Médio e tem como objetivo
                  reaproximar os estudantes da Sociologia por meio de uma
                  aprendizagem mais interativa e lúdica.
                </p>

                <p>
                  No jogo, o estudante aprende a partir da própria experiência:
                  quando erra uma pergunta, recebe uma explicação sobre o tema,
                  transformando o erro em oportunidade de aprendizado. O
                  SocioLudo também utiliza a competitividade de forma positiva,
                  incentivando os alunos a se engajarem mais no conteúdo.
                </p>

                <p>
                  Inicialmente criado em versão de tabuleiro, o jogo foi
                  adaptado para o formato digital para reduzir custos e ampliar
                  o acesso, especialmente em escolas públicas. A versão digital
                  é gratuita, funciona sem internet e atualmente conta com
                  <strong> 348 questões</strong>, organizadas por temas e níveis
                  de dificuldade.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-3xl font-black text-[#C02A3A]">348</p>
                  <p className="mt-1 text-sm font-medium text-zinc-600">
                    questões disponíveis
                  </p>
                </div>

                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-3xl font-black text-[var(--color-azul)]">
                    18
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-600">
                    temas trabalhados
                  </p>
                </div>

                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-3xl font-black text-[var(--color-verde)]">
                    Offline
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-600">
                    acesso gratuito e sem internet
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="temas"
            className="scroll-mt-24 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-md md:p-8"
          >
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C02A3A]/10 text-[#C02A3A]">
                    <PiBookBold className="text-[24px]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C02A3A]">
                      Conteúdo
                    </p>
                    <h1 className="text-2xl font-black text-zinc-900 md:text-3xl">
                      <a href="#temas">Temas abordados</a>
                    </h1>
                  </div>
                </div>

                <p className="max-w-2xl text-[16px] leading-7 text-zinc-600 md:text-[17px]">
                  Explore os <strong>{temas.length} temas</strong> disponíveis
                  no SocioLudo, organizados para apoiar o aprendizado de forma
                  dinâmica, visual e interativa.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-600">
                Página {paginaAtual} de {totalPaginas}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {temasPaginados.map((tema) => (

                <div key={`${tema.id}`} className="group">
                  <div className="overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[750/1039] w-full bg-zinc-100">
                      <Link href={"/estudos/" + (tema.id)}>
                        <Image
                          src={"/imagens/cartas/" + tema.id + ".jpg"}
                          alt={tema.id}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-110 hover:cursor-pointer"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 140px"
                          priority={paginaAtual === 1}
                        />
                      </Link>

                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </div>
                  </div>

                  <p className="mt-3 text-center text-sm font-bold leading-5 text-zinc-800">
                    {tema.nome}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={paginaAnterior}
                disabled={paginaAtual === 1}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                aria-label="Página anterior"
              >
                <PiCaretLeftBold size={18} />
              </button>

              {paginas.map((pagina) => {
                const ativa = pagina === paginaAtual;

                return (
                  <button
                    key={pagina}
                    type="button"
                    onClick={() => irParaPagina(pagina)}
                    aria-current={ativa ? "page" : undefined}
                    className={
                      ativa
                        ? "h-11 min-w-[44px] rounded-2xl bg-[#C02A3A] px-4 font-bold text-white shadow-md"
                        : "h-11 min-w-[44px] rounded-2xl border border-zinc-200 bg-white px-4 font-bold text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-100"
                    }
                  >
                    {pagina}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={proximaPagina}
                disabled={paginaAtual === totalPaginas}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                aria-label="Próxima página"
              >
                <PiCaretRightBold size={18} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}