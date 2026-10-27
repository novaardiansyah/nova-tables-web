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

<nav class="w-full px-4 py-4 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<button
			class="flex items-center gap-2 text-white text-xl font-bold hover:text-sage-500 transition-colors cursor-pointer"
			on:click={() => handleNavClick('/', null as unknown as MouseEvent)}
		>
			<Icon name="database" class="w-6 h-6 text-sage-500" />
			<span>Nova Tables</span>
		</button>

		<div class="hidden md:flex items-center gap-6">
			<button
				class="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-sage-400 hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/', e)}
			>
				{ t('nav.home', appState.lang) }
			</button>
			<button
				class="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-sage-400 hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/privacy', e)}
			>
				{ t('nav.privacy', appState.lang) }
			</button>
			<button
				class="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-sage-400 hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/terms', e)}
			>
				{ t('nav.terms', appState.lang) }
			</button>
			<div class="relative inline-block group">
				<button
					class="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white hover:text-sage-500 transition-colors cursor-pointer"
				>
					{ t('nav.language', appState.lang) } <Icon name="globe" class="w-3 h-3" />
				</button>
				<div class="absolute right-0 mt-1 w-40 bg-white border border-white/20 rounded-lg shadow-lg py-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
					<button
						class="flex items-center gap-3 px-3 py-2 text-sm text-sage-900 hover:bg-sage-100 w-full text-left cursor-pointer"
						on:click={() => setLang('en')}
					>
						English
					</button>
					<button
						class="flex items-center gap-3 px-3 py-2 text-sm text-sage-900 hover:bg-sage-100 w-full text-left cursor-pointer"
						on:click={() => setLang('id')}
					>
						Indonesia
					</button>
				</div>
			</div>
			<button
				class="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white hover:text-sage-500 transition-colors cursor-pointer"
				on:click={toggleTheme}
			>
				{#if appState.theme === 'dark'}
					<Icon name="sun" class="w-3 h-3" />
				{:else}
					<Icon name="moon" class="w-3 h-3" />
				{/if}
				{ appState.theme === 'dark' ? t('nav.theme', appState.lang) + ' (Dark)' : t('nav.theme', appState.lang) + ' (Light)' }
			</button>
		</div>

		<button class="md:hidden flex items-center gap-2 text-white" on:click={() => (isOpen = !isOpen)}>
			<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="3" y1="12" x2="21" y2="12" />
				<line x1="3" y1="6" x2="21" y2="6" />
				<line x1="3" y1="18" x2="21" y2="18" />
			</svg>
		</button>
	</div>

	{#if isOpen}
		<div class="absolute top-full left-0 w-full border-t border-white/10 bg-black/90 backdrop-blur-md py-4 animate-in fade-in slide-in-from-top-2 duration-200">
			<div class="max-w-7xl mx-auto px-4 flex flex-col gap-2">
				<button class="text-sage-500 hover:text-white px-4 py-2 text-left cursor-pointer" on:click={(e) => handleNavClick('/', e)}>
					{ t('nav.home', appState.lang) }
				</button>
				<button class="text-sage-500 hover:text-white px-4 py-2 text-left cursor-pointer" on:click={(e) => handleNavClick('/privacy', e)}>
					{ t('nav.privacy', appState.lang) }
				</button>
				<button class="text-sage-500 hover:text-white px-4 py-2 text-left cursor-pointer" on:click={(e) => handleNavClick('/terms', e)}>
					{ t('nav.terms', appState.lang) }
				</button>
				<button class="text-sage-500 hover:text-white px-4 py-2 text-left flex items-center gap-2 mt-2 cursor-pointer" on:click={() => setLang('en')}>
					English
				</button>
				<button class="text-sage-500 hover:text-white px-4 py-2 text-left flex items-center gap-2 cursor-pointer" on:click={() => setLang('id')}>
					Indonesia
				</button>
				<button class="text-sage-500 hover:text-white px-4 py-2 text-left flex items-center gap-2 mt-2 cursor-pointer" on:click={toggleTheme}>
					{ appState.theme === 'dark' ? t('nav.theme', appState.lang) + ' (Dark)' : t('nav.theme', appState.lang) + ' (Light)' }
				</button>
			</div>
		</div>
	{/if}
</nav>