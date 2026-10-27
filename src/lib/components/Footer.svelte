<script lang="ts">
	import { Icon } from '#lib';
	import { appState } from '#lib/stores/app';
	import { t } from '#lib/data/translations';
	import { goto } from '$app/navigation';

	function handleNavClick(href: string, e: MouseEvent) {
		e.preventDefault();
		goto(href);
	}
</script>

<footer class="w-full border-t border-white/10 dark:border-white/10 bg-black/60 py-8 px-4 text-xs text-white/60">
	<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
		<div class="flex items-center gap-2">
			<span>Nova Tables &bull;</span>
			<a
				href="https://novaardiansyah.id"
				target="_blank"
				rel="noreferrer"
				class="hover:text-white transition-colors"
			>
				https://novaardiansyah.id
			</a>
		</div>

		<div class="flex items-center gap-6">
			<button
				class="hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/', e)}
			>
				{ t('nav.home', appState.lang) }
			</button>
			<button
				class="hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/privacy', e)}
			>
				{ t('nav.privacy', appState.lang) }
			</button>
			<button
				class="hover:text-white transition-colors cursor-pointer"
				on:click={(e) => handleNavClick('/terms', e)}
			>
				{ t('nav.terms', appState.lang) }
			</button>
			<a
				href="https://github.com/novaardiansyah/nova-tables"
				target="_blank"
				rel="noreferrer"
				class="hover:text-white transition-colors"
			>
				GitHub
			</a>
		</div>

		<div>
			<span>&copy; 2026 Nova Ardiansyah. All rights reserved.</span>
		</div>
	</div>
</footer>