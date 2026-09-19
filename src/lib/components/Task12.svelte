<script lang="ts">
	const focus = (element: HTMLInputElement) => {
		element.focus();
	};

	const click = (element: HTMLElement) => {
		const handleClick = (e: MouseEvent) => {
			if (e.target instanceof Node && element.contains(e.target)) console.log('clicked inside');
			else console.log('clicked outside');
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
			console.log('removed');
		};
	};
</script>

<input type="text" {@attach focus} />

<div class="h-64 w-64 bg-amber-500" {@attach click}>Click inside or outside</div>
