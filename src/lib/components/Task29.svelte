<script lang="ts">
	import OnlineStatus from './OnlineStatus.svelte';
	import { Button } from './ui/button';

	let isOnline = $state(true);
</script>

{#snippet online()}
	<p>The user is Online</p>
{/snippet}

{#snippet offline()}
	<p>The user is Offline</p>
{/snippet}

<OnlineStatus {online} {offline} {isOnline} />
<Button onclick={() => (isOnline = !isOnline)}>Change online Status</Button>
