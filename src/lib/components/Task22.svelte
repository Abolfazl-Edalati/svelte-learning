<script lang="ts">
	import { writable } from 'svelte/store';
	import { Button } from './ui/button';

	const count = writable(0);
</script>

<span>{$count}</span>
<Button onclick={() => count.update((value) => value + 1)}>Increment</Button>
<Button onclick={() => count.update((value) => value - 1)}>Decrement</Button>
