<script lang="ts">
	import { appState } from '#lib';
	import { landingContent, links } from '#lib/data/landing';

	const content = $derived(landingContent[appState.lang]);
</script>

<footer class="border-t border-line bg-page">
	<div class="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
		<div class="grid gap-10 sm:gap-12 lg:grid-cols-[1.1fr_1.9fr] lg:gap-16">
			<div class="max-w-sm">
				<a href="/" class="flex w-fit items-center gap-2.5" aria-label="Nova Tables home">
					<img
						src="/logo.png"
						alt=""
						width="28"
						height="28"
						class="h-7 w-7 rounded-[7px] object-contain"
					/>
					<span class="text-sm font-semibold tracking-tight text-ink">Nova Tables</span>
				</a>
				<p class="mt-3 text-sm leading-6 text-muted">
					{content.footer.description}
				</p>
				<p class="mt-3 inline-flex items-center gap-2 text-sm leading-6 text-faint">
					<span class="status-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
					<span>{content.footer.builtWith}</span>
				</p>
			</div>

			<div class="grid gap-8 sm:grid-cols-3 sm:gap-8">
				{#each content.footer.columns as column}
					<div class="min-w-0">
						<h2 class="text-xs font-semibold uppercase tracking-[0.12em] text-faint">
							{column.title}
						</h2>
						<ul class="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:block sm:space-y-2">
							{#each column.links as link}
								<li>
									<a
										href={link.href}
										target={link.href.startsWith('http') ? '_blank' : undefined}
										rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
										class="block text-sm leading-6 text-muted transition-colors hover:text-ink"
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

		<div class="mt-10 border-t border-line pt-6 sm:mt-12">
			<div
				class="flex flex-col items-center gap-3 text-center text-sm leading-6 text-faint lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:text-left"
			>
				<p class="max-w-md text-pretty">{content.footer.copyright}</p>
				<p class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start lg:gap-x-2.5">
					<span class="whitespace-nowrap">{content.footer.version}</span>
					<span aria-hidden="true" class="hidden text-line-strong lg:inline">·</span>
					<a
						href={links.license}
						target="_blank"
						rel="noreferrer"
						class="whitespace-nowrap transition-colors hover:text-ink"
					>
						{content.footer.license}
					</a>
					<span aria-hidden="true" class="hidden text-line-strong lg:inline">·</span>
					<a
						href={links.website}
						target="_blank"
						rel="noreferrer"
						class="whitespace-nowrap transition-colors hover:text-ink"
					>
						novaardiansyah.id
					</a>
				</p>
			</div>
		</div>
	</div>
</footer>
