import { defineConfig } from "vite";
import {resolve} from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    root: "./src",
    build: {
        outDir: resolve(__dirname, "dist"),
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/html/index.html"),
                page: resolve(__dirname, "src/html/page.html")
            }
        }
    },
    plugins: [tailwindcss()]
});