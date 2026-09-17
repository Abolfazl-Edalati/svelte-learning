<script lang="ts">
	let count = $state(0);
</script>

<h1>Count: {count}</h1>
<h2>Status: {count === 0 ? 'Zero' : count > 0 ? 'Positive' : 'Negative'}</h2>

<div class="mx-2"></div>

<button onclick={() => count++} class="m-0 rounded-2xl border p-2">Increase</button>
<button onclick={() => count--} class="m-0 rounded-2xl border p-2">Decrease</button>
<button onclick={() => (count = 0)} class="m-0 rounded-2xl border p-2">Reset</button>
