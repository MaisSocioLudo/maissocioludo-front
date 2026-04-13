// src/app/estudos/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTemaById, temas } from "@/app/temas/temas";
import { getTemaContent } from "@/app/temas/tema-content-loader";
import { TemaBlockRenderer } from "./(components)/tema-render";
import { PiArrowUpBold } from "react-icons/pi";

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
    description: tema.introducao
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
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-center">
              <div
                className="mb-5 inline-block rotate-[-2deg] px-6 py-3 shadow-md"
                style={{ backgroundColor: tema.cor }}
              >
                <h1 className="text-2xl font-black uppercase text-white md:text-4xl">
                  {content.hero?.title ?? tema.nome}
                </h1>
              </div>

              {content.menu?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {content.menu.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="rounded-full bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-zinc-800 shadow-sm"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <div className="relative h-[220px] w-[220px] overflow-hidden rounded-[22px] shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <Image
                  src={"/imagens/cartas/" + tema.id + ".jpg"}
                  alt={tema.nome}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-8">
        <div className="space-y-10">
          {content.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h2
                className="mb-6 text-2xl font-black uppercase"
                style={{ color: tema.cor }}
              >
                {section.title}
              </h2>

              <div className="space-y-5">
                {section.blocks.map((block) => (
                  <TemaBlockRenderer
                    key={`${block.id}`}
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
              className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h2
                className="mb-6 text-2xl font-black uppercase"
                style={{ color: tema.cor }}
              >
                Referências bibliográficas
              </h2>

              <ul className="space-y-3 text-[16px] leading-7 text-zinc-700">
                {content.referencias.map((ref) => (
                  <li key={ref}>• {ref}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </section>

      {/* Botão voltar ao topo */}
      <a
        href="#nav"
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <PiArrowUpBold size={20}></PiArrowUpBold>
      </a>
    </main>
  );
}