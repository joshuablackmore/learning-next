import { defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "7gqekvwy",
    dataset: "production",
    title: "Petes Site",
    apiVersion: "2023-14-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;