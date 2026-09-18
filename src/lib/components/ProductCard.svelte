<script lang="ts">
	let { name, age, image = '' }: { name: string; age: number; image?: string } = $props();
</script>

<div>
	<h1>Name: {name}</h1>
	<h2>Age: {age}</h2>
	{#if image}
		<span>Badge: {image}</span>
	{/if}
</div>
