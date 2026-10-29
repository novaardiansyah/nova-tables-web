<script lang="ts">
	import { appState } from '#lib';
	import { landingContent, links } from '#lib/data/landing';

	const content = $derived(landingContent[appState.lang]);
</script>

<footer class="border-t border-line bg-page">
	<div class="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
			<div class="max-w-sm">
				<a href="/" class="flex items-center gap-2.5" aria-label="Nova Tables home">
					<img
						src="/logo.png"
						alt=""
						width="28"
						height="28"
						class="h-7 w-7 rounded-[7px] object-contain"
					/>
					<span class="text-[15px] font-semibold tracking-tight text-ink">Nova Tables</span>
				</a>
				<p class="mt-4 text-sm leading-6 text-muted">
					{content.footer.description}
				</p>
				<p class="mt-5 inline-flex items-center gap-2 text-xs text-faint">
					<span class="status-dot h-1.5 w-1.5 rounded-full bg-accent"></span>
					{content.footer.builtWith}
				</p>
			</div>

			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
				{#each content.footer.columns as column}
					<div>
						<h2 class="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
							{column.title}
						</h2>
						<ul class="mt-4 space-y-3">
							{#each column.links as link}
								<li>
									<a
										href={link.href}
										target={link.href.startsWith('http') ? '_blank' : undefined}
										rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
										class="text-sm text-muted transition-colors hover:text-ink"
									>
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between"
		>
			<p>{content.footer.copyright}</p>
			<div class="flex flex-wrap items-center gap-x-5 gap-y-2">
				<span>v2.1.0</span>
				<a
					href={links.license}
					target="_blank"
					rel="noreferrer"
					class="transition-colors hover:text-ink"
				>
					MIT License
				</a>
				<a
					href={links.website}
					target="_blank"
					rel="noreferrer"
					class="transition-colors hover:text-ink"
				>
					novaardiansyah.id
				</a>
			</div>
		</div>
	</div>
</footer>
