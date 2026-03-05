import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import htmlInject from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [
    // Плагин Tailwind CSS 4 — автоматически подключает Tailwind
    tailwindcss(),
    // Плагин для инъекции HTML-компонентов (header, footer и т.д.)
    htmlInject(),
  ],
  build: {
    // Папка для сбилденной версии
    outDir: 'dist',
    // Очищать папку dist перед сборкой
    emptyOutDir: true,
  },
});
