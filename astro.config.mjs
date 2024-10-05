// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://amwnag.github.io/hive-wiki/',
    base: '/hive-wiki',
    integrations: [starlight({
        title: 'The HIVE Wiki',
        editLink: {
            baseUrl: 'https://github.com/amwnag/hive-wiki/edit/main/',
        },
        customCss: [
            './src/styles/override.css',
			'./src/styles/tailwind.css',
        ],
        logo: {
            light: './public/wiki-logo-light.svg',
            dark: './public/wiki-logo-dark.svg',
            replacesTitle: true
        },
        social: {
            github: 'https://github.com/amwnag/hive-wiki',
        },
        sidebar: [
            {
                label: 'Explore',
                items: [
                    'explore/intro',
                    'explore/electronics-benchtop',
                    'explore/3d-printing',
                    'explore/laser-cutting',
                    'explore/embedded-systems',
                    'explore/pcb',
                    'explore/machine-shop',
                    'explore/crafts',
                ],
            },
            {
                label: 'Workshop Docs',
                autogenerate: { directory: 'workshop' },
            },
            {
                label: 'Policies',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Rules and Policies', slug: 'policies/policies-main' },
                ],
            },
        ],
		}), 
		tailwind({
			applyBaseStyles: false,
		})],
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