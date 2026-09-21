<script lang="ts">
	import { Button } from './ui/button';
	import { Input } from './ui/input';

	class User {
		name = $state('');
		lastName = $state('');
		age = $state(0);
		isOnline = $state(false);
		fullName = $derived(`${this.name} ${this.lastName}`);
		draftName = $state('');
		draftLastName = $state('');

		constructor(name: string, lastName: string, age: number, isOnline: boolean) {
			this.name = name;
			this.lastName = lastName;
			this.age = age;
			this.isOnline = isOnline;
			this.draftLastName = lastName;
			this.draftName = name;

			$effect(() => {
				console.log(this.fullName);
			});
		}

		birthday() {
			this.age++;
			console.log(`Congrats you're ${this.age} years old now!`);
		}
		toggleOnline() {
			this.isOnline = !this.isOnline;
		}
		changeName() {
			this.name = this.draftName;
			this.lastName = this.draftLastName;
		}
	}

	const newUser = new User('Abolfazl', 'Edalati', 22, true);
</script>

<div>
	<p>Full Name: {newUser.fullName}</p>
	<p>age: {newUser.age}</p>
	<p>online status: {newUser.isOnline}</p>
</div>

<Input bind:value={newUser.draftName} />
<Input bind:value={newUser.draftLastName} />
<Button onclick={() => newUser.changeName()}>Change Name</Button>
<Button onclick={() => newUser.toggleOnline()}>
	{newUser.isOnline ? 'Change to Offline' : 'Change to Online'}
</Button>
<Button onclick={() => newUser.birthday()}>Grow up</Button>
