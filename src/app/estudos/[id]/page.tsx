// src/app/estudos/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PiArrowUpBold, PiFilmSlateBold, PiBookmarksBold } from "react-icons/pi";
import { getTemaById, temas } from "@/app/temas/temas";
import { getTemaContent } from "@/app/temas/tema-content-loader";
import { TemaBlockRenderer } from "./(components)/tema-render";
import { TemaMenuModal } from "./(components)/tema-menu-modal";

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

  const imageUrl = `/imagens/cartas/${tema.id}.jpg`;

  return {
    title: `${tema.nome} | +SocioLudo`,
    description: `Saiba mais sobre ${tema.nome}`,
    openGraph: {
      title: `${tema.nome} | +SocioLudo`,
      description: `Saiba mais sobre ${tema.nome}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: tema.nome,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tema.nome} | +SocioLudo`,
      description: `Saiba mais sobre ${tema.nome}`,
      images: [imageUrl],
    },
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
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div className="flex min-w-0 flex-col items-start text-left">
              <div className="mt-2 max-w-full">
                <div
                  className="mb-5 inline-block max-w-full rotate-[-2deg] px-3 py-3 shadow-md sm:px-6"
                  style={{ backgroundColor: tema.cor }}
                >
                  <h1 className="break-words text-xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
                    {content.hero?.title ?? tema.nome}
                  </h1>
                </div>
              </div>

              <div className="mt-3 flex w-full flex-col gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                <TemaMenuModal
                  tema={tema.nome}
                  items={content.menu ?? []}
                  color={tema.cor}
                />

                <Link href="#indicacoes" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-zinc-800 shadow-sm transition hover:-translate-y-0.5 sm:w-auto sm:px-5"
                  >
                    <PiFilmSlateBold style={{ color: tema.cor }} size={18} />
                    <span>Indicações</span>
                  </button>
                </Link>

                <Link href="#referencias" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-zinc-800 shadow-sm transition hover:-translate-y-0.5 sm:w-auto sm:px-5"
                  >
                    <PiBookmarksBold style={{ color: tema.cor }} size={18} />
                    <span>Referências bibliográficas</span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[170px] w-[170px] overflow-hidden rounded-[20px] shadow-[5px_5px_0px_rgba(0,0,0,1)] sm:h-[220px] sm:w-[220px] sm:rounded-[22px] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <Image
                  src={`/imagens/cartas/${tema.id}.jpg`}
                  alt={tema.nome}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 170px, 220px"
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
              className="rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-6 md:p-8"
            >
              <h2
                className="mb-5 break-words text-xl font-black uppercase leading-tight sm:mb-6 sm:text-2xl"
                style={{ color: tema.cor }}
              >
                {section.title}
              </h2>

              <div className="space-y-3">
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
              className="rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-6 md:p-8"
            >
              <h2
                className="mb-5 break-words text-xl font-black uppercase leading-tight sm:mb-6 sm:text-2xl"
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
        href="#nav"
        className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-110 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        aria-label="Voltar ao topo"
      >
        <PiArrowUpBold size={20} />
      </a>
    </main>
  );
}
