// src/components/estudos/tema-block-renderer.tsx
import type { TemaContentBlock } from "@/types/tema-content";
import {
  PiBookBold,
  PiFilmSlateBold,
  PiMusicNoteBold,
} from "react-icons/pi";

interface Props {
  block: TemaContentBlock;
  icon?: string;
  color: string;
}

function renderFormattedContent(content: string) {
  return { __html: content };
}

function formatIcon({ block, color }: Props) {
  if (!block?.icon || !color) return null;

  const iconClassName = "mt-1 shrink-0";

  if (block.icon === "filme") {
    return <PiFilmSlateBold className={iconClassName} style={{ color }} size={28} />;
  }

  if (block.icon === "livro") {
    return <PiBookBold className={iconClassName} style={{ color }} size={28} />;
  }

  if (block.icon === "musica") {
    return <PiMusicNoteBold className={iconClassName} style={{ color }} size={28} />;
  }

  return null;
}

export function TemaBlockRenderer({ block, color }: Props) {
  switch (block.type) {
    case "heading":
      return (
        <div className="relative flex items-start gap-2">
          {formatIcon({ block, color })}
          <h3
            id={block.id}
            className="min-w-0 break-words text-2xl font-black leading-tight text-zinc-900 sm:text-3xl"
          >
            <a dangerouslySetInnerHTML={renderFormattedContent(block.content)} />
          </h3>
        </div>
      );

    case "subheading":
      return (
        <div className="relative flex items-start gap-2">
          {formatIcon({ block, color })}
          <h4
            id={block.id}
            className="mt-5 min-w-0 break-words text-base font-black uppercase leading-snug tracking-wide sm:mt-6 sm:text-lg"
            style={{ color }}
            dangerouslySetInnerHTML={renderFormattedContent(block.content)}
          />
        </div>
      );

    case "paragraph":
      return (
        <div className="relative flex items-start gap-2">
          {formatIcon({ block, color })}
          <p
            id={block.id}
            className="min-w-0 break-words text-[15px] leading-7 text-zinc-700 sm:text-[17px] sm:leading-8"
            dangerouslySetInnerHTML={renderFormattedContent(block.content)}
          />
        </div>
      );

    case "list":
      return (
        <ul
          id={block.id}
          className="list-disc space-y-3 pl-5 text-[15px] leading-7 text-zinc-700 sm:text-[17px] sm:leading-8"
        >
          {block.items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="break-words"
              dangerouslySetInnerHTML={renderFormattedContent(item)}
            />
          ))}
        </ul>
      );

    case "highlight":
      return (
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:rounded-3xl sm:p-5">
          <div className="relative flex items-start gap-2">
            {formatIcon({ block, color })}

            <p
              className="min-w-0 break-words text-base font-black leading-snug sm:text-lg"
              style={{ color }}
              dangerouslySetInnerHTML={renderFormattedContent(block.title)}
            />
          </div>

          <p
            className="mt-2 break-words text-[15px] leading-7 text-zinc-700 sm:text-[16px]"
            dangerouslySetInnerHTML={renderFormattedContent(block.content)}
          />
        </div>
      );

    case "quote":
      return (
        <blockquote
          className="break-words rounded-2xl border-l-4 bg-zinc-50 p-4 text-[15px] leading-7 text-zinc-700 italic sm:rounded-3xl sm:p-5 sm:text-base"
          style={{ borderColor: color }}
          dangerouslySetInnerHTML={renderFormattedContent(block.content)}
        />
      );

    default:
      return null;
  }
}
