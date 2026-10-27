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
			src: '/demo/cell-editing.png',
			alt: 'Cell editing screen',
			title: t('features.queries.title', appState.lang),
			description: t('features.queries.description', appState.lang)
		},
		{
			src: '/demo/json-viewer.png',
			alt: 'JSON viewer screen',
			title: t('features.export.title', appState.lang),
			description: t('features.export.description', appState.lang)
		}
	]);

	const features = $derived([
		{
			title: t('features.connections.title', appState.lang),
			description: t('features.connections.description', appState.lang)
		},
		{
			title: t('features.queries.title', appState.lang),
			description: t('features.queries.description', appState.lang)
		},
		{
			title: t('features.table.title', appState.lang),
			description: t('features.table.description', appState.lang)
		},
		{
			title: t('features.export.title', appState.lang),
			description: t('features.export.description', appState.lang)
		},
		{
			title: t('features.security.title', appState.lang),
			description: t('features.security.description', appState.lang)
		},
		{
			title: t('features.theme.title', appState.lang),
			description: t('features.theme.description', appState.lang)
		}
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

<div class="relative bg-paper-base min-h-screen overflow-x-hidden dark:bg-[#0b120e] transition-colors duration-300">

	<!-- Hero Section -->
	<section class="mx-auto max-w-7xl px-4 py-12 md:py-20">
		<div class="grid lg:grid-cols-2 gap-12 md:gap-8 items-center">
			<div>
				<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-pine-950 dark:text-[#e7f1ea] tracking-tighter mb-4">
					{t('hero.title', appState.lang)}
				</h1>
				<p class="text-sage-600 dark:text-sage-400 text-lg md:text-xl mb-6 max-w-xl">
					{t('hero.subtitle', appState.lang)}
				</p>
				<a
					href={t('hero.url')}
					target="_blank"
					rel="noreferrer"
					class="inline-block bg-sage-600 dark:bg-sage-500 text-paper-base font-semibold text-sm px-6 py-3 rounded-full hover:bg-sage-700 dark:hover:bg-sage-600 transition-colors"
				>
					{t('hero.cta')}
				</a>
			</div>

			<div class="relative">
				<div class="grid grid-cols-2 gap-4">
					{#each screenshots as screenshot}
						<div
							class="relative group border border-white/10 dark:border-sage-800 rounded-lg overflow-hidden bg-white dark:bg-paper-card"
						>
							<img
								src={screenshot.src}
								alt={screenshot.alt}
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 hover:opacity-95"
							/>
							<div
								class="absolute inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							>
								<div class="text-center">
									<h3 class="text-white font-bold text-lg">{screenshot.title}</h3>
									<p class="text-sage-300 dark:text-sage-200 mt-1 text-sm line-clamp-2 max-w-xs">{screenshot.description}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- App features mini tags -->
				<div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
					{#each features.slice(0, 3) as feature}
						<div
							class="flex items-center gap-2 px-3 py-2 rounded-full bg-black/50 dark:bg-paper-subtle/50 backdrop-blur-md text-sage-400 text-xs"
						>
							<Icon name="check" class="w-3 h-3 text-sage-500" />
							<span class="truncate max-w-[200px]">{ feature.title }</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="mx-auto max-w-7xl px-4 py-16 bg-white dark:bg-paper-card md:py-24">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-pine-950 dark:text-[#e7f1ea] mb-6">{t('about.title', appState.lang)}</h2>
			<p class="text-pine-800 dark:text-pine-300 mb-6 line-clamp-4">{t('about.description', appState.lang)}</p>
			<div class="bg-sage-50 dark:bg-pine-900 p-6 rounded-lg mb-6">
				<p class="text-sage-700 dark:text-sage-300 text-sm"><strong>{t('about.note', appState.lang)}</strong></p>
				<p class="text-sage-600 dark:text-sage-400 text-sm">{t('about.noteDetail', appState.lang)}</p>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="mx-auto max-w-7xl px-4 py-16 bg-paper-base dark:bg-[#0b120e]">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-3xl font-bold text-pine-950 dark:text-[#e7f1ea] mb-12">{t('features.title', appState.lang)}</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each features as feature}
					<div
						class="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-paper-card transition-all hover:bg-sage-50 dark:hover:bg-pine-900 duration-300"
					>
						<Icon name="check" class="w-5 h-5 text-sage-500 mt-1" />
						<div>
							<h3 class="text-pine-950 dark:text-[#e7f1ea] font-medium text-sm mb-1">{ feature.title }</h3>
							<p class="text-pine-600 dark:text-pine-400 text-sm leading-relaxed">{ feature.description }</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Tech Stack Section -->
	<section class="mx-auto max-w-7xl px-4 py-16 bg-[#0b120e]">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-3xl font-bold text-white mb-12">{t('features.tech.title', appState.lang)}</h2>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
				{#each techItems as item}
					<div
						class="flex items-center gap-2 px-4 py-2 rounded-full bg-paper-subtle text-sage-400 text-sm"
					>
						<Icon name={item.key} class="w-3 h-3 text-sage-500" />
						<span>{item.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Footer spacer -->
	<div class="py-6"></div>
</div>