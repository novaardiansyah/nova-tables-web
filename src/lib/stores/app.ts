import { appState } from './appState.svelte';
import type { Lang } from '../data/translations';

export { appState };
export const language = appState;
export const theme = appState;

// Language setter
export function setLanguage(newLang: Lang) {
	appState.setLang(newLang);
}

// Theme toggle
export function toggleTheme() {
	appState.toggleTheme();
}

// Theme setter
export function setTheme(newTheme: 'dark' | 'light') {
	appState.setTheme(newTheme);
}