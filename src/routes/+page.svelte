<script lang="ts">
	import { Icon, profile } from '#lib';
	import { appState } from '#lib/stores/app';
	import { t } from '#lib/data/translations';

	const screenshots = $derived([
		{
			src: '/demo/connections.png',
			alt: 'Connections screen',
			title: t('features.connections.title', appState.lang),
			description: t('features.connections.description', appState.lang)
		},
		{
			src: '/demo/connections-selection.png',
			alt: 'Connection selection',
			title: t('features.connections.title', appState.lang),
			description: t('features.connections.selection', appState.lang)
		},
		{
			src: '/demo/export-connections.png',
			alt: 'Export connections',
			title: t('features.connections.title', appState.lang),
			description: t('features.connections.export', appState.lang)
		},
		{
			src: '/demo/import-connections.png',
			alt: 'Import connections',
			title: t('features.connections.title', appState.lang),
			description: t('features.connections.import', appState.lang)
		},
		{
			src: '/demo/new-connection.png',
			alt: 'New connection screen',
			title: t('features.connections.title', appState.lang),
			description: t('features.connections.new', appState.lang)
		},
		{
			src: '/demo/cell-editing.png',
			alt: 'Cell editing screen',
			title: t('features.queries.title', appState.lang),
			description: t('features.queries.description', appState.lang)
		},
		{
			src: '/demo/changes.png',
			alt: 'Generated UPDATE statements',
			title: t('features.queries.title', appState.lang),
			description: t('features.queries.changes', appState.lang)
		},
		{
			src: '/demo/json-viewer.png',
			alt: 'JSON viewer screen',
			title: t('features.export.title', appState.lang),
			description: t('features.export.description', appState.lang)
		},
		{
			src: '/demo/cell-menu.png',
			alt: 'Cell context menu',
			title: t('features.queries.title', appState.lang),
			description: t('features.queries.cellMenu', appState.lang)
		},
		{
			src: '/demo/table-menu.png',
			alt: 'Table context menu',
			title: t('features.table.title', appState.lang),
			description: t('features.table.tableMenu', appState.lang)
		},
		{
			src: '/demo/settings.png',
			alt: 'Settings dialog',
			title: t('features.theme.title', appState.lang),
			description: t('features.theme.settings', appState.lang)
		}
	]);

	const features = $derived([
		{ icon: 'database', title: t('features.connections.title', appState.lang), description: t('features.connections.description', appState.lang) },
		{ icon: 'code', title: t('features.queries.title', appState.lang), description: t('features.queries.description', appState.lang) },
		{ icon: 'table', title: t('features.table.title', appState.lang), description: t('features.table.description', appState.lang) },
		{ icon: 'download', title: t('features.export.title', appState.lang), description: t('features.export.description', appState.lang) },
		{ icon: 'shield', title: t('features.security.title', appState.lang), description: t('features.security.description', appState.lang) },
		{ icon: 'sun', title: t('features.theme.title', appState.lang), description: t('features.theme.description', appState.lang) }
	]);

	const techItems = $derived([
		{ key: 'database', label: t('features.tech.items.electron', appState.lang) },
		{ key: 'code', label: t('features.tech.items.monaco', appState.lang) },
		{ key: 'device', label: t('features.tech.items.sqlserver', appState.lang) },
		{ key: 'shield', label: t('features.tech.items.tailwind', appState.lang) },
		{ key: 'layers', label: t('features.tech.items.vite', appState.lang) }
	]);
</script>

<svelte:head>
	<title>{profile.name} - Nova Tables</title>
	<meta name="description" content={t('hero.subtitle', appState.lang)} />
</svelte:head>

