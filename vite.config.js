import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	root: './',

	server: {
		port: 3333,
		open: true,
	},

	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`
			}
		}
	},

	css: {
		devSourcemap: true,
	}
});