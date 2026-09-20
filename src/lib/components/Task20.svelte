<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		interval = setInterval(() => {
			console.log('Component mounted');
		}, 500);
	});

	onDestroy(() => {
		clearInterval(interval);
		console.log('Component Destroyed');
	});
</script>

<div>Temp Component</div>
