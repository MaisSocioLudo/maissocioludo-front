
// src/components/estudos/tema-block-renderer.tsx
import type { TemaContentBlock } from "@/types/tema-content";

interface Props {
  block: TemaContentBlock;
  color: string;
}

function renderFormattedContent(content: string) {
  return { __html: content };
}

export function TemaBlockRenderer({ block, color }: Props) {
  switch (block.type) {
    case "heading":
      return (
        <h3 id={block.id} className="text-3xl font-black text-zinc-900">
          <a href={"#" + block.id} dangerouslySetInnerHTML={renderFormattedContent(block.content)} />
        </h3>
      );

    case "subheading":
      return (
        <h4
          id={block.id}
          className="mt-6 text-lg font-black uppercase tracking-wide"
          style={{ color }}
          dangerouslySetInnerHTML={renderFormattedContent(block.content)}
        />
      );

    case "paragraph":
      return (
        <p
          id={block.id}
          className="text-[17px] leading-8 text-zinc-700"
          dangerouslySetInnerHTML={renderFormattedContent(block.content)}
        />
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
          <p
            className="mb-2 text-lg font-black"
            style={{ color }}
            dangerouslySetInnerHTML={renderFormattedContent(block.title)}
          />
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