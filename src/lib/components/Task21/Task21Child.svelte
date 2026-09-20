<script lang="ts">
	import { getContext } from 'svelte';

	const username = getContext<string>('username');
</script>

<h1>Hello, {username}!</h1>
