<script lang="ts">
	let notifications = $state([
		{ id: 1, text: 'New message from Sarah', read: false },
		{ id: 2, text: 'Your order has shipped', read: true },
		{ id: 3, text: 'Security alert: new login', read: false }
	]);

	let newText = $state('');
	let newId = 4;

	let unreadMessages = $derived(notifications.filter((notif) => notif.read === false).length);
</script>

<h1>
	Unread Messages: {unreadMessages}
</h1>

<ul class="flex flex-col gap-5">
	{#each notifications as notif (notif.id)}
		<li class="flex items-center gap-3">
			{notif.text}
			<button onclick={() => (notif.read = !notif.read)} class="rounded-2xl border p-1">
				{notif.read ? 'Unread' : 'Read'}
			</button>
		</li>
	{/each}
</ul>

<input type="text" bind:value={newText} placeholder="Write a notification..." />
<button
	onclick={() => {
		notifications.push({ id: newId++, text: newText, read: false });
		newText = '';
	}}
	class="rounded-2xl border p-1">Add</button
>

<button
	class="rounded-2xl border p-1"
	onclick={() => {
		notifications = notifications.filter((notif) => !notif.read);
	}}>Clear read</button
>
