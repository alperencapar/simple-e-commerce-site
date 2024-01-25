import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

import cssnanoPlugin from "cssnano"
import autoprefixer from "autoprefixer"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vitejs.dev/config/
export default defineConfig({
	base: "/simple-e-commerce-site",
	server: {
		port: 3000,
		open: true,
	},
	plugins: [
		react(),
		ViteImageOptimizer({
			// https://sharp.pixelplumbing.com/api-output
			jpeg: {
				quality: 85,
				// chromaSubsampling: "4:4:4",
			},
			jpg: {
				quality: 85,
				// chromaSubsampling: "4:4:4",
			},
			png: {
				quality: 95,
				compressionLevel: 6,
				palette: true,
				effort: 9,
			},
			webp: {
				quality: 85,
				lossless: true, //false
			},
			tiff: {
				quality: 85,
				lossless: true,
			},
			avif: {
				quality: 85,
				lossless: true,
			},
		}),
	],
	alias: {
		bootstrap: path.resolve(__dirname, "./node_modules/bootstrap/scss"),
	},
	css: {
		postcss: {
			plugins: [cssnanoPlugin(), autoprefixer()],
		},
	},
})
