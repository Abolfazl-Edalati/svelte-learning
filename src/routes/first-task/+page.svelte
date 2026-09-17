<script lang="ts">
	let user = {
		name: 'Abolfazl',
		age: 25,
		isAdmin: true
	};

	let skills = ['CSS', 'TypeScript', 'JavaScript', 'HTML'];
</script>

<h1>User {user.name}</h1>
<div>Age: {user.age}</div>
<div>Role: {user.isAdmin ? 'Admin' : 'User'}</div>

<ul>
	{#each skills as skill, index (skill)}
		<li>{index + 1}. {skill}</li>
	{/each}
</ul>
