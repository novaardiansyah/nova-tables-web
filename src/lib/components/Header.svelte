<script lang="ts">
	import { Icon } from '#lib';
	import { appState, setLanguage, toggleTheme } from '#lib/stores/app';
	import { t } from '#lib/data/translations';
	import type { Lang } from '#lib/data/translations';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let isOpen = $state(false);

	function handleNavClick(href: string, e?: MouseEvent) {
		e?.preventDefault();
		goto(href);
		isOpen = false;
	}

	function setLang(newLang: Lang) {
		setLanguage(newLang);
		isOpen = false;
	}

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

<nav class="w-full px-4 py-4 border-b border-paper-border/60 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur-md sticky top-0 z-50">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<button
			class="flex items-center gap-2.5 text-pine-950 dark:text-white text-xl font-bold hover:opacity-90 transition-opacity cursor-pointer"
			onclick={() => handleNavClick('/')}
		>
			<img src="/logo.png" alt="Nova Tables Logo" class="h-8 w-8 rounded-lg shadow-sm object-contain" />
			<span class="tracking-tight">Nova Tables</span>
		</button>

		<div class="hidden md:flex items-center gap-6">
			<button
				class="flex items-center gap-1 text-xs uppercase tracking-wider transition-colors cursor-pointer {isActive('/') ? 'text-sage-600 dark:text-sage-400 font-bold border-b-2 border-sage-500 pb-0.5' : 'text-pine-700 hover:text-pine-950 dark:text-sage-300 dark:hover:text-white font-semibold'}"
				onclick={(e) => handleNavClick('/', e)}
			>
				{ t('nav.home', appState.lang) }
			</button>
			<button
				class="flex items-center gap-1 text-xs uppercase tracking-wider transition-colors cursor-pointer {isActive('/privacy-policy') ? 'text-sage-600 dark:text-sage-400 font-bold border-b-2 border-sage-500 pb-0.5' : 'text-pine-700 hover:text-pine-950 dark:text-sage-300 dark:hover:text-white font-semibold'}"
				onclick={(e) => handleNavClick('/privacy-policy', e)}
			>
				{ t('nav.privacy', appState.lang) }
			</button>
			<button
				class="flex items-center gap-1 text-xs uppercase tracking-wider transition-colors cursor-pointer {isActive('/terms-of-service') ? 'text-sage-600 dark:text-sage-400 font-bold border-b-2 border-sage-500 pb-0.5' : 'text-pine-700 hover:text-pine-950 dark:text-sage-300 dark:hover:text-white font-semibold'}"
				onclick={(e) => handleNavClick('/terms-of-service', e)}
			>
				{ t('nav.terms', appState.lang) }
			</button>

			<div class="h-4 w-px bg-paper-border dark:bg-white/10 mx-1"></div>

			<!-- Language Switcher (Icon Only) -->
			<div class="relative inline-block group">
				<button
					class="flex items-center justify-center p-2 rounded-lg text-pine-800 hover:text-sage-600 hover:bg-sage-50/60 dark:text-sage-300 dark:hover:text-white dark:hover:bg-white/5 transition-colors cursor-pointer"
					aria-label={t('nav.language', appState.lang)}
					title={t('nav.language', appState.lang)}
				>
					<Icon name="globe" class="w-4 h-4" />
				</button>
				<div class="absolute right-0 mt-1 w-36 bg-white dark:bg-[#111a14] border border-paper-border dark:border-white/10 rounded-lg shadow-lg py-1 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
					<button
						class="flex items-center justify-between px-3 py-2 text-xs text-pine-950 dark:text-white hover:bg-sage-50 dark:hover:bg-white/5 w-full text-left cursor-pointer {appState.lang === 'en' ? 'font-bold text-sage-600 dark:text-sage-400' : ''}"
						onclick={() => setLang('en')}
					>
						<span>English</span>
						{#if appState.lang === 'en'}
							<Icon name="check" class="w-3.5 h-3.5" />
						{/if}
					</button>
					<button
						class="flex items-center justify-between px-3 py-2 text-xs text-pine-950 dark:text-white hover:bg-sage-50 dark:hover:bg-white/5 w-full text-left cursor-pointer {appState.lang === 'id' ? 'font-bold text-sage-600 dark:text-sage-400' : ''}"
						onclick={() => setLang('id')}
					>
						<span>Indonesia</span>
						{#if appState.lang === 'id'}
							<Icon name="check" class="w-3.5 h-3.5" />
						{/if}
					</button>
				</div>
			</div>

			<!-- Theme Toggle (Icon Only) -->
			<button
				class="flex items-center justify-center p-2 rounded-lg text-pine-800 hover:text-sage-600 hover:bg-sage-50/60 dark:text-sage-300 dark:hover:text-white dark:hover:bg-white/5 transition-colors cursor-pointer"
				onclick={toggleTheme}
				aria-label={appState.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				title={appState.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{#if appState.theme === 'dark'}
					<Icon name="sun" class="w-4 h-4 text-amber-400" />
				{:else}
					<Icon name="moon" class="w-4 h-4 text-pine-700" />
				{/if}
			</button>
		</div>

		<!-- Mobile menu toggle button -->
		<button
			class="md:hidden flex items-center justify-center p-2 rounded-lg text-pine-950 dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
			onclick={() => (isOpen = !isOpen)}
			aria-label="Toggle navigation menu"
		>
			<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="3" y1="12" x2="21" y2="12" />
				<line x1="3" y1="6" x2="21" y2="6" />
				<line x1="3" y1="18" x2="21" y2="18" />
			</svg>
		</button>
	</div>

	{#if isOpen}
		<div class="absolute top-full left-0 w-full border-t border-paper-border dark:border-white/10 bg-white/95 dark:bg-black/90 backdrop-blur-md py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
			<div class="max-w-7xl mx-auto px-4 flex flex-col gap-2">
				<button
					class="px-4 py-2 text-left cursor-pointer rounded-lg text-sm {isActive('/') ? 'text-sage-600 dark:text-sage-400 font-bold bg-sage-50 dark:bg-white/5' : 'text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white font-medium'}"
					onclick={(e) => handleNavClick('/', e)}
				>
					{ t('nav.home', appState.lang) }
				</button>
				<button
					class="px-4 py-2 text-left cursor-pointer rounded-lg text-sm {isActive('/privacy-policy') ? 'text-sage-600 dark:text-sage-400 font-bold bg-sage-50 dark:bg-white/5' : 'text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white font-medium'}"
					onclick={(e) => handleNavClick('/privacy-policy', e)}
				>
					{ t('nav.privacy', appState.lang) }
				</button>
				<button
					class="px-4 py-2 text-left cursor-pointer rounded-lg text-sm {isActive('/terms-of-service') ? 'text-sage-600 dark:text-sage-400 font-bold bg-sage-50 dark:bg-white/5' : 'text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white font-medium'}"
					onclick={(e) => handleNavClick('/terms-of-service', e)}
				>
					{ t('nav.terms', appState.lang) }
				</button>
				<div class="h-px bg-paper-border dark:bg-white/10 my-1"></div>
				<div class="flex items-center justify-between px-4 py-2">
					<div class="flex items-center gap-2">
						<button
							class="text-xs px-2.5 py-1 rounded border {appState.lang === 'en' ? 'border-sage-500 bg-sage-100 text-sage-800 dark:bg-sage-500/20 dark:text-sage-300 font-bold' : 'border-paper-border text-pine-700 dark:text-sage-400 dark:border-white/10'}"
							onclick={() => setLang('en')}
						>
							English
						</button>
						<button
							class="text-xs px-2.5 py-1 rounded border {appState.lang === 'id' ? 'border-sage-500 bg-sage-100 text-sage-800 dark:bg-sage-500/20 dark:text-sage-300 font-bold' : 'border-paper-border text-pine-700 dark:text-sage-400 dark:border-white/10'}"
							onclick={() => setLang('id')}
						>
							Indonesia
						</button>
					</div>
					<button
						class="flex items-center gap-2 p-2 rounded-lg text-pine-800 dark:text-sage-300 cursor-pointer"
						onclick={toggleTheme}
						aria-label="Toggle theme"
					>
						{#if appState.theme === 'dark'}
							<Icon name="sun" class="w-4 h-4 text-amber-400" />
						{:else}
							<Icon name="moon" class="w-4 h-4 text-pine-700" />
						{/if}
					</button>
				</div>
			</div>
		</div>
	{/if}
</nav>