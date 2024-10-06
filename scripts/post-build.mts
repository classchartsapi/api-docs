import env from "@next/env";
import type { Manifest } from "fumadocs-mdx";
import { readFileSync } from "node:fs";
import { updateSearchIndexes } from "./update-index.mjs";

env.loadEnvConfig(process.cwd());

async function main() {
  const manifest = JSON.parse(
    readFileSync(".source/manifest.json").toString(),
  ) as Manifest;

  await updateSearchIndexes(manifest);
}

await main().catch((e) => {
  console.error("Failed to run post build script", e);
});
