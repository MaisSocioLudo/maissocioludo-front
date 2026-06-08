
// src/components/estudos/tema-block-renderer.tsx
import type { TemaContentBlock } from "@/types/tema-content";
import { PiBookBold, PiBookOpenBold, PiFilmSlateBold, PiMusicNoteBold } from "react-icons/pi";

interface Props {
  block: TemaContentBlock;
  icon?: string;
  color: string;
}

function renderFormattedContent(content: string) {
  return { __html: content };
}

function formatIcon({ block, color }: Props) {
  if (!block || !block.icon || !color) return null;
  return (
    <>
      {block.icon && <>
        <div className="rounded-lg items-center"
        >
          {block.icon === "filme" && <>
            <PiFilmSlateBold style={{ color }} size={30} />
          </>}
          {block.icon === "livro" && <>
            <PiBookBold style={{ color }} size={30} />
          </>}
          {block.icon === "musica" && <>
            <PiMusicNoteBold style={{ color }} size={30} />
          </>}

        </div>
      </>}
    </>)

}
export function TemaBlockRenderer({ block, color }: Props) {
  switch (block.type) {
    case "heading":
      return (
        <div className="flex relative items-center gap-2 ">
          {formatIcon({ block, color })}
          <h3 id={block.id} className="text-3xl font-black text-zinc-900">

            <a dangerouslySetInnerHTML={renderFormattedContent(block.content)} />
          </h3>
        </div>
      );

    case "subheading":
      return (
        <div className="flex relative items-center gap-2 ">
          {formatIcon({ block, color })}
          <h4
            id={block.id}
            className="mt-6 text-lg font-black uppercase tracking-wide"
            style={{ color }}
            dangerouslySetInnerHTML={renderFormattedContent(block.content)}
          />
        </div>
      );

    case "paragraph":
      return (

        <div className="flex relative items-center gap-2 ">
          {formatIcon({ block, color })}
          <p
            id={block.id}
            className="text-[17px] leading-8 text-zinc-700"
            dangerouslySetInnerHTML={renderFormattedContent(block.content)}
          />
        </div>
      );

    case "list":
      return (
        <ul
          id={block.id}
          className="space-y-3 pl-5 text-[17px] leading-8 text-zinc-700 list-disc"
        >
          {block.items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              dangerouslySetInnerHTML={renderFormattedContent(item)}
            />
          ))}
        </ul>
      );

    case "highlight":
      return (

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="items-center flex relative gap-1">
            {formatIcon({ block, color })}

            <p
              className="text-lg font-black"
              style={{ color }}
              dangerouslySetInnerHTML={renderFormattedContent(block.title)}
            />
          </div>

          <p
            className="text-[16px] leading-7 text-zinc-700"
            dangerouslySetInnerHTML={renderFormattedContent(block.content)}
          />
        </div>
      );

    case "quote":
      return (
        <blockquote
          className="rounded-3xl border-l-4 bg-zinc-50 p-5 italic text-zinc-700"
          style={{ borderColor: color }}
          dangerouslySetInnerHTML={renderFormattedContent(block.content)}
        />
      );

    default:
      return null;
  }
}