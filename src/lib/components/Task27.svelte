<script lang="ts">
	import { Button } from './ui/button';
	import { Input } from './ui/input';

	class User {
		name = $state('');
		age = $state(0);
		isOnline = $state(false);

		constructor(name: string, age: number, isOnline: boolean) {
			this.name = name;
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

	const newUser = new User('Abolfazl', 22, true);
</script>

<div>
	<p>name: {newUser.name}</p>
	<p>age: {newUser.age}</p>
	<p>online status: {newUser.isOnline}</p>
</div>

<Input bind:value={newUser.name} />
<Button onclick={() => newUser.toggleOnline()}>
	{newUser.isOnline ? 'Change to Offline' : 'Change to Online'}
</Button>
<Button onclick={() => newUser.birthday()}>Grow up</Button>
