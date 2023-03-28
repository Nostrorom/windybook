import type { Preview } from '@storybook/svelte';
import '../src/tailwind.css';
import { withThemeByClassName } from '@storybook/addon-styling';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
};

export const decorators = [
	withThemeByClassName({
		themes: {
			light: 'light',
			dark: 'dark'
		},
		defaultTheme: 'dark'
	})
];

export default preview;
