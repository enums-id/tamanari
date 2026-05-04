<script>
	import RoomCard from './RoomCard.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import content from '$lib/data/content.json';

	let visible = $state(false);
	let sectionRef = $state();

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef) observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionRef} id="rooms" class="bg-bg px-8 py-24">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 text-start">
			<h2 class="mb-4 text-5xl text-text uppercase tracking-widest">{content.roomsGrid.title}</h2>
			<p class="font-light text-secondary max-w-xl">
				{content.roomsGrid.description}
			</p>
		</div>

		{#if visible}
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2" in:fly={{ y: 50, duration: 800 }}>
				{#each content.rooms as room}
					<div class="group transform transition-all duration-500 hover:-translate-y-2">
						<RoomCard {...room} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
