<script lang="ts">
	import ProductCard from './ProductCard.svelte';

	const user = {
		name: 'Ahmad',
		age: 25,
		image: 'an image'
	};
</script>

<ProductCard name="Abolfazl" age={21} />
<ProductCard name="Amir" age={23} />
<ProductCard {...user} />
