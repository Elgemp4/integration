import { defineConfig } from "vite";
import {dirname, resolve} from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    root: "./src",
    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                foods: resolve(__dirname, "src/foods.html"),
                reservation: resolve(__dirname, "src/reservation.html"),
                gallery: resolve(__dirname, "src/gallery.html"),
            }
        }
    },
    plugins: [tailwindcss()]
});