<script lang="ts">
	import type { LegalDocument } from '#lib/data/legal';

	let { doc }: { doc: LegalDocument } = $props();

	let activeId = $state('');

	$effect(() => {
		const ids = doc.sections.map((section) => section.id);
		const offset = 112;
		let frame = 0;

		const update = () => {
			frame = 0;
			let current = ids[0];
			const atBottom =
				window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

			if (atBottom) {
				activeId = ids[ids.length - 1];
				return;
			}

			for (const id of ids) {
				const element = document.getElementById(id);
				if (!element) continue;
				if (element.getBoundingClientRect().top - offset > 0) break;
				current = id;
			}

			activeId = current;
		};

		const onScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(update);
		};

		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);

		return () => {
			if (frame) cancelAnimationFrame(frame);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

{#snippet tocList()}
	<ol class="mt-4 space-y-1 border-l border-line text-sm leading-6">
		{#each doc.sections as section, index}
			{@const isActive = section.id === activeId}
			<li>
				<a
					href={`#${section.id}`}
					aria-current={isActive ? 'location' : undefined}
					class="-ml-px block border-l-2 py-1 pl-3 transition-colors {isActive
						? 'border-accent font-medium text-ink'
						: 'border-transparent text-muted hover:border-line-strong hover:text-ink'}"
				>
					{index + 1}. {section.title}
				</a>
			</li>
		{/each}
	</ol>
{/snippet}

<article class="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
	<header class="max-w-prose">
		<p class="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{doc.eyebrow}</p>
		<h1 class="mt-3 text-3xl font-semibold tracking-tight text-pretty text-ink sm:text-4xl">
			{doc.title}
		</h1>
		<p class="mt-4 text-base leading-7 text-justify text-muted">{doc.intro}</p>
		<dl class="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm leading-6 text-faint">
			<div class="flex gap-2">
				<dt>{doc.effectiveLabel}:</dt>
				<dd class="text-muted">{doc.effectiveDate}</dd>
			</div>
			<div class="flex gap-2">
				<dt>{doc.updatedLabel}:</dt>
				<dd class="text-muted">{doc.updatedDate}</dd>
			</div>
		</dl>
	</header>

	<div
		class="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_260px] lg:justify-between lg:gap-16"
	>
		<nav
			aria-label={doc.tocLabel}
			class="lg:order-2 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto"
		>
			<details class="rounded-xl border border-line bg-elevated p-4 lg:hidden">
				<summary class="cursor-pointer text-sm font-semibold text-ink">{doc.tocLabel}</summary>
				{@render tocList()}
			</details>

			<div class="hidden lg:block">
				<p class="text-xs font-semibold uppercase tracking-[0.12em] text-faint">{doc.tocLabel}</p>
				{@render tocList()}
			</div>
		</nav>

		<div class="min-w-0 max-w-prose lg:order-1">
			<div class="space-y-10">
				{#each doc.sections as section, index}
					<section id={section.id} class="scroll-mt-28">
						<h2 class="text-xl font-semibold tracking-tight text-pretty text-ink sm:text-2xl">
							{index + 1}. {section.title}
						</h2>

						{#if section.paragraphs}
							<div class="mt-3 space-y-3 text-sm leading-7 text-muted sm:text-[15px]">
								{#each section.paragraphs as paragraph}
									<p class="text-justify">{paragraph}</p>
								{/each}
							</div>
						{/if}

						{#if section.items}
							<ul class="mt-3 space-y-2 pl-5 text-sm leading-7 text-muted sm:text-[15px]">
								{#each section.items as item}
									<li class="list-disc text-justify marker:text-line-strong">{item}</li>
								{/each}
							</ul>
						{/if}

						{#if section.subsections}
							{#each section.subsections as subsection, subIndex}
								<div class="mt-6">
									<h3 class="text-base font-semibold text-pretty text-ink">
										{index + 1}.{subIndex + 1} {subsection.title}
									</h3>
									<div class="mt-2 space-y-3 text-sm leading-7 text-muted sm:text-[15px]">
										{#each subsection.paragraphs as paragraph}
											<p class="text-justify">{paragraph}</p>
										{/each}
									</div>
									{#if subsection.items}
										<ul class="mt-2 space-y-2 pl-5 text-sm leading-7 text-muted sm:text-[15px]">
											{#each subsection.items as item}
												<li class="list-disc text-justify marker:text-line-strong">{item}</li>
											{/each}
										</ul>
									{/if}
								</div>
							{/each}
						{/if}
					</section>
				{/each}
			</div>

			<p class="mt-12 rounded-xl border border-line bg-surface-muted p-4 text-xs leading-6 text-faint">
				{doc.notice}
			</p>
		</div>
	</div>
</article>
