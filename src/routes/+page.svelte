<script lang="ts">
	import Task1 from '$lib/components/Task1.svelte';
	import Task10 from '$lib/components/Task10.svelte';
	import Task11 from '$lib/components/Task11.svelte';
	import Task12 from '$lib/components/Task12.svelte';
	import Task13 from '$lib/components/Task13.svelte';
	import Task14 from '$lib/components/Task14.svelte';
	import Task15 from '$lib/components/Task15.svelte';
	import Task16 from '$lib/components/Task16.svelte';
	import Task17 from '$lib/components/Task17.svelte';
	import Task18 from '$lib/components/Task18.svelte';
	import Task19 from '$lib/components/Task19.svelte';
	import Task2 from '$lib/components/Task2.svelte';
	import Task20 from '$lib/components/Task20.svelte';
	import Task21 from '$lib/components/Task21/Task21.svelte';
	import Task22 from '$lib/components/Task22.svelte';
	import Task23 from '$lib/components/Task23.svelte';
	import Task3 from '$lib/components/Task3.svelte';
	import Task4 from '$lib/components/Task4.svelte';
	import Task5 from '$lib/components/Task5.svelte';
	import Task6 from '$lib/components/Task6.svelte';
	import Task7 from '$lib/components/Task7.svelte';
	import Task8 from '$lib/components/Task8.svelte';
	import Task9 from '$lib/components/Task9.svelte';
	import TaskEnd from '$lib/components/TaskEnd.svelte';
	let destroyComponent = $state(false);

	setTimeout(() => {
		destroyComponent = true;
		console.log(destroyComponent);
	}, 5000);
</script>

<Task1 />
<TaskEnd />
<Task2 />
<TaskEnd />
<h1 class="my-3 font-bold">
	The third task was to build a component so i just moved all the tasks to components instead of
	using a route for each one.
</h1>
<TaskEnd />
<Task3 />
<h1 class="my-3 font-bold">So basicly this task was to render an raw HTML form script</h1>
<TaskEnd />
<Task4 />
<TaskEnd />
<Task5 />
<TaskEnd />
<Task6 />
<TaskEnd />
<Task7 />
<TaskEnd />
<Task8 />
<TaskEnd />
<Task9 />
<TaskEnd />
<Task10 />
<TaskEnd />
<Task11 />
<TaskEnd />
<Task12 />
<TaskEnd />
<Task13 />
<TaskEnd />
<Task14 />
<TaskEnd />
<Task15 />
<TaskEnd />
<Task16 />
<TaskEnd />
<Task17 />
<TaskEnd />
<Task18 />
<TaskEnd />
<Task19 />
<TaskEnd />
{#if !destroyComponent}
	<Task20 />
	<TaskEnd />
{/if}
<Task21 />
<TaskEnd />
<Task22 />
<TaskEnd />
<Task23 />
<TaskEnd />
