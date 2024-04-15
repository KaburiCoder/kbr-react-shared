import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        configs: path.resolve(__dirname, "src/configs.ts"),
        hooks: path.resolve(__dirname, "src/hooks.ts"),
      },
      // entry: path.resolve(__dirname, "src/index.tsx"),
      // name: "index",
      fileName: (format, entryName) =>
        `${entryName}.${format === "es" ? "js" : format}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "styles/[name].[ext]",
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [dts(), libInjectCss()],
});
