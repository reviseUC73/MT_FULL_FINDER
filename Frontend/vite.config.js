import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [react()],
    server: {
      host: env.SERVER_HOST || "0.0.0.0",
      port: env.SERVER_PORT || 4000,
    },
    optimizeDeps: {
      exclude: ["js-big-decimal"],
    },
  };
});
