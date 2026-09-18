<script lang="ts">
	interface Item {
		id: number;
		name: string;
		price: number;
		quantity: number;
	}

	let carts = $state<Item[]>([
		{ id: 1, name: 'Keyboard', price: 120, quantity: 1 },
		{ id: 2, name: 'Mouse', price: 45, quantity: 2 },
		{ id: 3, name: 'Monitor', price: 400, quantity: 1 }
	]);

	let totalPrice = $derived.by(() => {
		let total = 0;
		for (const cart of carts) total += cart.price * cart.quantity;
		return total;
	});

	let totalItems = $derived.by(() => {
		let total = 0;
		for (const cart of carts) total += cart.quantity;
		return total;
	});
</script>

{#if carts.length === 0}
	Your cart is empty
{:else}
	<table class="table-fixed">
		<thead>
			<tr>
				<th>id</th>
				<th>name</th>
				<th>price</th>
				<th>quantity</th>
				<th>actions</th>
				<th>Total item price</th>
			</tr>
		</thead>
		<tbody>
			{#each carts as cart (cart.id)}
				<tr>
					<td>{cart.id}</td>
					<td>{cart.name}</td>
					<td>{cart.price}</td>
					<td>
						{cart.quantity}
					</td>
					<td>
						<button class="rounded-2xl border p-1" onclick={() => cart.quantity++}>increase</button>
						<button
							class="rounded-2xl border p-1"
							onclick={() => (cart.quantity > 0 ? cart.quantity-- : null)}
						>
							decrease
						</button>
						<button
							class="rounded-2xl border p-1"
							onclick={() => {
								carts = carts.filter((c) => c.id !== cart.id);
							}}>Remove</button
						>
					</td>
					<td>{cart.price * cart.quantity}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<h1>Total Price: {totalPrice}</h1>
	<h1>Total Items: {totalItems}</h1>
{/if}
