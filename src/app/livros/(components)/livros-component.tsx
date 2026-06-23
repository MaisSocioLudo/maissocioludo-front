import Link from "next/link";
import Image from "next/image";
import { PiBookBold, PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function LivrosComponent() {
  const livros = [
    {
      nome: "Entre saberes",
      imagem: "entre_saberes.jpg",
      link: "https://drive.google.com/file/d/1r9fGL3ykIkxRE_psMkEABy0HSYJtvNmH/view",
    },
    {
      nome: "Sociologia para jovens do século XXI (2018-2020)",
      imagem: "sociologia_jovens.jpg",
      link: "https://drive.google.com/file/d/1oskz2GM1kE-HMPQ-vcb-uo_GCgd4g50b/view"
    },
     {
      nome: "Sociologia para jovens do século XXI",
      imagem: "sociologia_jovens2.jpg",
      link: "https://drive.google.com/file/d/1OoiARC1kFRHk9aqOFAGc8JzqJiXt1tfo/view"
    },
  ];

  return (
    <section
      id="livros"
      className="scroll-mt-24 rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-6 md:rounded-[32px] md:p-8"
    >
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C02A3A]/10 text-[#C02A3A] sm:h-12 sm:w-12">
              <PiBookBold className="text-[22px] sm:text-[24px]" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C02A3A]">
                ACESSO GRATUITO
              </p>
              <h1 className="text-xl font-black text-zinc-900 sm:text-2xl md:text-3xl">
                <a href="#livros">Livros didáticos</a>
              </h1>
            </div>
          </div>

          <p className="max-w-2xl text-[15px] leading-7 text-zinc-600">
            Explore nossa seleção de <strong>{livros.length} livros</strong> indicados.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {livros.map((livro) => (
          <Link
            key={livro.nome}
            href={livro.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group">
              <div className="overflow-hidden rounded-[18px] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[24px]">
                <div className="relative aspect-[750/1039] w-full bg-zinc-100">
                  <Image
                    src={"/imagens/livros/" + livro.imagem}
                    alt={livro.nome}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 140px"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              </div>

              <p className="mt-2 text-center text-xs font-bold leading-5 text-zinc-800 sm:mt-3 sm:text-sm">
                {(livro.nome).toUpperCase()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}