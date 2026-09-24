<script lang="ts">
	interface Acc {
		title: string;
		desc: string;
	}

	let title = $state('');
	let desc = $state('');

	const accordion = $state<Acc[]>([]);
</script>

<input type="text" placeholder="..." bind:value={title} />
<textarea name="" id="" bind:value={desc}>Description</textarea>
<button onclick={() => accordion.push({ title, desc })}>Add</button>

<div>
	{#each accordion as ac (ac.title)}
		<div>
			<span>{ac.title}</span>
			<p>{ac.desc}</p>
		</div>
	{/each}
</div>
