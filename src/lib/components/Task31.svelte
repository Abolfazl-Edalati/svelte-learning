<script lang="ts">
	import UserCard from './UserCard.svelte';
</script>

{#snippet user(user: { name: string; age: number })}
	<h2>{user.name}</h2>
	<p>Age: {user.age}</p>
{/snippet}

<UserCard userCard={user} />
