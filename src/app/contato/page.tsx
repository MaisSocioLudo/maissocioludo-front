import type { Metadata } from "next";
import {
  PiEnvelopeSimpleBold,
  PiInstagramLogoBold,
  PiPrinterBold,
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
      <div className="mx-auto grid min-h-[calc(100vh-70px)] max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.1fr] lg:px-8">
        <section className="rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-md sm:rounded-[32px] sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-[var(--color-vermelho)]/10 text-[var(--color-vermelho)]">
              <PiEnvelopeSimpleBold size={50} />
            </div>

            <div>
              <h2 className="text-[20px] font-black text-zinc-900">
                Contato
              </h2>
            </div>
          </div>

          {/* <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C02A3A]">
            Fale conosco
          </p> */}



          <p className="mt-5 text-[16px] leading-8 text-zinc-700 sm:text-[17px]">
            Relate problemas técnicos, dúvidas, sugestões e mais. (Ju ou bia avaliem uma mensagem pra cá)
          </p>

          <div className="mt-7 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-amarelo)]/20 text-[#9a6d00]">
                <PiPrinterBold size={22} />
              </div>

              <p className="text-sm leading-7 text-zinc-700">
                Caso tenha interesse nos materiais para impressão do tabuleiro
                físico, entre em contato conosco. (Ju ou bia avaliem uma mensagem pra cá)
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          <div className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[32px] sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-azul)]/10 text-[var(--color-azul)]">
                <PiEnvelopeSimpleBold size={24} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-azul)]">
                  E-mail
                </p>
                <h2 className="text-xl font-black text-zinc-900">
                  Endereços para contato
                </h2>
              </div>
            </div>

            <div className="grid gap-3">
              {emails.map((email) => (
                <a
                  key={email.value}
                  href={`mailto:${email.value}`}
                  className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition "
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

          <div className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[32px] sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C02A3A]/10 text-[#C02A3A]">
                <PiInstagramLogoBold size={24} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C02A3A]">
                  Instagram
                </p>
                <h2 className="text-xl font-black text-zinc-900">
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
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition"
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
        </section>
      </div>
    </main>
  );
}
