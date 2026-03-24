import Image from "next/image";
import Link from "next/link";
import {
  PiBookOpenTextBold,
  PiNotebookBold,
  PiArrowRightBold,
} from "react-icons/pi";

const items = [
  {
    title: "Estudar temas",
    href: "/corretor",
    icon: PiBookOpenTextBold,
    bg: "bg-[var(--color-verde)]",
  },
  {
    title: "O que é o SocioLudo",
    href: "/materias",
    icon: PiBookOpenTextBold,
    bg: "bg-[var(--color-azul)]",
  },
  {
    title: "Baixar o SocioLudo",
    href: "/exercicios",
    icon: PiNotebookBold,
    bg: "bg-[var(--color-amarelo)]",
  },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Título
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Mini descrição
            </p>

            <div>
              <ul className="mt-10 grid gap-4">
                {items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-4 rounded-3xl bg-black/10 p-2 backdrop-blur transition duration-300 hover:bg-black/15"
                      >
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.bg} text-white shadow-lg`}
                        >
                          <Icon size={26} />
                        </div>

                        <div className="flex-1">
                          <span className="block text-lg font-bold text-gray-900">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-sm text-gray-500">
                            Acesse esta área
                          </span>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition group-hover:bg-gray-900 group-hover:text-white">
                          <PiArrowRightBold size={18} />
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className=" flex justify-center lg:justify-end">
            <div className=" w-full max-w-[520px]">
              <Image
                src="https://www.todamateria.com.br/layout/assets/dist/home-students-desktop-l.CK8A2Xuo.png"
                alt="SocioLudo"
                width={1600}
                height={900}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}