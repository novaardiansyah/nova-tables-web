<script lang="ts">
	import { appState } from '#lib/stores/app';
	import { t } from '#lib/data/translations';

	const sections = $derived([
		{ title: t('privacy.section1.title', appState.lang), content: t('privacy.section1.content', appState.lang) },
		{ title: t('privacy.section2.title', appState.lang), content: t('privacy.section2.content', appState.lang) },
		{ title: t('privacy.section3.title', appState.lang), content: t('privacy.section3.content', appState.lang) },
		{ title: t('privacy.section4.title', appState.lang), content: t('privacy.section4.content', appState.lang) },
		{ title: t('privacy.section5.title', appState.lang), content: t('privacy.section5.content', appState.lang) },
	]);
</script>

<svelte:head>
	<title>{t('privacy.title', appState.lang)} - Nova Tables</title>
	<meta name="description" content={t('privacy.intro', appState.lang)} />
</svelte:head>

<div class="relative min-h-screen overflow-hidden bg-paper-base text-pine-950 transition-colors duration-300 dark:bg-surface-dark-base dark:text-white">
	<div class="mx-auto max-w-3xl px-4 py-16 md:py-24">
		<h1 class="mb-6 text-4xl font-bold tracking-tight text-pine-950 md:text-5xl dark:text-white">
			{t('privacy.title', appState.lang)}
		</h1>
		<p class="mb-12 text-lg text-pine-700 dark:text-sage-300">
			{t('privacy.intro', appState.lang)}
		</p>

		<div class="space-y-6">
			{#each sections as section}
				<div class="rounded-2xl border border-paper-border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-surface-dark-card dark:shadow-black/30">
					<h2 class="mb-3 text-xl font-semibold text-pine-950 dark:text-white">
						{section.title}
					</h2>
					<p class="text-sm leading-relaxed text-pine-700 dark:text-sage-300">
						{section.content}
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>