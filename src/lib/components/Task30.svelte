<script lang="ts">
	import Card2 from './Card2.svelte';
</script>

{#snippet title()}
	<h1>User Profile</h1>
{/snippet}
{#snippet content()}
	<p>name: Abolfazl</p>
	<p>age: 22</p>
{/snippet}
{#snippet footer()}
	<h1>Footer</h1>
{/snippet}

<Card2 {title} {content} {footer} />
