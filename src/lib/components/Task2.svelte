<script lang="ts">
	let isOnline = true;
</script>

<h1 class:online={isOnline} class:offline={!isOnline}>{isOnline ? 'Online' : 'Offline'}</h1>

<style>
	.online {
		background-color: rgb(4, 205, 4);
	}
	.offline {
		background-color: gray;
	}
</style>
