<script lang="ts">
	let { item } = $props();

	const users = [
		{ name: 'Abolfazl', age: 21 },
		{ name: 'Reza', age: 22 },
		{ name: 'Sahar', age: 21 }
	];
</script>

{#each users as user (user.name)}
	{@render item(user)}
{/each}
