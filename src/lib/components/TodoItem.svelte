<script lang="ts">
	const {
		text,
		done,
		onToggle,
		onDelete
	}: { text: string; done: boolean; onToggle: () => void; onDelete: () => void } = $props();
</script>

<div>
	{text}
	{done ? '✅' : '⬜'}
	<button onclick={() => onToggle()}>Toggle</button>
	<button onclick={() => onDelete()}>Delete</button>
</div>
