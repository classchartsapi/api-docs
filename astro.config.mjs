import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
            base: "api",
            label: "API Reference",
            schema: "./openapi/classcharts.yaml",
            collapsed: false,
          },
        ]),
      ],
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [...openAPISidebarGroups],
    }),
  ],
});
