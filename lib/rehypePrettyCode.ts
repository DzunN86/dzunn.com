import { type Options } from "rehype-pretty-code";
// import vercelLightTheme from "./lib/themes/vercel-light.json"

export const rehypePrettyCodeOptions: Partial<Options> = {
  // use a prepackaged theme
  theme: "one-dark-pro",
  // or import a custom theme
  // theme: JSON.parse(vercelLightTheme),
};
