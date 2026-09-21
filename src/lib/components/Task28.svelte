<script lang="ts">
	import CustomButton from './CustomButton.svelte';
</script>

{#snippet children()}
	<h1>button</h1>
{/snippet}
<CustomButton {children} id="btn1" class="rounded-2xl border-0 bg-cyan-700 px-3 py-1 text-white" />
