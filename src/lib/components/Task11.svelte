<script lang="ts">
	import ColorBox from './ColorBox.svelte';

	let flipped = $state(false);
</script>

<button class={['bg-red-400', { flipped }]} onclick={() => (flipped = !flipped)}
	>Flippable button</button
>
<ColorBox --color="green" />
<ColorBox --color="blue" />
<ColorBox --color="teal" />

<style>
	.flipped {
		transform: rotateY(180deg);
		transition: transform 100ms;
	}
</style>
