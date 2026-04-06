// src/types/tema-content.ts

export type TemaContentBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "heading";
      content: string;
    }
  | {
      type: "subheading";
      content: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "highlight";
      title: string;
      content: string;
    }
  | {
      type: "quote";
      content: string;
    };

export interface TemaSection {
  id: string;
  title: string;
  blocks: TemaContentBlock[];
}

export interface TemaContent {
  hero?: {
    title?: string;
    description?: string;
  };
  menu?: {
    id: string;
    label: string;
  }[];
  sections: TemaSection[];
  referencias?: string[];
}