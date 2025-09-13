import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true }),
  ],
  test: {
    globals: true, // чтобы expect был глобальным
    environment: 'jsdom', // для тестирования DOM
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "BnovoUIKit",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
  },
  resolve: { alias: { "@": resolve(__dirname, "src") } },
});
