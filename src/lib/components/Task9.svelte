<script lang="ts">
	import TodoItem from './TodoItem.svelte';

	let todos = $state([
		{ id: 1, text: 'Read 10 pages', isDone: false },
		{ id: 2, text: 'Eat lunch', isDone: true },
		{ id: 3, text: 'Drink water', isDone: true }
	]);

	const onToggle = (id: number) => {
		const todo = todos.find((todo) => todo.id === id);
		if (todo) todo.isDone = !todo?.isDone;
	};

	const onDelete = (id: number) => {
		todos = todos.filter((todo) => todo.id !== id);
	};
</script>

{#each todos as todo (todo.id)}
	<TodoItem
		text={todo.text}
		done={todo.isDone}
		onToggle={() => onToggle(todo.id)}
		onDelete={() => onDelete(todo.id)}
	/>
{/each}
