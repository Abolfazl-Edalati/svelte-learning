<script lang="ts">
	import { Button } from './ui/button';
	import { Input } from './ui/input';

	class User {
		name = $state('');
		lastName = $state('');
		age = $state(0);
		isOnline = $state(false);
		fullName = $derived(newUser.name + ' ' + newUser.lastName);

		constructor(name: string, lastName: string, age: number, isOnline: boolean) {
			this.name = name;
			this.lastName = lastName;
			this.age = age;
			this.isOnline = isOnline;
		}

		birthday() {
			this.age++;
			console.log(`Congrats you're ${this.age} years old now!`);
		}
		toggleOnline() {
			this.isOnline = !this.isOnline;
		}
		changeName(newName: string) {
			this.name = newName;
		}
	}

	const newUser = new User('Abolfazl', 'Edalati', 22, true);
</script>

<div>
	<p>Full Name: {newUser.fullName}</p>
	<p>age: {newUser.age}</p>
	<p>online status: {newUser.isOnline}</p>
</div>

<Input bind:value={newUser.name} />
<Input bind:value={newUser.lastName} />
<Button onclick={() => newUser.toggleOnline()}>
	{newUser.isOnline ? 'Change to Offline' : 'Change to Online'}
</Button>
<Button onclick={() => newUser.birthday()}>Grow up</Button>
