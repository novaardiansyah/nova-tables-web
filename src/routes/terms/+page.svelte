<script lang="ts">
	import { appState } from '#lib/stores/app';
	import { t } from '#lib/data/translations';

	const sections = $derived([
		{ title: t('terms.section1.title', appState.lang), content: t('terms.section1.content', appState.lang) },
		{ title: t('terms.section2.title', appState.lang), content: t('terms.section2.content', appState.lang) },
		{ title: t('terms.section3.title', appState.lang), content: t('terms.section3.content', appState.lang) },
		{ title: t('terms.section4.title', appState.lang), content: t('terms.section4.content', appState.lang) },
		{ title: t('terms.section5.title', appState.lang), content: t('terms.section5.content', appState.lang) },
	]);
</script>

<svelte:head>
	<title>{t('terms.title', appState.lang)} - Nova Tables</title>
	<meta name="description" content={t('terms.intro', appState.lang)} />
</svelte:head>

<div class="relative bg-paper-base min-h-screen overflow-x-hidden dark:bg-[#0b120e] transition-colors duration-300">
	<div class="mx-auto max-w-3xl px-4 py-16 md:py-24">
		<h1 class="text-4xl md:text-5xl font-bold text-pine-950 dark:text-[#e7f1ea] tracking-tighter mb-6">
			{t('terms.title', appState.lang)}
		</h1>
		<p class="text-sage-600 dark:text-sage-400 mb-12 text-lg">
			{t('terms.intro', appState.lang)}
		</p>

		<div class="space-y-8">
			{#each sections as section}
				<div class="bg-white dark:bg-paper-card rounded-xl p-6 shadow-sm">
					<h2 class="text-xl font-bold text-pine-950 dark:text-[#e7f1ea] mb-3">
						{section.title}
					</h2>
					<p class="text-pine-700 dark:text-pine-300 leading-relaxed text-sm">
						{section.content}
					</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<p class="text-pine-600 dark:text-pine-400 text-sm">
				{t('features.copyright', appState.lang)}
			</p>
		</div>
	</div>
</div>