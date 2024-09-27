// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://amwnag.github.io/hive-wiki/',
	base: '/hive-wiki',
	integrations: [
		starlight({
			title: 'The HIVE Wiki',
			customCss: [
				'./src/styles/override.css',
			],
			social: {
				github: 'https://github.com/amwnag/hive-wiki',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'introduction' },
				},
				{
					label: 'Policies',
					autogenerate: { directory: 'policies' },
				},
				{
					label: 'Workshop Docs',
					autogenerate: { directory: 'workshop' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					content: { type: 'text', value: ' 🔗' }
				},
			],
		],
	},
});
