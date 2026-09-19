<script lang="ts">
	import { flip } from 'svelte/animate';
	import Button from './ui/button/button.svelte';

	let numbers = $state([1, 2, 3, 4, 5]);

	function shuffle() {
		const shuffled = [...numbers];

		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}

		numbers = shuffled;
	}
</script>

<Button onclick={() => shuffle()}>Shuffle</Button>
<Button onclick={() => numbers.reverse()}>Reverse</Button>

<ul>
	{#each numbers as num (num)}
		<li animate:flip={{ duration: 500 }}>{num}</li>
	{/each}
</ul>
