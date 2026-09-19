<script lang="ts">
	const products = [
		{ name: 'Keyboard', price: 50 },
		{ name: 'Mouse', price: 30 },
		{ name: 'Headset', price: 80 }
	];
</script>

{#each products as p (p.name)}
	{@const finalPrice = p.price * (1 - 14 / 100)}
	<div>Name: {p.name} - Price {finalPrice}$</div>
{/each}
