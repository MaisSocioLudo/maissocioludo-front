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
    description: "Explore os conteúdos e aprenda de forma interativa.",
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
    <section className="relative overflow-hidden rounded-[32px]  px-4 py-8 sm:px-6 lg:px-10">


      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 max-w-2xl lg:order-1">
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur">
              Plataforma educativa de Sociologia
            </div>

            <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight text-[var(--color-cinza)] sm:text-5xl lg:text-6xl">
              +SocioLudo
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
              Um espaço dedicado ao jogo de tabuleiro SocioLudo e ao SocioLudo
              Digital, tornando o aprendizado de Sociologia mais acessível,
              dinâmico e envolvente.
            </p>

            <ul className="mt-8 grid gap-4">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-4 rounded-[26px] border border-white/60 ${item.bg} p-3 backdrop-blur-md transition duration-300 hover:-translate-y-1`}
                    >
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} text-white`}
                      >
                        <Icon size={26} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="block text-base font-semibold text-white sm:text-lg">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-white/90">
                          {item.description}
                        </span>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition duration-300 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:text-white">
                        <PiArrowRightBold size={18} />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <div className="absolute inset-0 scale-95 rounded-[32px]  blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border p-3 ">
                <Image
                  src="/imagens/fundos/tabuleiro.png"
                  alt="SocioLudo"
                  width={1600}
                  height={1200}
                  className="h-auto w-full rounded-[24px] object-contain"
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