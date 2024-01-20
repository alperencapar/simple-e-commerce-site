import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		open: true,
	},
	plugins: [react()],
	alias: {
		bootstrap: path.resolve(__dirname, "./node_modules/bootstrap/scss"),
	},
})
