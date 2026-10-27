<script lang="ts">
	import { appState } from '#lib/stores/app';
	import { t } from '#lib/data/translations';
	import { goto } from '$app/navigation';

	function handleNavClick(href: string, e: MouseEvent) {
		e.preventDefault();
		goto(href);
	}
</script>

<footer class="w-full border-t border-paper-border bg-paper-subtle px-4 py-10 text-xs text-pine-700 dark:border-white/10 dark:bg-surface-dark-card dark:text-white/60">
	<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
		<div class="flex items-center gap-2">
			<span class="font-semibold text-pine-900 dark:text-white">Nova Tables</span>
			<span class="text-paper-border dark:text-white/20">&bull;</span>
			<a
				href="https://novaardiansyah.id"
				target="_blank"
				rel="noreferrer"
				class="transition-colors hover:text-pine-950 dark:hover:text-white"
			>
				https://novaardiansyah.id
			</a>
		</div>

		<div class="flex items-center gap-6">
			<button
				class="transition-colors hover:text-pine-950 dark:hover:text-white cursor-pointer"
				on:click={(e) => handleNavClick('/', e)}
			>
				{ t('nav.home', appState.lang) }
			</button>
			<button
				class="transition-colors hover:text-pine-950 dark:hover:text-white cursor-pointer"
				on:click={(e) => handleNavClick('/privacy', e)}
			>
				{ t('nav.privacy', appState.lang) }
			</button>
			<button
				class="transition-colors hover:text-pine-950 dark:hover:text-white cursor-pointer"
				on:click={(e) => handleNavClick('/terms', e)}
			>
				{ t('nav.terms', appState.lang) }
			</button>
			<a
				href="https://github.com/novaardiansyah/nova-tables"
				target="_blank"
				rel="noreferrer"
				class="transition-colors hover:text-pine-950 dark:hover:text-white"
			>
				GitHub
			</a>
		</div>

		<div>
			<span>&copy; 2026 Nova Ardiansyah. All rights reserved.</span>
		</div>
	</div>
</footer>