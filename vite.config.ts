import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig(
  () =>
    ({
      appType: "spa" as const,
      root: "",
      build: {
        cssCodeSplit: true,
        minify: "esbuild"
      },
      server: {
        port: 8000,
        open: true,
        fs: {
          strict: false
        }
      },
      base: "",
      plugins: [
        react({
          // Use React plugin in all *.jsx and *.tsx files
          include: ["**/*.{jsx,tsx}"]
        }),
        svgr({
          svgrOptions: {
            exportType: "default"
          },
          include: "**/*.svg"
        })
      ],

      optimizeDeps: {
        esbuildOptions: {
          treeShaking: true
        }
      },
      test: {
        globals: true,
        environment: "happy-dom",
        setupFiles: ["./setup-vitest.ts"],
        css: {
          modules: {
            classNameStrategy: "non-scoped"
          }
        }
      }
    }) as VitestConfigExport
);
