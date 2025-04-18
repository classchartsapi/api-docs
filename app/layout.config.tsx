import { type BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: <span className="text-lg">ClassCharts API Docs</span>,
		transparentMode: "top",
	},
	githubUrl: "https://github.com/classchartsapi/api-docs",
};
