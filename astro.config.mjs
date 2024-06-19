import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI from "starlight-openapi";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://classchartsapi.github.io",
  base: "api-docs",
  prefetch: true,
  trailingSlash: "always",
  integrations: [
    starlight({
      customCss: [
        "./src/tailwind.css",
        "@fontsource/jetbrains-mono",
        "@fontsource-variable/inter",
      ],
      plugins: [
        starlightOpenAPI([
          {
            base: "parent-client-api",
            label: "Parent Client API",
            schema: "./openapi/parentclientapi.yaml",
            collapsed: false,
          },
          {
            base: "student-client-api",
            label: "Student Client API",
            schema: "./openapi/studentclientapi.yaml",
            collapsed: false,
          },
          {
            base: "client-api",
            label: "Global Client API",
            schema: "./openapi/clientapi.yaml",
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
        github: "https://github.com/classchartsapi/api-docs",
      },
      sidebar: [
        {
          label: "[github] Repository",
          link: "https://github.com/classchartsapi/api-docs",
        },
        {
          label: "[warning] Report issue",
          link: "https://github.com/classchartsapi/api-docs/issues/new",
        },
        {
          label: "Get Started",
          items: [
            { label: "Introduction", link: "/" },
            {
              label: "Authentication",
              link: "/authentication",
            },
            {
              label: "Client Libraries",
              link: "/client-libraries",
            },
            {
              label: "Coverage",
              link: "/coverage",
            },
          ],
        },
        {
          label: "Student Endpoints",
          items: [
            {
              label: "[POST] Login",
              link: "/student-client-api/operations/login",
            },
            {
              label: "[POST] Ping",
              link: "/student-client-api/operations/ping",
            },
            {
              label: "[GET] List Rewards",
              link: "/student-client-api/operations/list-rewards",
            },
            {
              label: "[POST] Purchase Reward",
              link: "/student-client-api/operations/purchase-reward",
            },
            {
              label: "[GET] Tick Homework",
              link: "/student-client-api/operations/tick-homework",
            },
            {
              label: "[POST] Get Student Code",
              link: "/student-client-api/operations/get-student-code",
            },
          ],
        },
        {
          label: "Parent Endpoints",
          items: [
            {
              label: "[POST] Login",
              link: "/parent-client-api/operations/login",
            },
            {
              label: "[POST] Ping",
              link: "/parent-client-api/operations/ping",
            },
            {
              label: "[GET] List Pupils",
              link: "/parent-client-api/operations/list-pupils",
            },
            {
              label: "[POST] Change Password",
              link: "/parent-client-api/operations/change-password",
            },
          ],
        },
        {
          label: "Global Endpoints",
          items: [
            {
              label: "[GET] List Activity",
              link: "/client-api/operations/list-activity",
            },
            {
              label: "[GET] List Behaviour",
              link: "/client-api/operations/list-behaviour",
            },
            {
              label: "[GET] List Homeworks",
              link: "/client-api/operations/list-homeworks",
            },
            {
              label: "[GET] List Lessons",
              link: "/client-api/operations/list-lessons",
            },
            {
              label: "[GET] List Badges",
              link: "/client-api/operations/list-badges",
            },
            {
              label: "[GET] List Announcements",
              link: "/client-api/operations/list-announcements",
            },
            {
              label: "[GET] List Detentions",
              link: "/client-api/operations/list-detentions",
            },
            {
              label: "[GET] Get Attendance",
              link: "/client-api/operations/get-attendance",
            },
            {
              label: "[GET] List Pupil Fields",
              link: "/client-api/operations/list-pupil-fields",
            },
            {
              label: "[GET] List Academic Reports",
              link: "/client-api/operations/list-academic-reports",
            },
            {
              label: "[GET] Get Academic Report",
              link: "/client-api/operations/get-academic-report",
            },
            {
              label: "[POST] List Report Cards",
              link: "/client-api/operations/list-on-report-cards",
            },
            {
              label: "[GET] Get Report Card",
              link: "/client-api/operations/get-on-report-card",
            },
            {
              label: "[GET] Get Report Card Summary",
              link: "/client-api/operations/get-on-report-card-summary-comment",
            },
            {
              label: "[GET] Get Report Card Target",
              link: "/client-api/operations/get-on-report-card-target",
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
