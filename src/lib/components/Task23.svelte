<script lang="ts">
	import { counter } from './counter.svelte';
	import { Button } from './ui/button';
</script>

<p>{counter.count}</p>

<Button
	onclick={() => {
		counter.count++;
	}}>Increment</Button
>

<Button
	onclick={() => {
		counter.count--;
	}}>Decrement</Button
>
