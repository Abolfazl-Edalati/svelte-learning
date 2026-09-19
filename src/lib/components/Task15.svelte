<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from './ui/button/button.svelte';

	let count = $state(0);
</script>

{#key count}
	<span transition:fade={{ duration: 500 }}>{count}</span>
{/key}

<Button onclick={() => count++}>Next</Button>
