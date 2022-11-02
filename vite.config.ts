/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: [enter your app name here],
      formats: ["cjs", "es"],
      fileName: format => `[your app name].${format}.js`
    }
  },
  plugins: [dts()],
  test: {
    environment: "jsdom"
  }
})