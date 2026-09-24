<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { Button } from './ui/button';
	import { Input } from './ui/input';
	import Textarea from './ui/textarea/textarea.svelte';

	interface Acc {
		title: string;
		desc: string;
		isOpen: boolean;
		id: symbol;
	}

	let title = $state('');
	let desc = $state('');
	let isEditing = $state(false);
	let editTargetId = $state<symbol | null>();

	let accordion = $state.raw<Acc[]>([
		{ title: 'T1', desc: 'Hello World', isOpen: false, id: Symbol() }
	]);
</script>

<div class="max-w-70">
	<Input type="text" placeholder="..." bind:value={title} />
	<Textarea name="" id="" bind:value={desc} />
	<Button
		onclick={() => {
			if (isEditing) {
				const targetIndex = accordion.findIndex((ac) => ac.id === editTargetId);
				accordion[targetIndex].title = title;
				accordion[targetIndex].desc = desc;
			} else {
				// accordion.push({ title, desc, isOpen: false, id: Symbol() });
				accordion = [...accordion, { title, desc, isOpen: false, id: Symbol() }];
			}
		}}
	>
		{isEditing ? 'Edit' : 'Add'}
	</Button>

	<div>
		{#each accordion as ac (ac.id)}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="flex flex-col border-b" onclick={() => (ac.isOpen = !ac.isOpen)}>
				<div class="flex items-center justify-between">
					<span>{ac.title}</span>
					<Button
						class="w-fit"
						onclick={(e) => {
							e.stopPropagation();
							accordion = accordion.filter((a) => a.id !== ac.id);
							if (isEditing && editTargetId === ac.id) {
								isEditing = false;
								editTargetId = null;
							}
						}}>Delete</Button
					>
					<Button
						onclick={(e) => {
							e.stopPropagation();
							title = ac.title;
							desc = ac.desc;
							isEditing = !isEditing;
							editTargetId = ac.id;
						}}>Edit</Button
					>
				</div>
				{#if ac.isOpen}
					<p in:fly={{ duration: 200, y: 5 }} out:fade={{ duration: 200 }}>{ac.desc}</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
