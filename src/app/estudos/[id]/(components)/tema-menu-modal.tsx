"use client";

import { useEffect, useMemo, useState } from "react";
import { PiHashBold, PiListBold, PiXBold } from "react-icons/pi";

type MenuItem = {
  id: string;
  label: string;
};

interface Props {
  tema: string;
  items: MenuItem[];
  color: string;
}

export function TemaMenuModal({ tema, items, color }: Props) {
  const [open, setOpen] = useState(false);

  const menuItems = useMemo<MenuItem[]>(
    () => [
      ...items.filter(
        (item) =>
          item.id &&
          item.id !== "top" &&
          item.id !== "nav" &&
          item.id !== "referencias" &&
          item.id !== "indicacoes"
      ),
    ],
    [items]
  );

  const displayedMenuItems = useMemo(() => {
    return reorderForTwoColumns(menuItems);
  }, [menuItems]);

  function reorderForTwoColumns<T>(items: T[]) {
    const half = Math.ceil(items.length / 2);
    const left = items.slice(0, half);
    const right = items.slice(half);

    const reordered: T[] = [];

    for (let i = 0; i < half; i++) {
      if (left[i]) reordered.push(left[i]);
      if (right[i]) reordered.push(right[i]);
    }

    return reordered;
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!menuItems.length) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          inline-flex items-center gap-2 rounded-full bg-white px-4 py-3
          text-sm font-extrabold uppercase tracking-wide text-zinc-800 shadow-sm
          transition hover:-translate-y-0.5 sm:px-5
        "
      >
        <PiListBold style={{ color }} size={18} />
        <span>Ver tópicos</span>
        {/* <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px]">
          {menuItems.length}
        </span> */}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          />

          <div
            className="
              mt-10 md:mt-0 absolute left-1/2 top-1/2 w-[calc(100%-24px)] max-w-2xl
              -translate-x-1/2 -translate-y-1/2
              rounded-[28px] border border-zinc-200 bg-white p-4 shadow-2xl
              sm:p-6
            "
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color }}
                >
                  {tema}
                </p>
                <h3 className="text-xl font-black text-zinc-900 sm:text-2xl">
                  Tópicos disponíveis
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-800 transition hover:bg-zinc-200"
                aria-label="Fechar"
              >
                <PiXBold size={20} />
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto pr-1">
              <div className="grid gap-2 grid-cols-2">
                {displayedMenuItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      window.location.href = "#" + item.id;
                    }}
                    className="
                      flex w-full items-start gap-2 rounded-2xl border border-zinc-200
                      bg-zinc-50 px-4 py-3 text-left text-sm font-bold text-zinc-800
                      transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white
                    "
                  >
                    <PiHashBold
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color }}
                    />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}