<script lang="ts">
	import { Icon, appState, setLanguage, toggleTheme } from '#lib';
	import { landingContent, links } from '#lib/data/landing';
	import type { Lang } from '#lib/data/translations';

	const content = $derived(landingContent[appState.lang]);

	let isOpen = $state(false);

	$effect(() => {
		if (!isOpen) {
			return;
		}

		const previous = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previous;
		};
	});

	function closeMenu() {
		isOpen = false;
	}

	function chooseLang(lang: Lang, event: MouseEvent) {
		setLanguage(lang);
		const details = (event.currentTarget as HTMLElement).closest('details') as HTMLDetailsElement | null;
		if (details) {
			details.open = false;
		}
	}
</script>

<header class="sticky top-0 z-50 border-b border-line bg-header backdrop-blur-xl">
	<nav
		class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8"
		aria-label="Primary"
	>
		<a href="/" class="group flex shrink-0 items-center gap-2.5" aria-label="Nova Tables home">
			<img
				src="/logo.png"
				alt=""
				width="28"
				height="28"
				class="h-7 w-7 rounded-[7px] object-contain"
			/>
			<span class="text-[15px] font-semibold tracking-tight text-ink">Nova Tables</span>
		</a>

		<div class="hidden items-center gap-7 lg:flex">
			<a
				href="/#features"
				class="text-[13px] font-medium text-muted transition-colors hover:text-ink"
			>
				{content.nav.features}
			</a>
			<a
				href="/#capabilities"
				class="text-[13px] font-medium text-muted transition-colors hover:text-ink"
			>
				{content.nav.capabilities}
			</a>
			<a
				href="/#security"
				class="text-[13px] font-medium text-muted transition-colors hover:text-ink"
			>
				{content.nav.security}
			</a>
			<a
				href={links.documentation}
				target="_blank"
				rel="noreferrer"
				class="text-[13px] font-medium text-muted transition-colors hover:text-ink"
			>
				{content.nav.documentation}
			</a>
			<a
				href={links.github}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-ink"
			>
				<Icon name="github" class="h-3.5 w-3.5" />
				{content.nav.github}
			</a>
		</div>

		<div class="flex items-center gap-1 sm:gap-2">
			<button
				type="button"
				class="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-muted hover:text-ink"
				onclick={toggleTheme}
				aria-label={appState.theme === 'dark' ? content.nav.themeToLight : content.nav.themeToDark}
				title={appState.theme === 'dark' ? content.nav.themeToLight : content.nav.themeToDark}
			>
				{#if appState.theme === 'dark'}
					<Icon name="sun" class="h-4 w-4" />
				{:else}
					<Icon name="moon" class="h-4 w-4" />
				{/if}
			</button>

			<details class="group relative hidden sm:block">
				<summary
					class="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-muted hover:text-ink [&::-webkit-details-marker]:hidden"
					aria-label={content.nav.language}
					title={content.nav.language}
				>
					<Icon name="globe" class="h-4 w-4" />
				</summary>
				<div
					class="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border border-line bg-elevated p-1 shadow-2xl shadow-black/20"
				>
					<button
						type="button"
						class="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-surface-muted {appState.lang === 'en'
							? 'font-semibold text-ink'
							: 'text-muted'}"
						onclick={(event) => chooseLang('en', event)}
					>
						English
						{#if appState.lang === 'en'}
							<Icon name="check" class="h-3.5 w-3.5 text-accent" />
						{/if}
					</button>
					<button
						type="button"
						class="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-surface-muted {appState.lang === 'id'
							? 'font-semibold text-ink'
							: 'text-muted'}"
						onclick={(event) => chooseLang('id', event)}
					>
						Indonesia
						{#if appState.lang === 'id'}
							<Icon name="check" class="h-3.5 w-3.5 text-accent" />
						{/if}
					</button>
				</div>
			</details>

			<a
				href="/#download"
				class="ml-1 hidden items-center gap-1.5 rounded-md bg-ink px-3.5 py-2 text-[13px] font-semibold text-page transition-opacity hover:opacity-90 sm:inline-flex"
			>
				{content.nav.download}
				<Icon name="arrow-right" class="h-3.5 w-3.5" />
			</a>

			<button
				type="button"
				class="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-muted hover:text-ink lg:hidden"
				onclick={() => (isOpen = !isOpen)}
				aria-label={isOpen ? content.nav.close : content.nav.menu}
				aria-expanded={isOpen}
				aria-controls="mobile-navigation"
			>
				<Icon name={isOpen ? 'x' : 'menu'} class="h-5 w-5" />
			</button>
		</div>
	</nav>

	{#if isOpen}
		<div id="mobile-navigation" class="border-t border-line bg-header backdrop-blur-xl lg:hidden">
			<div class="mx-auto w-full max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
				<div class="flex flex-col gap-1">
					<a
						href="/#features"
						class="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-ink"
						onclick={closeMenu}
					>
						{content.nav.features}
					</a>
					<a
						href="/#capabilities"
						class="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-ink"
						onclick={closeMenu}
					>
						{content.nav.capabilities}
					</a>
					<a
						href="/#security"
						class="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-ink"
						onclick={closeMenu}
					>
						{content.nav.security}
					</a>
					<a
						href={links.documentation}
						target="_blank"
						rel="noreferrer"
						class="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-ink"
						onclick={closeMenu}
					>
						{content.nav.documentation}
					</a>
					<a
						href={links.github}
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-ink"
						onclick={closeMenu}
					>
						<Icon name="github" class="h-4 w-4" />
						{content.nav.github}
					</a>
				</div>

				<div class="mt-4 flex items-center justify-between border-t border-line pt-4">
					<div class="flex items-center gap-1.5">
						<button
							type="button"
							class="rounded-md px-3 py-1.5 text-xs transition-colors {appState.lang === 'en'
								? 'bg-surface-muted font-semibold text-ink'
								: 'text-muted hover:text-ink'}"
							onclick={() => setLanguage('en')}
						>
							English
						</button>
						<button
							type="button"
							class="rounded-md px-3 py-1.5 text-xs transition-colors {appState.lang === 'id'
								? 'bg-surface-muted font-semibold text-ink'
								: 'text-muted hover:text-ink'}"
							onclick={() => setLanguage('id')}
						>
							Indonesia
						</button>
					</div>

					<a
						href="/#download"
						class="inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-[13px] font-semibold text-page"
						onclick={closeMenu}
					>
						{content.nav.download}
						<Icon name="arrow-right" class="h-3.5 w-3.5" />
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
