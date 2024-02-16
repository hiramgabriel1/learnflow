import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import envCompatible from "vite-plugin-env-compatible"
// import dotenv from "dotenv"

// dotenv.config()

export default defineConfig({
	plugins: [
		sveltekit(),
		// envCompatible({  })
	]
});
