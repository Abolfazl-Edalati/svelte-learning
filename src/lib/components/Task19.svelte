<script lang="ts">
	function highlight(element: HTMLElement, color: string) {
		element.style.backgroundColor = color;
	}
</script>

<p use:highlight={'yellow'}>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, eveniet?
</p>
