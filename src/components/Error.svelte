<script>
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	onMount(() => {
		toast.error("It works!");
	})
</script>

<Toaster />