import algosearch from "algoliasearch";
import { sync } from "fumadocs-core/search-algolia/server";
import type { Manifest } from "fumadocs-mdx";
import { createGetUrl, getSlugs, parseFilePath } from "fumadocs-core/source";
import path from "node:path";

const getUrl = createGetUrl("/");

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;

export async function updateSearchIndexes(manifest: Manifest): Promise<void> {
  if (!appId || !apiKey) {
    throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY are required");
  }

  const client = algosearch(appId, apiKey);

  await sync(client, {
    document: process.env.NEXT_PUBLIC_ALGOLIA_INDEX ?? "document",
    documents: manifest.files
      .filter((file) => file.collection === "docs")
      .map((docs) => {
        const url = getUrl(
          getSlugs(parseFilePath(path.relative("content/", docs.path))),
        );

        if (!docs.data.structuredData)
          throw new Error("`structuredData` is required");

        return {
          _id: url,
          title: docs.data.frontmatter.title as string,
          description: docs.data.frontmatter.description as string,
          url,
          structured: docs.data.structuredData,
        };
      }),
  });
}
