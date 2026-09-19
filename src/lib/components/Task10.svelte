<script lang="ts">
	import Input from './ui/input/input.svelte';
	import Checkbox from './ui/checkbox/checkbox.svelte';
	import Label from './ui/label/label.svelte';
	import Textarea from './ui/textarea/textarea.svelte';
	import * as Select from './ui/select';

	interface Country {
		code: string;
		name: string;
	}

	const countries: Country[] = [
		{ code: 'ir', name: 'Iran' },
		{ code: 'us', name: 'United States' },
		{ code: 'jp', name: 'Japan' }
	];

	let name = $state('Abolfazl');
	let age = $state(22);
	let temprature = $state(43);
	let newsletter = $state(true);
	let skills = $state(['CSS']);
	let country = $state<Country['code']>(countries[0].code);
	let bio = $state('');
</script>

<form action="" class="flex w-fit flex-col gap-4">
	<div class="flex flex-col gap-2">
		<Label for="name">Name</Label>
		<Input id="name" type="text" bind:value={name} class="w-fit" />
	</div>

	<div class="flex flex-col gap-2">
		<Label for="age">Age</Label>
		<Input id="age" type="number" bind:value={age} class="w-fit" />
	</div>

	<div class="flex flex-col gap-2">
		<Label for="temperature">Temperature: {temprature}°</Label>
		<input id="temperature" type="range" bind:value={temprature} class="w-fit" />
	</div>

	<div class="flex items-center gap-3">
		<Checkbox id="newsletter" bind:checked={newsletter} />
		<Label for="newsletter">Newsletter</Label>
	</div>

	<div class="flex flex-col gap-2">
		<Label>Skills</Label>
		<div class="flex gap-4">
			<div class="flex items-center gap-2">
				<input id="css" type="checkbox" bind:group={skills} value="CSS" />
				<Label for="css">CSS</Label>
			</div>
			<div class="flex items-center gap-2">
				<input id="html" type="checkbox" bind:group={skills} value="HTML" />
				<Label for="html">HTML</Label>
			</div>
			<div class="flex items-center gap-2">
				<input id="js" type="checkbox" bind:group={skills} value="JS" />
				<Label for="js">JS</Label>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<Label for="country">Country</Label>
		<Select.Root type="single" bind:value={country}>
			<Select.Trigger id="country" class="w-fit">
				{countries.find((c) => c.code === country)?.name}
			</Select.Trigger>
			<Select.Content>
				{#each countries as c (c.code)}
					<Select.Item value={c.code} label={c.name}>{c.name}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</div>

	<div class="flex flex-col gap-2">
		<Label for="bio">Bio</Label>
		<Textarea id="bio" bind:value={bio} />
	</div>
</form>
