import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
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
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Get Started",
          items: [{ label: "Introduction", link: "/" }],
        },
        {
          label: "Authentication",
          items: [
            {
              label: "Requesting Data",
              link: "/requesting-data",
            },
            {
              label: "[POST] Parent Login",
              link: "/parent-client-api/operations/parentlogin",
            },
            {
              label: "[POST] Student Login",
              link: "/student-client-api/operations/studentlogin",
            },
            {
              label: "[POST] Revalidate Session",
              link: "/client-api/operations/ping",
            },
          ],
        },
        {
          label: "Global Endpoints",
          items: [
            {
              label: "[GET] Activity",
              link: "/client-api/operations/activitystudentid",
            },
            {
              label: "[GET] Behaviour",
              link: "/client-api/operations/behaviourstudentid",
            },
            {
              label: "[GET] Homeworks",
              link: "/client-api/operations/homeworksstudentid",
            },
            {
              label: "[GET] Lessons",
              link: "/client-api/operations/timetablestudentid",
            },
            {
              label: "[GET] Badges",
              link: "/client-api/operations/eventbadgesstudentid",
            },
            {
              label: "[GET] Announcements",
              link: "/client-api/operations/announcementsstudentid",
            },
            {
              label: "[GET] Detentions",
              link: "/client-api/operations/detentionsstudentid",
            },
            {
              label: "[GET] Attendance",
              link: "/client-api/operations/attendancestudentid",
            },
            {
              label: "[GET] Pupil Fields",
              link: "/client-api/operations/customfieldsstudentid",
            },
          ],
        },
        {
          label: "Student Endpoints",
          items: [
            {
              label: "[GET] Rewards",
              link: "/student-client-api/operations/rewardsstudentid",
            },
            {
              label: "[POST] Purchase Reward",
              link: "/student-client-api/operations/purchaseitemid",
            },
            {
              label: "[POST] Student Code",
              link: "/student-client-api/operations/getcode",
            },
          ],
        },
        {
          label: "Parent Endpoints",
          items: [
            {
              label: "[GET] Pupils",
              link: "/parent-client-api/operations/pupils",
            },
            {
              label: "[POST] Change Password",
              link: "/parent-client-api/operations/password",
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
