<script lang="ts">
	const { online, offline, isOnline } = $props();
</script>

{#if isOnline}
	{@render online()}
{:else}
	{@render offline()}
{/if}
