import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    starlight({
      customCss: ["./src/tailwind.css"],
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
      components: {
        Sidebar: "./src/components/Sidebar.astro",
        PageFrame: "./src/components/PageFrame.astro",
        TwoColumnContent: "./src/components/TwoColumnContent.astro",
        ContentPanel: "./src/components/ContentPanel.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
        Header: "./src/components/Header.astro",
        Search: "./src/components/Search.astro",
        Pagination: "./src/components/Pagination.astro",
      },
      title: "ClassCharts API Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [...openAPISidebarGroups],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
