<script lang="ts">
	let sec = $state(0);
	let min = $state(0);
	let isPaused = $state(true);
	let formattedTime = $derived(`${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`);

	$effect(() => {
		let id = setInterval(() => {
			if (!isPaused) {
				if (sec === 59) {
					min += 1;
					sec = 0;
				} else {
					sec += 1;
				}
			}
		}, 1000);

		return () => clearInterval(id);
	});
</script>

<h1>Timer: {formattedTime}</h1>

<button onclick={() => (isPaused = true)}>Pause</button>
<button onclick={() => (isPaused = false)}>Resume</button>