<div class="relative min-h-screen overflow-hidden bg-paper-base text-pine-950 dark:bg-surface-dark-base dark:text-white transition-colors duration-300">

	<!-- Hero Section -->
	<section class="relative">
		<div class="pointer-events-none absolute -top-48 right-0 h-[34rem] w-[34rem] rounded-full bg-sage-300/40 blur-3xl dark:bg-sage-500/10"></div>
		<div class="pointer-events-none absolute -bottom-48 left-0 h-[26rem] w-[26rem] rounded-full bg-pine-500/10 blur-3xl dark:bg-pine-500/10"></div>

		<div class="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 md:py-24 lg:grid-cols-2 lg:gap-10 lg:py-32">
			<div>
				<h1 class="text-5xl font-bold leading-[1.02] tracking-tight text-pine-950 sm:text-6xl lg:text-7xl dark:text-white">
					{t('hero.title', appState.lang)}
				</h1>
				<p class="mt-6 max-w-xl text-lg text-pine-700 md:text-xl dark:text-sage-300">
					{t('hero.subtitle', appState.lang)}
				</p>
				<div class="mt-8 flex flex-wrap items-center gap-3">
					<a
						href={t('hero.url')}
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center gap-2 rounded-full bg-pine-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pine-900/20 transition-colors hover:bg-pine-800 dark:bg-sage-400 dark:text-pine-950 dark:shadow-none dark:hover:bg-sage-300"
					>
						{t('hero.cta')}
						<Icon name="external-link" class="h-4 w-4" />
					</a>
					<a
						href="#features"
						class="inline-flex items-center rounded-full border border-paper-border bg-white/60 px-6 py-3 text-sm font-semibold text-pine-800 transition-colors hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-sage-200 dark:hover:bg-white/10"
					>
						{t('features.title', appState.lang)}
					</a>
				</div>
			</div>

			<div class="relative">
				<div class="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-sage-400/25 via-transparent to-pine-500/25 blur-2xl dark:from-sage-500/10 dark:to-pine-500/10"></div>
				<div class="relative grid grid-cols-2 gap-3 md:gap-4">
					{#each screenshots as screenshot, i}
						<div
							class="group relative w-full overflow-hidden rounded-xl border border-paper-border bg-white shadow-sm shadow-pine-900/5 dark:border-white/10 dark:bg-surface-dark-card dark:shadow-black/40 {i % 2 === 0
								? 'col-span-2 aspect-[21/9]'
								: 'aspect-[16/10]'}"
						>
							<img
								src={screenshot.src}
								alt={screenshot.alt}
								class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
							/>
							<div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<div>
									<h3 class="font-semibold text-white">{screenshot.title}</h3>
									<p class="mt-1 line-clamp-2 max-w-sm text-xs text-sage-200">{screenshot.description}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
		<div>
			<h2 class="text-3xl font-bold tracking-tight text-pine-950 md:text-4xl dark:text-white">{t('about.title', appState.lang)}</h2>
			<p class="mt-5 text-base leading-relaxed text-pine-700 md:text-lg dark:text-sage-300">{t('about.description', appState.lang)}</p>
			<div class="mt-8 rounded-2xl border border-paper-border bg-paper-subtle/70 p-6 dark:border-white/10 dark:bg-surface-dark-card">
				<p class="text-sm font-semibold text-pine-900 dark:text-sage-100"><strong>{t('about.note', appState.lang)}</strong></p>
				<p class="mt-1 text-sm leading-relaxed text-pine-700 dark:text-sage-300">{t('about.noteDetail', appState.lang)}</p>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section id="features" class="relative border-y border-paper-border bg-paper-subtle/50 dark:border-white/10 dark:bg-surface-dark-card/40">
		<div class="mx-auto max-w-7xl px-4 py-16 md:py-24">
			<div class="mb-12">
				<h2 class="text-3xl font-bold tracking-tight text-pine-950 md:text-4xl dark:text-white">{t('features.title', appState.lang)}</h2>
				<div class="mt-4 h-1 w-16 rounded-full bg-sage-500"></div>
			</div>
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each features as feature}
					<div class="group flex items-start gap-4 rounded-2xl border border-paper-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage-400 hover:shadow-lg hover:shadow-pine-900/5 dark:border-white/10 dark:bg-surface-dark-card dark:hover:border-sage-500/50 dark:hover:shadow-black/30">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-600 transition-colors group-hover:bg-sage-500 group-hover:text-white dark:bg-sage-500/15 dark:text-sage-300 dark:group-hover:bg-sage-500 dark:group-hover:text-pine-950">
							<Icon name={feature.icon} class="h-5 w-5" />
						</span>
						<div>
							<h3 class="text-base font-semibold text-pine-950 dark:text-white">{feature.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-pine-700 dark:text-sage-300">{feature.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Tech Stack Section -->
	<section class="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-pine-950 md:text-4xl dark:text-white">{t('features.tech.title', appState.lang)}</h2>
		</div>
		<div class="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
			{#each techItems as item}
				<div class="flex items-center gap-2 rounded-full border border-paper-border bg-white px-4 py-2 text-sm font-medium text-pine-800 shadow-sm dark:border-white/10 dark:bg-surface-dark-card dark:text-sage-200">
					<Icon name={item.key} class="h-4 w-4 text-sage-600 dark:text-sage-300" />
					<span>{item.label}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Closing CTA -->
	<section class="relative mx-auto max-w-7xl px-4 pb-20">
		<div class="relative overflow-hidden rounded-3xl border border-paper-border bg-gradient-to-br from-sage-50 via-paper-subtle to-white px-6 py-14 text-center md:px-16 dark:border-white/10 dark:from-surface-dark-card dark:via-surface-dark-subtle dark:to-surface-dark-base">
			<div class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sage-400/20 blur-3xl dark:bg-sage-500/10"></div>
			<h2 class="relative text-3xl font-bold tracking-tight text-pine-950 md:text-4xl dark:text-white">{t('hero.title', appState.lang)}</h2>
			<p class="relative mx-auto mt-4 max-w-xl text-base text-pine-700 dark:text-sage-300">{t('hero.subtitle', appState.lang)}</p>
			<a
				href={t('hero.url')}
				target="_blank"
				rel="noreferrer"
				class="relative mt-8 inline-flex items-center gap-2 rounded-full bg-pine-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pine-900/20 transition-colors hover:bg-pine-800 dark:bg-sage-400 dark:text-pine-950 dark:shadow-none dark:hover:bg-sage-300"
			>
				{t('hero.cta')}
				<Icon name="external-link" class="h-4 w-4" />
			</a>
		</div>
	</section>
</div>