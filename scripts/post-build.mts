import algosearch from "algoliasearch";
import { DocumentRecord, sync } from "fumadocs-core/search/algolia";
import * as fs from "node:fs";
import env from "@next/env";
env.loadEnvConfig(process.cwd());

const content = fs.readFileSync(".next/server/app/static.json.body");

const indexes: DocumentRecord[] = JSON.parse(content.toString());

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;

if (!appId || !apiKey) {
	throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID, ALGOLIA_API_KEY are required");
}

const client = algosearch(appId, apiKey);

sync(client, {
	document: process.env.NEXT_PUBLIC_ALGOLIA_INDEX ?? "document",
	documents: indexes,
});
