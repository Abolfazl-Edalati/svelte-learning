<script lang="ts">
	import { Button } from './ui/button';

	let count = $state(0);
</script>

{@debug count}
<Button onclick={() => count++}>increment</Button>
<p>{count}</p>
