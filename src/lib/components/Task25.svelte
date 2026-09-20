<script lang="ts">
	import Card from './Card.svelte';
</script>

{#snippet title()}
	<h2>My Profile</h2>
{/snippet}

<Card header={title} />

<span>My name is Abolfazl</span>
