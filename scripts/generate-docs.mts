import { generateFiles } from "fumadocs-openapi";
import { rimrafSync } from "rimraf";

const createOpenAPIFiles = (config: Parameters<typeof generateFiles>[0]) => {
  rimrafSync(config.output, {
    filter(v) {
      return !v.endsWith("index.mdx") && !v.endsWith("meta.json");
    },
  });
  generateFiles(config);
};

createOpenAPIFiles({
  input: ["./openapi/parentclientapi.yaml"],
  output: "./content/docs/parent-api",
});

createOpenAPIFiles({
  input: ["./openapi/studentclientapi.yaml"],
  output: "./content/docs/student-api",
});

createOpenAPIFiles({
  input: ["./openapi/clientapi.yaml"],
  output: "./content/docs/global-api",
});
