<script lang="ts">
	import { appState } from '#lib/stores/app';
	import { legalContent } from '#lib/data/legal';
	import LegalDocument from '#lib/components/LegalDocument.svelte';

	const doc = $derived(legalContent[appState.lang].privacy);
</script>

<svelte:head>
	<title>{doc.title} - Nova Tables</title>
	<meta name="description" content={doc.intro} />
	<meta property="og:title" content={`${doc.title} - Nova Tables`} />
	<meta property="og:description" content={doc.intro} />
</svelte:head>

<LegalDocument {doc} />
