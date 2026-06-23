import Image from "next/image";
import Link from "next/link";
import {
  PiArrowRightBold,
  PiQuestionFill,
  PiBookOpenTextFill,
  PiDownloadFill,
} from "react-icons/pi";

const items = [
  {
    title: "Estudar temas",
    description: "Explore os conteúdos presentes no SocioLudo.",
    href: "#temas",
    icon: PiBookOpenTextFill,
    bg: "bg-[var(--color-verde)]",
  },
  {
    title: "O que é o SocioLudo",
    description: "Entenda a proposta e o objetivo do projeto.",
    href: "#socioludo",
    icon: PiQuestionFill,
    bg: "bg-[var(--color-azul)]",
  },
  {
    title: "Baixar o SocioLudo",
    description: "Faça o download da versão digital gratuitamente.",
    href: "/download",
    icon: PiDownloadFill,
    bg: "bg-[var(--color-amarelo)]",
  },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden rounded-[24px] px-0 py-3 sm:rounded-[32px] sm:px-4 sm:py-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,560px)] lg:gap-10">
          <div className="min-w-0 max-w-2xl">
            <div className="inline-flex max-w-full items-center rounded-full border border-zinc-200 bg-white/80 px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur sm:px-4 sm:text-sm">
              Plataforma educativa de Sociologia
            </div>

            <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-[var(--color-cinza)] sm:mt-5 sm:text-5xl lg:text-5xl">
              +SocioLudo
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:mt-5 sm:text-lg">
              Um espaço dedicado ao jogo de tabuleiro SocioLudo e ao SocioLudo
              Digital, tornando o aprendizado de Sociologia mais acessível,
              dinâmico e envolvente.
            </p>

        
            <ul className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`group flex min-w-0 items-center gap-3 rounded-[20px] border border-white/60 ${item.bg} p-3 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:gap-4 sm:rounded-[26px]`}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white sm:h-14 sm:w-14">
                        <Icon size={26} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="block text-base font-semibold leading-snug text-white sm:text-lg">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-5 text-white/90 sm:leading-6">
                          {item.description}
                        </span>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition duration-300 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:text-white sm:flex">
                        <PiArrowRightBold size={18} />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <div className="relative overflow-hidden rounded-[24px] border p-2 sm:rounded-[32px] sm:p-3">
                <Image
                  src="/imagens/fundos/tabuleiro.png"
                  alt="SocioLudo"
                  width={1600}
                  height={1200}
                  className="h-auto w-full rounded-[18px] object-contain sm:rounded-[24px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
