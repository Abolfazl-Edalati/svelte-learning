<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	const promise = new Promise<string>((resolve) => {
		setTimeout(() => {
			resolve('Abolfazl');
		}, 2000);
	});
</script>

{#await promise}
	<p out:fade={{ duration: 500 }}>...Loading</p>
{:then data}
	<p in:fly={{ duration: 500 }}>My name is {data}</p>
{:catch error}
	<p>Error: {error}</p>
{/await}
