<script lang="ts">
	import { Icon, appState } from '#lib';
	import { landingContent, links, type DownloadPlatform } from '#lib/data/landing';

	const content = $derived(landingContent[appState.lang]);
	const showcase = $derived(content.showcase.items);

	let activeShowcase = $state(0);
	const activeItem = $derived(showcase[activeShowcase]);

	const securityIcons = ['hard-drive', 'lock', 'key', 'shield'];

	function platformIcon(id: DownloadPlatform) {
		return id === 'windows' ? 'device' : 'terminal';
	}
</script>

<svelte:head>
	<title>Nova Tables - Native desktop SQL client for Microsoft SQL Server</title>
	<meta name="description" content={content.hero.description} />
	<meta name="theme-color" content="#060907" />
</svelte:head>

<div class="relative overflow-x-clip bg-page text-ink">
	<div class="pointer-events-none absolute inset-x-0 top-0 h-[980px] overflow-hidden" aria-hidden="true">
		<div class="hero-halo absolute inset-0"></div>
		<div class="grid-lines mask-fade-b absolute inset-0 opacity-40"></div>
	</div>

	<!-- Hero -->
	<section class="relative pt-12 sm:pt-24 lg:pt-28" aria-labelledby="hero-heading">
		<div class="mx-auto w-full max-w-7xl px-5 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<h1
					id="hero-heading"
					class="animate-rise-delayed text-balance text-[2rem] font-semibold leading-[1.06] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.4rem]"
				>
					{content.hero.titleLead}
					<span class="block text-accent">{content.hero.titleAccent}</span>
				</h1>

				<p
					class="animate-rise-delayed mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-muted sm:text-lg"
				>
					{content.hero.description}
				</p>

				<div class="animate-rise-delayed mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
					<a
						href="#download"
						class="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-page transition-opacity hover:opacity-90 sm:w-auto"
					>
						{content.hero.primaryCta}
						<Icon
							name="arrow-right"
							class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
						/>
					</a>
					<a
						href={links.github}
						target="_blank"
						rel="noreferrer"
						class="inline-flex w-full items-center justify-center gap-2 rounded-md border border-line bg-surface/60 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-muted sm:w-auto"
					>
						<Icon name="github" class="h-4 w-4" />
						{content.hero.secondaryCta}
					</a>
				</div>

				<p class="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-faint">
					<Icon name="device" class="h-3.5 w-3.5" />
					{content.hero.platforms}
				</p>
			</div>
		</div>

		<div class="relative mx-auto mt-10 w-full max-w-7xl px-5 sm:mt-16 sm:px-6 lg:px-8">
			<div
				class="pointer-events-none absolute inset-x-16 top-10 h-52 rounded-full bg-accent-soft blur-[110px]"
				aria-hidden="true"
			></div>
			<figure
				class="animate-rise-delayed relative overflow-hidden rounded-xl border border-line-strong bg-surface p-1.5 shadow-2xl shadow-black/25 dark:shadow-black/60"
			>
				<div class="overflow-hidden rounded-lg border border-line bg-surface-muted">
					<div class="flex h-9 items-center gap-2 border-b border-line px-3.5">
						<div class="flex items-center gap-1.5" aria-hidden="true">
							<span class="h-2 w-2 rounded-full bg-[#ff5f57]/80"></span>
							<span class="h-2 w-2 rounded-full bg-[#febc2e]/80"></span>
							<span class="h-2 w-2 rounded-full bg-[#28c840]/80"></span>
						</div>
						<div
							class="mx-auto flex min-w-0 items-center gap-1.5 text-[10px] font-medium text-faint sm:text-xs"
						>
							<Icon name="database" class="h-3 w-3 shrink-0" />
							<span class="truncate">Nova Tables</span>
							<span class="text-line-strong">/</span>
							<span class="truncate text-muted">Local Testing DB</span>
						</div>
						<span class="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:block">
							MSSQL
						</span>
					</div>
					<img
						src="/demo/workspace.webp"
						width="1440"
						height="900"
						alt={content.hero.imageAlt}
						class="block h-auto w-full"
						fetchpriority="high"
						decoding="async"
					/>
				</div>
			</figure>
		</div>

		<div class="relative mx-auto mt-8 w-full max-w-7xl px-5 sm:mt-10 sm:px-6 lg:px-8">
			<dl
				class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4"
			>
				{#each content.hero.stats as stat}
					<div class="bg-page px-4 py-5 sm:px-5">
						<dt class="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
							{stat.value}
						</dt>
						<dd class="mt-1 text-[10px] uppercase leading-4 tracking-[0.08em] text-faint sm:text-xs">
							{stat.label}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- Product showcase -->
	<section id="product" class="relative scroll-mt-24 py-12 sm:py-28">
		<div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
			<div class="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
				<div class="lg:sticky lg:top-24 lg:self-start">
					<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
						{content.showcase.eyebrow}
					</p>
					<h2
						class="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]"
					>
						{content.showcase.title}
					</h2>
					<p class="mt-5 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
						{content.showcase.description}
					</p>

					<div class="mt-6 sm:mt-8" role="tablist" aria-label="Product views">
						{#each showcase as item, index}
							<button
								type="button"
								role="tab"
								id={`showcase-tab-${index}`}
								aria-controls="showcase-panel"
								aria-selected={activeShowcase === index}
								class="group flex w-full items-start gap-3 border-t border-l-2 border-line border-l-transparent py-4 pl-3 pr-1 text-left transition-colors {activeShowcase ===
								index
									? 'border-l-accent'
									: 'hover:bg-surface/40'}"
								onclick={() => (activeShowcase = index)}
							>
								<span
									class="mt-0.5 font-mono text-[10px] {activeShowcase === index
										? 'text-accent'
										: 'text-faint'}"
								>
									0{index + 1}
								</span>
								<span class="min-w-0 flex-1">
									<span
										class="block text-sm font-semibold {activeShowcase === index
											? 'text-ink'
											: 'text-muted group-hover:text-ink'}"
									>
										{item.title}
									</span>
									<span class="mt-1 block text-xs leading-5 text-faint">
										{item.label}
									</span>
								</span>
								<Icon
									name="arrow-up-right"
									class="mt-0.5 h-3.5 w-3.5 shrink-0 {activeShowcase === index
										? 'text-accent'
										: 'text-faint opacity-0 transition-opacity group-hover:opacity-100'}"
								/>
							</button>
						{/each}
					</div>
				</div>

				<div
					id="showcase-panel"
					role="tabpanel"
					aria-labelledby={`showcase-tab-${activeShowcase}`}
				>
					<figure
						class="overflow-hidden rounded-xl border border-line-strong bg-surface p-1.5 shadow-xl shadow-black/10 dark:shadow-black/40"
					>
						<div class="overflow-hidden rounded-lg border border-line bg-surface-muted">
							<div class="flex h-9 items-center gap-2 border-b border-line px-3.5">
								<div class="flex items-center gap-1.5" aria-hidden="true">
									<span class="h-2 w-2 rounded-full bg-[#ff5f57]/80"></span>
									<span class="h-2 w-2 rounded-full bg-[#febc2e]/80"></span>
									<span class="h-2 w-2 rounded-full bg-[#28c840]/80"></span>
								</div>
								<span class="mx-auto flex min-w-0 items-center gap-1.5 text-[10px] text-faint sm:text-xs">
									<Icon name="database" class="h-3 w-3 shrink-0" />
									<span class="truncate">{activeItem.label}</span>
								</span>
								<span class="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:block">v2.1.0</span>
							</div>
							<div class="relative aspect-[16/10]">
								{#each showcase as item, index}
									<img
										src={item.image}
										width="1440"
										height="900"
										alt={activeShowcase === index ? item.alt : ''}
										aria-hidden={activeShowcase !== index}
										loading={index === 0 ? 'eager' : 'lazy'}
										decoding="async"
										class="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 {activeShowcase ===
										index
											? 'opacity-100'
											: 'opacity-0'}"
									/>
								{/each}
							</div>
						</div>
					</figure>

					<div class="mt-5 min-h-14">
						<p class="text-sm leading-6 text-muted">{activeItem.description}</p>
						<ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2">
							{#each activeItem.bullets as bullet}
								<li class="flex items-center gap-1.5 text-xs text-faint">
									<Icon name="check" class="h-3 w-3 text-accent" />
									{bullet}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Value proposition -->
	<section id="features" class="relative scroll-mt-24 border-t border-line py-12 sm:py-28">
		<div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
			<div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
				<div class="lg:sticky lg:top-24 lg:self-start">
					<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
						{content.value.eyebrow}
					</p>
					<h2
						class="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]"
					>
						{content.value.title}
					</h2>
					<p class="mt-5 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
						{content.value.description}
					</p>
					<blockquote class="mt-6 border-l border-accent/40 pl-5 sm:mt-8">
						<p class="text-sm leading-6 text-ink">“{content.value.quote}”</p>
						<footer class="mt-2 text-xs uppercase tracking-[0.12em] text-faint">
							- {content.value.quoteSource}
						</footer>
					</blockquote>
				</div>

				<ol class="reveal border-y border-line">
					{#each content.value.items as item}
						<li class="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-6 last:border-b-0 sm:gap-8 sm:py-8">
							<span class="font-mono text-xs text-accent">{item.number}</span>
							<div>
								<h3 class="text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
								<p class="mt-2 max-w-lg text-sm leading-6 text-muted">{item.description}</p>
							</div>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</section>

	<!-- Capabilities -->
	<section id="capabilities" class="relative scroll-mt-24 border-t border-line py-12 sm:py-28">
		<div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
			<div class="max-w-3xl">
				<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
					{content.capabilities.eyebrow}
				</p>
				<h2
					class="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]"
				>
					{content.capabilities.title}
				</h2>
				<p class="mt-5 text-sm leading-6 text-muted sm:text-base sm:leading-7">
					{content.capabilities.description}
				</p>
			</div>

			<div class="reveal mt-10 grid gap-4 lg:grid-cols-3">
				<!-- Editor -->
				<article
					class="group relative overflow-hidden rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong sm:p-6 lg:col-span-2"
				>
					<div class="grid min-w-0 gap-5 sm:grid-cols-[1fr_1.05fr] sm:items-center sm:gap-6">
						<div class="min-w-0">
							<div class="flex items-center gap-2.5">
								<span
									class="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-page text-accent"
								>
									<Icon name="code" class="h-3.5 w-3.5" />
								</span>
								<h3 class="text-sm font-semibold text-ink">{content.capabilities.editor.title}</h3>
							</div>
							<p class="mt-3 text-sm leading-6 text-muted">
								{content.capabilities.editor.description}
							</p>
							<p class="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
								{content.capabilities.editor.footnote}
							</p>
						</div>

						<div class="min-w-0 overflow-hidden rounded-lg border border-white/10 bg-code-bg shadow-inner">
							<div class="flex items-center justify-between border-b border-white/10 px-3.5 py-2">
								<span class="flex items-center gap-1.5 font-mono text-[10px] text-code-ink/50">
									<span class="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
									Query 1
								</span>
								<span class="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-code-ink/50">
									Ctrl R
								</span>
							</div>
							<pre
								class="max-w-full overflow-x-auto px-3.5 py-3 font-mono text-[10px] leading-6 text-code-ink sm:text-xs"><code><span class="text-sky-300">SELECT</span> TOP 50 Id, FullName,
  Email, City
<span class="text-sky-300">FROM</span> dbo.Customers
<span class="text-sky-300">ORDER BY</span> Id;</code></pre>
							<div
								class="flex items-center justify-between border-t border-white/10 px-3.5 py-2 font-mono text-[10px] text-code-ink/40"
							>
								<span>24 rows · 3 ms</span>
								<span class="text-emerald-400/90">Query succeeded</span>
							</div>
						</div>
					</div>
				</article>

				<!-- Execution plans -->
				<article
					class="group relative overflow-hidden rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong sm:p-6"
				>
					<div class="flex items-center gap-2.5">
						<span
							class="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-page text-accent"
						>
							<Icon name="layers" class="h-3.5 w-3.5" />
						</span>
						<h3 class="text-sm font-semibold text-ink">{content.capabilities.plans.title}</h3>
					</div>
					<p class="mt-3 text-sm leading-6 text-muted">{content.capabilities.plans.description}</p>

					<div class="mt-5 space-y-2 font-mono text-[10px]">
						<div
							class="flex items-center justify-between rounded border border-line bg-page px-2.5 py-2 text-muted"
						>
							<span>Nested Loops</span>
							<span class="text-accent">38%</span>
						</div>
						<div class="ml-3 space-y-2 border-l border-line pl-3">
							<div
								class="flex items-center justify-between rounded border border-line bg-page px-2.5 py-2 text-muted"
							>
								<span>Index Seek</span>
								<span class="text-accent">54%</span>
							</div>
							<div
								class="flex items-center justify-between rounded border border-line bg-page px-2.5 py-2 text-muted"
							>
								<span>Key Lookup</span>
								<span class="text-accent">8%</span>
							</div>
						</div>
					</div>
				</article>

				<!-- Results grid -->
				<article
					class="group relative overflow-hidden rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong sm:p-6 lg:col-span-2"
				>
					<div class="flex flex-wrap items-center gap-2.5">
						<span
							class="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-page text-accent"
						>
							<Icon name="table" class="h-3.5 w-3.5" />
						</span>
						<h3 class="text-sm font-semibold text-ink">{content.capabilities.grid.title}</h3>
					</div>
					<p class="mt-3 max-w-xl text-sm leading-6 text-muted">
						{content.capabilities.grid.description}
					</p>
					<div class="mt-5 overflow-hidden rounded-lg border border-line bg-surface-muted">
						<img
							src="/demo/cell-editing.webp"
							width="1440"
							height="900"
							alt="Nova Tables results grid with edited cells highlighted"
							loading="lazy"
							decoding="async"
							class="h-auto w-full"
						/>
					</div>
				</article>

				<!-- Query history -->
				<article
					class="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong sm:p-6"
				>
					<div class="flex items-center gap-2.5">
						<span
							class="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-page text-accent"
						>
							<Icon name="history" class="h-3.5 w-3.5" />
						</span>
						<h3 class="text-sm font-semibold text-ink">{content.capabilities.history.title}</h3>
					</div>
					<p class="mt-3 text-sm leading-6 text-muted">{content.capabilities.history.description}</p>
					<div class="mt-5 overflow-hidden rounded-lg border border-line bg-surface-muted">
						<img
							src="/demo/query-history.webp"
							width="1440"
							height="900"
							alt="Nova Tables query history dialog"
							loading="lazy"
							decoding="async"
							class="h-auto w-full"
						/>
					</div>
				</article>

				<!-- Generated writes -->
				<article
					class="group relative overflow-hidden rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong sm:p-6"
				>
					<div class="flex items-center gap-2.5">
						<span
							class="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-page text-accent"
						>
							<Icon name="file-json" class="h-3.5 w-3.5" />
						</span>
						<h3 class="text-sm font-semibold text-ink">{content.capabilities.writes.title}</h3>
					</div>
					<p class="mt-3 text-sm leading-6 text-muted">{content.capabilities.writes.description}</p>
					<div class="mt-5 overflow-hidden rounded-lg border border-line bg-surface-muted">
						<img
							src="/demo/changes.webp"
							width="1440"
							height="900"
							alt="Nova Tables generated UPDATE statements dialog"
							loading="lazy"
							decoding="async"
							class="h-auto w-full"
						/>
					</div>
				</article>

				<!-- JSON viewer -->
				<article
					class="group relative overflow-hidden rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong sm:p-6"
				>
					<div class="flex items-center gap-2.5">
						<span
							class="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-page text-accent"
						>
							<Icon name="search" class="h-3.5 w-3.5" />
						</span>
						<h3 class="text-sm font-semibold text-ink">{content.capabilities.json.title}</h3>
					</div>
					<p class="mt-3 text-sm leading-6 text-muted">{content.capabilities.json.description}</p>
					<div class="mt-5 overflow-hidden rounded-lg border border-line bg-surface-muted">
						<img
							src="/demo/json-viewer.webp"
							width="1440"
							height="900"
							alt="Nova Tables row inspector showing a record as JSON"
							loading="lazy"
							decoding="async"
							class="h-auto w-full"
						/>
					</div>
				</article>

				<!-- Export -->
				<article
					class="group relative overflow-hidden rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong sm:p-6"
				>
					<div class="flex items-center gap-2.5">
						<span
							class="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-page text-accent"
						>
							<Icon name="download" class="h-3.5 w-3.5" />
						</span>
						<h3 class="text-sm font-semibold text-ink">{content.capabilities.export.title}</h3>
					</div>
					<p class="mt-3 text-sm leading-6 text-muted">{content.capabilities.export.description}</p>
					<div class="mt-5 overflow-hidden rounded-lg border border-line bg-surface-muted">
						<img
							src="/demo/export-connections.webp"
							width="1440"
							height="900"
							alt="Nova Tables export connections dialog"
							loading="lazy"
							decoding="async"
							class="h-auto w-full"
						/>
					</div>
				</article>
			</div>
		</div>
	</section>

	<!-- Developer experience -->
	<section class="relative border-t border-line py-12 sm:py-28">
		<div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
			<div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
				<div class="order-2 min-w-0 lg:order-1">
					<div
						class="relative min-w-0 overflow-hidden rounded-xl border border-line-strong bg-code-bg shadow-2xl shadow-black/20 dark:shadow-black/50"
					>
						<div class="flex h-10 items-center gap-2 border-b border-white/10 px-4">
							<div class="flex items-center gap-1.5" aria-hidden="true">
								<span class="h-2 w-2 rounded-full bg-[#ff5f57]/80"></span>
								<span class="h-2 w-2 rounded-full bg-[#febc2e]/80"></span>
								<span class="h-2 w-2 rounded-full bg-[#28c840]/80"></span>
							</div>
							<span class="ml-1 flex min-w-0 items-center gap-1.5 text-[10px] text-code-ink/60">
								<Icon name="terminal" class="h-3 w-3 shrink-0" />
								<span class="truncate">Query 1 · Local Testing DB</span>
							</span>
							<span
								class="ml-auto hidden rounded border border-white/10 px-2 py-0.5 font-mono text-[10px] text-code-ink/50 sm:block"
							>
								Silent Mode
							</span>
						</div>

						<pre
							class="max-w-full overflow-x-auto px-5 py-5 font-mono text-[10px] leading-6 text-code-ink sm:text-[12px] sm:leading-7"><code><span class="text-sky-300">SELECT</span> TOP 50 Id, FullName,
  Email, City
<span class="text-sky-300">FROM</span> dbo.Customers
<span class="text-sky-300">ORDER BY</span> Id;</code></pre>

						<div
							class="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 font-mono text-[10px] text-code-ink/45"
						>
							<span>24 rows · 3 ms</span>
							<span class="inline-flex items-center gap-1.5 text-emerald-400/90">
								<span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
								Query succeeded
							</span>
						</div>

						<div class="border-t border-white/10 bg-white/[0.02] px-4 py-3.5">
							<div
								class="break-words rounded border border-white/10 bg-white/[0.03] px-2.5 py-2 font-mono text-[10px] leading-5 text-code-ink/65"
							>
								1 · Nova Ardiansyah · admin@novaardiansyah.id · Tangerang Selatan
							</div>
						</div>
					</div>
				</div>

				<div class="order-1 lg:order-2">
					<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
						{content.developer.eyebrow}
					</p>
					<h2
						class="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]"
					>
						{content.developer.title}
					</h2>
					<p class="mt-5 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
						{content.developer.description}
					</p>

					<ol class="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
						{#each content.developer.steps as step, index}
							<li class="flex gap-4">
								<span
									class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-[10px] text-accent"
								>
									0{index + 1}
								</span>
								<div>
									<h3 class="text-sm font-semibold text-ink">{step.title}</h3>
									<p class="mt-1 max-w-md text-sm leading-6 text-muted">{step.description}</p>
								</div>
							</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</section>

	<!-- Architecture -->
	<section class="relative border-y border-line bg-surface py-12 sm:py-28">
		<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
			<div class="grid-lines absolute inset-0 opacity-20"></div>
		</div>
		<div class="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
			<div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
				<div>
					<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
						{content.architecture.eyebrow}
					</p>
					<h2
						class="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]"
					>
						{content.architecture.title}
					</h2>
					<p class="mt-5 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
						{content.architecture.description}
					</p>

					<dl
						class="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:mt-8"
					>
						{#each content.architecture.stats as stat}
							<div class="bg-page px-4 py-4">
								<dt class="font-display text-lg font-semibold tracking-tight text-ink">
									{stat.value}
								</dt>
								<dd class="mt-1 text-[10px] leading-4 text-faint">{stat.label}</dd>
							</div>
						{/each}
					</dl>
					<p class="mt-4 max-w-lg text-xs leading-5 text-faint">
						{content.architecture.footnote}
					</p>
				</div>

				<div class="reveal rounded-xl border border-line bg-page p-5 sm:p-6">
					<div class="space-y-2">
						{#each content.architecture.layers as layer, index}
							<div class="rounded-lg border border-line bg-surface px-4 py-3">
								<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
									<span class="text-[10px] uppercase tracking-[0.14em] text-faint">
										{layer.label}
									</span>
									<span class="break-words font-mono text-[10px] leading-4 text-muted sm:text-right">
										{layer.detail}
									</span>
								</div>
							</div>
							{#if index < content.architecture.layers.length - 1}
								<div class="flex justify-center" aria-hidden="true">
									<span class="h-2 w-px bg-line-strong"></span>
								</div>
							{/if}
						{/each}
					</div>

					<div class="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
						<span class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
							<Icon name="zap" class="h-3 w-3 text-accent" />
							Async TDS
						</span>
						<span class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
							<Icon name="hard-drive" class="h-3 w-3 text-accent" />
							Local WAL
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Privacy & security -->
	<section id="security" class="relative scroll-mt-24 py-12 sm:py-28">
		<div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
			<div
				class="reveal relative overflow-hidden rounded-2xl border border-line bg-surface p-5 sm:p-10 lg:p-14"
			>
				<div
					class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
					aria-hidden="true"
				></div>

				<div class="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					<div>
						<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
							{content.security.eyebrow}
						</p>
						<h2
							class="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]"
						>
							{content.security.title}
						</h2>
						<p class="mt-5 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
							{content.security.description}
						</p>

						<div class="mt-6 flex flex-wrap gap-2">
							{#each content.security.badges as badge}
								<span
									class="inline-flex items-center gap-1.5 rounded-full border border-line bg-page px-3 py-1 text-xs text-muted"
								>
									<Icon name="check" class="h-3 w-3 text-accent" />
									{badge}
								</span>
							{/each}
						</div>

						<a
							href={links.github}
							target="_blank"
							rel="noreferrer"
							class="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent sm:mt-8"
						>
							{content.nav.github}
							<Icon
								name="arrow-up-right"
								class="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					</div>

					<div class="grid gap-4 sm:grid-cols-2">
						{#each content.security.items as item, index}
							<div class="rounded-lg border border-line bg-page p-4 sm:p-5">
								<span
									class="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface text-accent"
								>
									<Icon name={securityIcons[index]} class="h-4 w-4" />
								</span>
								<h3 class="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
								<p class="mt-2 break-words text-xs leading-5 text-muted">{item.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Download -->
	<section id="download" class="relative scroll-mt-24 border-t border-line py-12 sm:py-28">
		<div class="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
			<div
				class="reveal relative overflow-hidden rounded-2xl border border-line bg-surface px-5 py-8 text-center sm:px-10 sm:py-16"
			>
				<div class="hero-halo pointer-events-none absolute inset-0" aria-hidden="true"></div>
				<div class="relative mx-auto max-w-2xl">
					<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
						{content.download.eyebrow}
					</p>
					<h2
						class="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]"
					>
						{content.download.title}
					</h2>
					<p class="mt-5 text-sm leading-6 text-muted sm:text-base sm:leading-7">
						{content.download.description}
					</p>

					<div class="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
						<a
							href="#platforms"
							class="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-page transition-opacity hover:opacity-90 sm:w-auto"
						>
							{content.download.primaryCta}
							<Icon name="download" class="h-4 w-4" />
						</a>
						<a
							href={links.documentation}
							target="_blank"
							rel="noreferrer"
							class="inline-flex w-full items-center justify-center gap-2 rounded-md border border-line bg-page px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-muted sm:w-auto"
						>
							{content.download.secondaryCta}
							<Icon name="arrow-up-right" class="h-4 w-4" />
						</a>
					</div>
					<p class="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
						{content.download.version}
					</p>
				</div>

				<div
					id="platforms"
					class="relative mt-10 grid scroll-mt-28 gap-4 text-left sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
				>
					{#each content.download.platforms as platform}
						<a
							href={links.downloads[platform.id]}
							target="_blank"
							rel="noreferrer"
							class="group flex items-center gap-3 rounded-lg border border-line bg-page p-4 transition-colors hover:border-line-strong hover:bg-surface-muted"
						>
							<span
								class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-accent"
							>
								<Icon name={platformIcon(platform.id)} class="h-4 w-4" />
							</span>
							<span class="min-w-0 flex-1">
								<span class="block text-sm font-semibold leading-5 text-ink">
									{platform.name}
								</span>
								<span class="mt-0.5 block text-xs leading-5 text-muted">
									{platform.detail}
								</span>
							</span>
							<span class="flex shrink-0 flex-col items-end gap-1.5 text-right">
								<span class="font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
									{platform.format}
								</span>
								<span class="inline-flex items-center gap-1 text-xs font-medium text-accent">
									{content.nav.download}
									<Icon
										name="download"
										class="h-3 w-3 transition-transform group-hover:translate-y-0.5"
									/>
								</span>
							</span>
						</a>
					{/each}
				</div>

				<div class="relative mx-auto mt-6 max-w-3xl space-y-2 text-xs leading-5 text-faint sm:mt-8">
					<p>{content.download.note}</p>
					<p>
						{content.download.source}
						<a
							href={links.documentation}
							target="_blank"
							rel="noreferrer"
							class="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
						>
							{content.download.sourceLink}
						</a>
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
