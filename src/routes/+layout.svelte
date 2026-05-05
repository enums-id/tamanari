<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.jpg';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const p = new URLSearchParams(window.location.search).get('p');
		if (p) {
			window.history.replaceState(null, '', p);
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
