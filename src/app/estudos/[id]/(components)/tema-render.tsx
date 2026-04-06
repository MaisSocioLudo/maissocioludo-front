// src/components/estudos/tema-block-renderer.tsx
import type { TemaContentBlock } from "@/types/tema-content";

interface Props {
  block: TemaContentBlock;
  color: string;
}

export function TemaBlockRenderer({ block, color }: Props) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="text-2xl font-black text-zinc-900">
          {block.content}
        </h3>
      );

    case "subheading":
      return (
        <h4 className="mt-6 text-lg font-black uppercase tracking-wide" style={{ color }}>
          {block.content}
        </h4>
      );

    case "paragraph":
      return (
        <p className="text-[17px] leading-8 text-zinc-700">
          {block.content}
        </p>
      );

    case "list":
      return (
        <ul className="space-y-3 pl-5 text-[17px] leading-8 text-zinc-700 list-disc">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "highlight":
      return (
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
          <p className="mb-2 text-lg font-black" style={{ color }}>
            {block.title}
          </p>
          <p className="text-[16px] leading-7 text-zinc-700">
            {block.content}
          </p>
        </div>
      );

    case "quote":
      return (
        <blockquote className="rounded-3xl border-l-4 bg-zinc-50 p-5 italic text-zinc-700" style={{ borderColor: color }}>
          {block.content}
        </blockquote>
      );

    default:
      return null;
  }
}