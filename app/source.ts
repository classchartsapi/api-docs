import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { createOpenAPI, attachFile } from "fumadocs-openapi/server";
import { icons } from "lucide-react";
import { createElement } from "react";
import { IconContainer } from "@/components/ui/icon";

export const source = loader({
  baseUrl: "/",
  source: createMDXSource(docs, meta),
  pageTree: {
    attachFile,
  },
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons)
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      });
  },
});

export const openapi = createOpenAPI({});
