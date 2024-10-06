import "./global.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Provider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
