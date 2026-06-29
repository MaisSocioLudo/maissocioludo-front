import type { Metadata } from "next";
import {
  PiEnvelopeSimpleBold,
  PiInstagramLogoBold,
  PiPrinterBold,
  PiQuestionBold,
  PiUserCircleBold,
} from "react-icons/pi";

export const metadata: Metadata = {
  title: "Contato | +SocioLudo",
};

const emails = [
  {
    label: "Projeto +SocioLudo",
    value: "maissocioludo@gmail.com",
  },
  {
    label: "Prof. Ricardo Costa",
    value: "ricardo.costa@ifrj.edu.br",
  },
  {
    label: "Prof. Fernando Oliveira",
    value: "fernando.oliveira@ifrj.edu.br",
  },
];

const instagrams = [
  {
    label: "Ricardo Costa",
    value: "ricardocesarrochacosta",
  },
  {
    label: "Fernando Oliveira",
    value: "prof.fernandodeoliveira",
  },
];

export default function Contato() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto min-h-[calc(100vh-70px)] max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12">
        <section className="scroll-mt-24 rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-6 md:rounded-[32px] md:p-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-vermelho)]/10 text-[var(--color-vermelho)] sm:h-12 sm:w-12">
                  <PiEnvelopeSimpleBold className="text-[22px] sm:text-[24px]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-vermelho)] sm:text-sm sm:tracking-[0.18em]">
                    Fale conosco
                  </p>
                  <h1 className="text-xl font-black leading-tight text-zinc-900 sm:text-2xl md:text-3xl">
                    Contato
                  </h1>
                </div>
              </div>

              <p className="max-w-2xl text-[15px] leading-7 text-zinc-600 sm:text-[16px] md:text-[17px]">
                Relate problemas técnicos, dúvidas, sugestões ou solicite
                materiais do SocioLudo.
              </p>
            </div>

          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[20px] border border-zinc-200 bg-zinc-50 p-5 sm:rounded-[24px] sm:p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-vermelho)]/10 text-[var(--color-vermelho)]">
                    <PiQuestionBold size={24} />
                  </div>

                  <h2 className="text-lg font-black leading-tight text-zinc-900 sm:text-xl">
                    Dúvidas e sugestões
                  </h2>
                </div>
                <p className="mt-2 text-[15px] leading-7 text-zinc-700">
                  Use os contatos para falar sobre o jogo, relatar problemas
                  técnicos ou enviar ideias para o projeto.
                </p>
              </div>

              <div className="rounded-[20px] border border-zinc-200 bg-zinc-50 p-5 sm:rounded-[24px] sm:p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-amarelo)]/20 text-[#9a6d00]">
                    <PiPrinterBold size={24} />
                  </div>

                  <h2 className="text-lg font-black leading-tight text-zinc-900 sm:text-xl">
                    Materiais para impressão
                  </h2>
                </div>
                <p className="mt-2 text-[15px] leading-7 text-zinc-700">
                  Caso tenha interesse nos materiais para impressão do tabuleiro
                  físico, entre em contato conosco.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[20px] border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[24px] sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-azul)]/10 text-[var(--color-azul)]">
                    <PiEnvelopeSimpleBold size={24} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-azul)]">
                      E-mail
                    </p>
                    <h2 className="text-lg font-black leading-tight text-zinc-900 sm:text-xl">
                      Endereços para contato
                    </h2>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {emails.map((email) => (
                    <a
                      key={email.value}
                      href={`mailto:${email.value}`}
                      className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                    >
                      <span className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                        <PiUserCircleBold
                          className="text-[var(--color-azul)]"
                          size={19}
                        />
                        {email.label}
                      </span>
                      <span className="mt-1 block break-words text-sm text-zinc-600 group-hover:text-[var(--color-azul)]">
                        {email.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[24px] sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C02A3A]/10 text-[#C02A3A]">
                    <PiInstagramLogoBold size={24} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C02A3A]">
                      Instagram
                    </p>
                    <h2 className="text-lg font-black leading-tight text-zinc-900 sm:text-xl">
                      Professores orientadores
                    </h2>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {instagrams.map((instagram) => (
                    <a
                      key={instagram.value}
                      href={`https://www.instagram.com/${instagram.value}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                    >
                      <span className="text-sm font-bold text-zinc-900">
                        {instagram.label}
                      </span>
                      <span className="mt-1 block break-words text-sm text-zinc-600">
                        @{instagram.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
