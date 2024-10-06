"use client";
import { useServiceWorker } from "@/hooks/use-service-worker";
import { RootProvider } from "fumadocs-ui/provider";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SearchDialog = dynamic(() => import("@/components/search"));

export function Provider({ children }: { children: ReactNode }) {
  useServiceWorker();

  return (
    <RootProvider
      search={{
        SearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
}
