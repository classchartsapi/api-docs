import { generateFiles } from "fumadocs-openapi";

void generateFiles({
  input: ["./openapi/parentclientapi.yaml"],
  output: "./content/docs/parent-api",
});

void generateFiles({
  input: ["./openapi/studentclientapi.yaml"],
  output: "./content/docs/student-api",
});

void generateFiles({
  input: ["./openapi/clientapi.yaml"],
  output: "./content/docs/global-api",
});
