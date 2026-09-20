<script lang="ts">
	import Card from './Card.svelte';
	import UserList from './UserList.svelte';
</script>

{#snippet title()}
	<h2>My Profile</h2>
{/snippet}

{#snippet item(user: { name: string; age: number })}
	<h2>{user.name}</h2>
	<h3>{user.age}</h3>
{/snippet}

<UserList {item} />

<Card header={title} />

<span>My name is Abolfazl</span>
