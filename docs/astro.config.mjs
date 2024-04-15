import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	site: 'https://sketchthedocs.github.io',
	base: '/crafted-storytelling-workshop',
	trailingSlash: "always",
	
	integrations: [
		starlight({
			title: 'Story-Mapping',
			logo: {
				light: './src/assets/copilot-create-3d.jpeg',
				dark: './src/assets/copilot-create-3d.jpeg',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/sketchthedocs/crafted-storytelling-workshop',
				twitter: 'https://twitter.com/sketchthedocs',
				instagram: 'https://instagram.com/sketchthedocs',
				youtube: 'https://www.youtube.com/@nityanarasimhan',
			},
			
			defaultLocale: 'root', // optional
			locales: {
			  root: {
				label: 'English',
				lang: 'en', // lang is required for root locales
			  },
			},

			sidebar: [
				{
					label: 'About',
					link: '/about/',
				},
				{
					label: '1️⃣ | Lab 1',
					autogenerate: { directory: 'lab-01' },
				},
				{
					label: '2️⃣ | Lab 2',
					autogenerate: { directory: 'lab-02' },
				},
			],
		}),

	],
});
