import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: 'BellJs',
				es: 'BellJs',
			},
			defaultLocale: 'root',
			locales: {
				root: {
				  label: 'English',
				  lang: 'en', // lang es obligatorio para los locales raíz
				},
				'es': {
				  label: 'Español',
				  lang: 'es-ES',
				},
			},
			customCss:['./src/styles.css'],
			social: {
				github: 'https://github.com/Dsgnr-JM/bell',
			},
			sidebar: [
				{
					label: "Concepts Main",
					translations:{
						"es": "Conceptos Principales"
					},
					autogenerate:{ directory: 'concepts'}
				},
				{
					label: "Started",
					translations:{
						"es": "Empezando"
					},
					autogenerate:{ directory: 'getting-started'}
				},
				{
					label: "Learning the basics",
					translations:{
						"es": "Aprendiendo lo basico"
					},
					autogenerate:{ directory: 'learning-the-basic'}
				},
				{
					label: "Api and references",
					translations:{
						"es": "Api y referencias"
					},
					autogenerate:{ directory: 'api'}
				},
			],
		}),
	],
});
