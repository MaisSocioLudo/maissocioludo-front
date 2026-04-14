// src/app/estudos/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTemaById, temas } from "@/app/temas/temas";
import { getTemaContent } from "@/app/temas/tema-content-loader";
import { TemaBlockRenderer } from "./(components)/tema-render";
import { PiArrowUpBold, PiHashBold } from "react-icons/pi";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return temas.map((tema) => ({ id: tema.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tema = getTemaById(id);

  if (!tema) {
    return { title: "Tema não encontrado | SocioLudo" };
  }

  return {
    title: `${tema.nome} | +SocioLudo`,
    description: tema.introducao,
  };
}

export default async function TemaPage({ params }: Props) {
  const { id } = await params;

  const tema = getTemaById(id);
  if (!tema) notFound();

  const content = await getTemaContent(id);

  return (
    <main id="top" className="min-h-screen bg-[#f5f5f5]">
      <section className="border-b border-black/10 bg-[#dbe6ec]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div className="flex min-w-0 flex-col items-start text-left">
              <div className="mt-2 w-fit max-w-1xl">
                <div
                  className="mb-5 inline-block max-w-full rotate-[-2deg] px-4 py-3 shadow-md sm:px-6"
                  style={{ backgroundColor: tema.cor }}
                >
                  <h1 className="break-words text-xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
                    {content.hero?.title ?? tema.nome}
                  </h1>
                </div>

                {content.menu?.length ? (
                  <div className="mt-5 flex flex-wrap justify-start gap-2 sm:mt-6">
                    {content.menu.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="
                  relative flex items-center justify-center gap-1
                  rounded-full bg-white
                  px-3 py-2
                  text-left text-[11px] font-extrabold uppercase tracking-wide text-zinc-800
                  shadow-sm transition hover:-translate-y-0.5
                  sm:px-5 sm:py-3 sm:text-sm
                "
                      >
                        <PiHashBold style={{ color: tema.cor }} />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[180px] w-[180px] overflow-hidden rounded-[22px] shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:h-[220px] sm:w-[220px] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <Image
                  src={`/imagens/cartas/${tema.id}.jpg`}
                  alt={tema.nome}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 180px, 220px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {content.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[28px] sm:p-6 md:p-8"
            >
              <h2
                className="mb-5 text-xl font-black uppercase leading-tight sm:mb-6 sm:text-2xl"
                style={{ color: tema.cor }}
              >
                {section.title}
              </h2>

              <div className="space-y-4 sm:space-y-5">
                {section.blocks.map((block, index) => (
                  <TemaBlockRenderer
                    key={block.id ?? `${section.id}-${index}`}
                    block={block}
                    color={tema.cor}
                  />
                ))}
              </div>
            </section>
          ))}

          {content.referencias?.length ? (
            <section
              id="referencias"
              className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[28px] sm:p-6 md:p-8"
            >
              <h2
                className="mb-5 text-xl font-black uppercase leading-tight sm:mb-6 sm:text-2xl"
                style={{ color: tema.cor }}
              >
                Referências bibliográficas
              </h2>

              <ul className="space-y-3 text-[15px] leading-7 text-zinc-700 sm:text-[16px]">
                {content.referencias.map((ref, index) => (
                  <li key={`${ref}-${index}`}>• {ref}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </section>

      <a
        href="#top"
        className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-110 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        aria-label="Voltar ao topo"
      >
        <PiArrowUpBold size={20} />
      </a>
    </main>
  );
}