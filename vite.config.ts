import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// ----------------------------------------------

// const proxyApi = 'http://172.16.10.215';
// const proxyApi = 'http://10.70.6.9';
const proxyApi = 'http://172.16.11.197';

// ----------------------------------------------

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    console.log(command);
    console.log(env);

    return {
        base: env.VITE_BASE_URL,

        plugins: [vue()],

        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },

        server: {
            port: 3000,

            proxy: {
                '/manager-api': {
                    target: proxyApi,
                    changeOrigin: true,
                    logLevel: 'debug'
                }
            }
        },

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/styles/global.scss";`
                }
            }
        }
    };
});
