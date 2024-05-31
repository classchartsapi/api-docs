import type { HTMLAttributes } from "astro/types";
import type { Badge } from "../schemas/badge";
import type { AstroBuiltinAttributes } from "astro";
import { z } from "astro/zod";

const linkHTMLAttributesSchema = z.record(
  z.union([z.string(), z.number(), z.boolean(), z.undefined()])
) as z.Schema<
  Omit<HTMLAttributes<"a">, keyof AstroBuiltinAttributes | "children">
>;
export type LinkHTMLAttributes = z.infer<typeof linkHTMLAttributesSchema>;

export interface Link {
  type: "link";
  label: string;
  href: string;
  isCurrent: boolean;
  badge: Badge | undefined;
  attrs: LinkHTMLAttributes;
}

interface Group {
  type: "group";
  label: string;
  entries: (Link | Group)[];
  collapsed: boolean;
  badge: Badge | undefined;
}

export type SidebarEntry = Link | Group;

export function flattenSidebar(sidebar: SidebarEntry[]): Link[] {
  return sidebar.flatMap((entry) =>
    entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
