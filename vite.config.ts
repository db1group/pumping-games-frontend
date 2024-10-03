import { defineConfig, loadEnv } from 'vite';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
const { env } = import.meta as any;
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log(process.env.VITE_BACKEND_URL);
  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_BACKEND_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
};
