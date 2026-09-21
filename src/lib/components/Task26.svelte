<script lang="ts">
	import { Counter } from './ClassCounter.svelte';
	import { Button } from './ui/button';

	const count1 = new Counter(0);
</script>

<span>Counting = {count1.count}</span>

<Button onclick={() => count1.increment()}>Increment</Button>
<Button onclick={() => count1.decrement()}>Decrement</Button>
<Button onclick={() => count1.reset()}>Reset</Button>
