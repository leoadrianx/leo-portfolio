import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import htmlConfig from "vite-plugin-html-config";
import { info } from "./src/data/info";
import { resume } from "./src/data/resume";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const siteUrl = env.URL || env.DEPLOY_PRIME_URL || "";

  return {
    plugins: [
      tailwindcss(),
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
      htmlConfig({
        metas: [
          {
            name: "description",
            content: `${info.fullName} | ${info.headline}`,
          },
          {
            property: "og:title",
            content: info.title,
          },
          {
            property: "og:description",
            content: resume.hero.slice(0, 160).trim() + "...",
          },
          {
            property: "og:image",
            content: `${siteUrl}/images/avatar.jpg`,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ],
      }),
    ],
  };
});
