<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let toggle = $state(true);
</script>

<button onclick={() => (toggle = !toggle)}>{toggle ? 'Hide' : 'Show'}</button>
{#if toggle}
	<div
		class="h-60 w-60 bg-cyan-600 text-center"
		in:fade={{ duration: 500 }}
		out:fly={{ duration: 500 }}
	>
		box
	</div>
{/if}
