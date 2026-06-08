// src/types/tema-content.ts

export type TemaContentBlock =
  | {
    icon?: string;
    type: "paragraph";
    id: string;
    content: string;
  }
  | {
    icon?: string;
    type: "heading";
    id: string;
    content: string;
  }
  | {
    icon?: string;
    type: "subheading";
    id: string;
    content: string;
  }
  | {
    icon?: string;
    type: "list";
    id: string;
    items: string[];
  }
  | {
    icon?: string;
    type: "highlight";
    id: string;
    title: string;
    content: string;
  }
  | {
    icon?: string;
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