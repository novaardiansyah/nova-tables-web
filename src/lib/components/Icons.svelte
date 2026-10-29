<script lang="ts">
	let { name, class: className = "w-5 h-5" }: { name: string; class?: string } = $props();
</script>

{#if name === 'github'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path
			d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
		/>
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
{:else if name === 'linkedin'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect width="4" height="12" x="2" y="9" />
		<circle cx="4" cy="4" r="2" />
	</svg>
{:else if name === 'sun'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="4" />
		<path d="M12 2v2" />
		<path d="M12 20v2" />
		<path d="m4.93 4.93 1.41 1.41" />
		<path d="m17.66 17.66 1.41 1.41" />
		<path d="M2 12h2" />
		<path d="M20 12h2" />
		<path d="m6.34 17.66-1.41 1.41" />
		<path d="m19.07 4.93-1.41 1.41" />
	</svg>
{:else if name === 'moon'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
	</svg>
{:else if name === 'globe'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="10" />
		<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
		<path d="M2 12h20" />
	</svg>
{:else if name === 'database'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<ellipse cx="12" cy="5" rx="9" ry="3" />
		<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
		<path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
	</svg>
{:else if name === 'code'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<polyline points="16 18 22 12 16 6" />
		<polyline points="8 6 2 12 8 18" />
	</svg>
{:else if name === 'check'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M20 6 9 17l-5-5" />
	</svg>
{:else if name === 'external-link'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M15 3h6v6" />
		<path d="M10 14 21 3" />
		<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
	</svg>
{:else if name === 'layers'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path
			d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
		/>
		<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
		<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
	</svg>
{:else if name === 'shield'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
	</svg>
{:else if name === 'table'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M12 3v18" />
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<path d="M3 9h18" />
		<path d="M3 15h18" />
	</svg>
{:else if name === 'device'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<rect width="20" height="14" x="2" y="3" rx="2" />
		<line x1="8" x2="16" y1="21" y2="21" />
		<line x1="12" x2="12" y1="17" y2="21" />
	</svg>
{:else if name === 'download'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<polyline points="7 10 12 15 17 10" />
		<line x1="12" x2="12" y1="15" y2="3" />
	</svg>
{:else if name === 'arrow-right'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M5 12h14" />
		<path d="m12 5 7 7-7 7" />
	</svg>
{:else if name === 'arrow-up-right'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M7 17 17 7" />
		<path d="M7 7h10v10" />
	</svg>
{:else if name === 'chevron-down'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="m6 9 6 6 6-6" />
	</svg>
{:else if name === 'menu'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<line x1="4" x2="20" y1="6" y2="6" />
		<line x1="4" x2="20" y1="12" y2="12" />
		<line x1="4" x2="20" y1="18" y2="18" />
	</svg>
{:else if name === 'x'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	</svg>
{:else if name === 'lock'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
		<path d="M7 11V7a5 5 0 0 1 10 0v4" />
	</svg>
{:else if name === 'zap'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path
			d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
		/>
	</svg>
{:else if name === 'history'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
		<path d="M3 3v5h5" />
		<path d="M12 7v5l4 2" />
	</svg>
{:else if name === 'cpu'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<rect width="16" height="16" x="4" y="4" rx="2" />
		<rect width="6" height="6" x="9" y="9" rx="1" />
		<path d="M15 2v2" />
		<path d="M15 20v2" />
		<path d="M2 15h2" />
		<path d="M2 9h2" />
		<path d="M20 15h2" />
		<path d="M20 9h2" />
		<path d="M9 2v2" />
		<path d="M9 20v2" />
	</svg>
{:else if name === 'hard-drive'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<line x1="22" x2="2" y1="12" y2="12" />
		<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
		<line x1="6" x2="6.01" y1="16" y2="16" />
		<line x1="10" x2="10.01" y1="16" y2="16" />
	</svg>
{:else if name === 'file-json'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
		<path d="M14 2v4a2 2 0 0 0 2 2h4" />
		<path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
		<path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
	</svg>
{:else if name === 'key'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
		<path d="m21 2-9.6 9.6" />
		<circle cx="7.5" cy="15.5" r="5.5" />
	</svg>
{:else if name === 'search'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.3-4.3" />
	</svg>
{:else if name === 'columns'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<rect width="18" height="18" x="3" y="3" rx="2" />
		<path d="M12 3v18" />
	</svg>
{:else if name === 'filter'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
	</svg>
{:else if name === 'play'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<polygon points="6 3 20 12 6 21 6 3" />
	</svg>
{:else if name === 'command'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
	</svg>
{:else if name === 'terminal'}
	<svg
		class={className}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<polyline points="4 17 10 11 4 5" />
		<line x1="12" x2="20" y1="19" y2="19" />
	</svg>
{/if}