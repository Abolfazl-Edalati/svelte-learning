<script lang="ts">
	import Task1 from '$lib/components/Task1.svelte';
	import Task2 from '$lib/components/Task2.svelte';
	import Task3 from '$lib/components/Task3.svelte';
	import Task4 from '$lib/components/Task4.svelte';
	import Task5 from '$lib/components/Task5.svelte';
	import TaskEnd from '$lib/components/TaskEnd.svelte';
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
