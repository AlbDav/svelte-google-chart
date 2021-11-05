import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions: {
      input: ['./src/lib/Chart.svelte'],
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    })
  ]
});