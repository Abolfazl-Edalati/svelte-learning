<script lang="ts">
	const { userCard } = $props();

	const users = [
		{ name: 'Abolfazl', age: 22 },
		{ name: 'Reza', age: 23 },
		{ name: 'Sahar', age: 21 }
	];
</script>

{#each users as user (user.name)}
	{@render userCard(user)}
{/each}
