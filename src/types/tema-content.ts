// src/types/tema-content.ts

export type TemaContentBlock =
  | {
      type: "paragraph";
      id: string;
      content: string;
    }
  | {
      type: "heading";
      id: string;
      content: string;
    }
  | {
      type: "subheading";
      id: string;
      content: string;
    }
  | {
      type: "list";
      id: string;
      items: string[];
    }
  | {
      type: "highlight";
      id: string;
      title: string;
      content: string;
    }
  | {
      type: "quote";
      id: string;
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