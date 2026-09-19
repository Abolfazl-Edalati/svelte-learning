<script lang="ts">
	let { color } = $props();
</script>

<div style:--bg-color={color}>CSS Custom Property</div>

<style>
	div {
		background-color: var(--bg-color);
	}
</style>
