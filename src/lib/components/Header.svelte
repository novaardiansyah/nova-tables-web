<script lang="ts">
	import { Icon } from '#lib';
	import { appState, setLanguage, toggleTheme } from '#lib/stores/app';
	import { t } from '#lib/data/translations';
	import type { Lang } from '#lib/data/translations';
	import { goto } from '$app/navigation';

	let isOpen = $state(false);

	function handleNavClick(href: string, e: MouseEvent) {
		e.preventDefault();
		goto(href);
		isOpen = false;
	}

	function setLang(newLang: Lang) {
		setLanguage(newLang);
		isOpen = false;
	}
</script>

<nav class="w-full px-4 py-4 border-b border-paper-border/60 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur-md sticky top-0 z-50">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<button
			class="flex items-center gap-2 text-pine-950 dark:text-white text-xl font-bold hover:text-sage-600 dark:hover:text-sage-400 transition-colors cursor-pointer"
			on:click={() => handleNavClick('/', null as unknown as MouseEvent)}
		>
			<Icon name="database" class="w-6 h-6 text-sage-600 dark:text-sage-400" />
			<span>Nova Tables</span>
		</button>

		<div class="hidden md:flex items-center gap-6">
			<button
				class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-pine-700 hover:text-pine-950 dark:text-sage-300 dark:hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/', e)}
			>
				{ t('nav.home', appState.lang) }
			</button>
			<button
				class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-pine-700 hover:text-pine-950 dark:text-sage-300 dark:hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/privacy', e)}
			>
				{ t('nav.privacy', appState.lang) }
			</button>
			<button
				class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-pine-700 hover:text-pine-950 dark:text-sage-300 dark:hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/terms', e)}
			>
				{ t('nav.terms', appState.lang) }
			</button>
			<div class="relative inline-block group">
				<button
					class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine-900 hover:text-sage-600 dark:text-white dark:hover:text-sage-400 transition-colors cursor-pointer"
				>
					{ t('nav.language', appState.lang) } <Icon name="globe" class="w-3 h-3" />
				</button>
				<div class="absolute right-0 mt-1 w-40 bg-white dark:bg-[#111a14] border border-paper-border dark:border-white/10 rounded-lg shadow-lg py-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
					<button
						class="flex items-center gap-3 px-3 py-2 text-sm text-pine-950 dark:text-white hover:bg-sage-50 dark:hover:bg-white/5 w-full text-left cursor-pointer"
						on:click={() => setLang('en')}
					>
						English
					</button>
					<button
						class="flex items-center gap-3 px-3 py-2 text-sm text-pine-950 dark:text-white hover:bg-sage-50 dark:hover:bg-white/5 w-full text-left cursor-pointer"
						on:click={() => setLang('id')}
					>
						Indonesia
					</button>
				</div>
			</div>
			<button
				class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pine-900 hover:text-sage-600 dark:text-white dark:hover:text-sage-400 transition-colors cursor-pointer"
				on:click={toggleTheme}
			>
				{#if appState.theme === 'dark'}
					<Icon name="sun" class="w-3 h-3 text-amber-400" />
				{:else}
					<Icon name="moon" class="w-3 h-3 text-pine-700" />
				{/if}
				{ appState.theme === 'dark' ? t('nav.theme', appState.lang) + ' (Dark)' : t('nav.theme', appState.lang) + ' (Light)' }
			</button>
		</div>

		<button class="md:hidden flex items-center gap-2 text-pine-950 dark:text-white" on:click={() => (isOpen = !isOpen)}>
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
				<button class="text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white px-4 py-2 text-left cursor-pointer font-medium" on:click={(e) => handleNavClick('/', e)}>
					{ t('nav.home', appState.lang) }
				</button>
				<button class="text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white px-4 py-2 text-left cursor-pointer font-medium" on:click={(e) => handleNavClick('/privacy', e)}>
					{ t('nav.privacy', appState.lang) }
				</button>
				<button class="text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white px-4 py-2 text-left cursor-pointer font-medium" on:click={(e) => handleNavClick('/terms', e)}>
					{ t('nav.terms', appState.lang) }
				</button>
				<button class="text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white px-4 py-2 text-left flex items-center gap-2 mt-2 cursor-pointer font-medium" on:click={() => setLang('en')}>
					English
				</button>
				<button class="text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white px-4 py-2 text-left flex items-center gap-2 cursor-pointer font-medium" on:click={() => setLang('id')}>
					Indonesia
				</button>
				<button class="text-pine-800 dark:text-sage-300 hover:text-pine-950 dark:hover:text-white px-4 py-2 text-left flex items-center gap-2 mt-2 cursor-pointer font-medium" on:click={toggleTheme}>
					{ appState.theme === 'dark' ? t('nav.theme', appState.lang) + ' (Dark)' : t('nav.theme', appState.lang) + ' (Light)' }
				</button>
			</div>
		</div>
	{/if}
</nav>