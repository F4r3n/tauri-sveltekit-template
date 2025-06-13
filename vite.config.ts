import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
const host = process.env.TAURI_DEV_HOST;
export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5173,
		strictPort: true,
		host: host || '127.0.0.1',
		hmr: host
			? {
				protocol: "ws",
				host,
				port: 1421,
			}
			: undefined,
	},
	preview: {
		host: '127.0.0.1',
		port: 5173
	}
});
