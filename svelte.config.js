import adapter from '@sveltejs/adapter-azure-swa';
import sveltePreprocess from 'svelte-preprocess'; // Corrected import

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: sveltePreprocess() // Use sveltePreprocess
};

export default config;