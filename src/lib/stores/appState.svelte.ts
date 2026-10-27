import type { Lang } from '../data/translations';

class AppState {
	lang = $state<Lang>('en');
	theme = $state<'dark' | 'light'>('dark');

	constructor() {
		if (typeof window !== 'undefined') {
			const savedLang = localStorage.getItem('nova_lang') as Lang | null;
			if (savedLang === 'en' || savedLang === 'id') {
				this.lang = savedLang;
			}

			const savedTheme = localStorage.getItem('nova_theme') as 'dark' | 'light' | null;
			if (savedTheme === 'dark' || savedTheme === 'light') {
				this.theme = savedTheme;
			} else {
				this.theme = 'dark'; // default dark theme as requested
			}
			this.applyTheme();
		}
	}

	setLang(newLang: Lang) {
		this.lang = newLang;
		if (typeof window !== 'undefined') {
			localStorage.setItem('nova_lang', newLang);
		}
	}

	toggleTheme() {
		this.theme = this.theme === 'dark' ? 'light' : 'dark';
		if (typeof window !== 'undefined') {
			localStorage.setItem('nova_theme', this.theme);
			this.applyTheme();
		}
	}

	setTheme(newTheme: 'dark' | 'light') {
		this.theme = newTheme;
		if (typeof window !== 'undefined') {
			localStorage.setItem('nova_theme', newTheme);
			this.applyTheme();
		}
	}

	private applyTheme() {
		if (typeof document !== 'undefined') {
			if (this.theme === 'dark') {
				document.documentElement.classList.add('dark');
				document.documentElement.classList.remove('light');
			} else {
				document.documentElement.classList.add('light');
				document.documentElement.classList.remove('dark');
			}
		}
	}
}

export const appState = new AppState();