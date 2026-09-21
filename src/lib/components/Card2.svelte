<script lang="ts">
	const { title, content, footer } = $props();
</script>

{@render title()}
<br />
{@render content()}
<br />
{@render footer()}
