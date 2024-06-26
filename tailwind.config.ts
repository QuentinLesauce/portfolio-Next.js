import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class', // class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl: '2px -2px 15px var(--tw-shadow-color)',
        xxl: '2px 2px 32px var(--tw-shadow-color)',
      },
      colors: {
        customShadowLight: '#ABA498', // Custom light text shadow color
        customShadowDark: '#B7E7DB', // Custom dark text shadow color
        lightBackground: '#DBDAD9', // Custom light background color
        darkBackground: '#030303', // Custom dark background color
      }
		},
	},
	plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ]
};
export default config;
