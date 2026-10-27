<script lang="ts">
	import './layout.css';
	import { Header, Footer, profile } from '#lib';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>{profile.name} - Nova Tables</title>
	<meta name="description" content="{profile.name} - Modern SQL client for Microsoft SQL Server" />
	<meta property="og:title" content="{profile.name} - Nova Tables" />
	<meta property="og:description" content="Modern SQL client for Microsoft SQL Server" />
	<meta property="og:image" content="/logo.png" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{profile.name} - Nova Tables" />
	<meta name="twitter:description" content="Modern SQL client for Microsoft SQL Server" />
	<meta name="twitter:image" content="/logo.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-paper-base text-pine-950 antialiased dark:bg-[#0b120e] dark:text-[#e7f1ea]">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>