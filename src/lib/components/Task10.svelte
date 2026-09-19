<script lang="ts">
	interface Country {
		code: string;
		name: string;
	}

	const countries: Country[] = [
		{ code: 'ir', name: 'Iran' },
		{ code: 'us', name: 'United Stated' },
		{ code: 'jp', name: 'Japan' }
	];

	let name = $state('Abolfazl');
	let age = $state(22);
	let temprature = $state(43);
	let newsletter = $state(true);
	let skills = $state(['CSS']);
	let country = $state<Country>(countries[0]);
</script>

<form action="">
	<label>
		Name
		<input type="text" bind:value={name} />
	</label>

	<br />
	<label>
		Age
		<input type="number" bind:value={age} />
	</label>

	<br />
	<label>
		Temperature
		<input type="range" bind:value={temprature} />
	</label>

	<br />
	<label>
		Newsletter
		<input type="checkbox" bind:checked={newsletter} />
	</label>
	<div>
		<label>
			CSS
			<input type="checkbox" bind:group={skills} value="CSS" />
		</label>

		<label>
			HTML
			<input type="checkbox" bind:group={skills} value="HTML" />
		</label>

		<label>
			JS
			<input type="checkbox" bind:group={skills} value="JS" />
		</label>
	</div>
	<br />
	<select bind:value={country}>
		{#each countries as c (c.code)}
			<option value={c}>{c.name}</option>
		{/each}
	</select>
</form>
