<script>
	import RoomCard from './RoomCard.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let {
		rooms = [
			{ id: 'upstairs', title: 'Upstairs', description: 'Cozy suite with a fireplace.', image: '/room1.jpg' },
			{ id: 'poolhouse', title: 'Poolhouse', description: 'Spacious room with forest views.', image: '/room2.jpg' }
		]
	} = $props();

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
			<h2 class="mb-4 text-5xl text-text uppercase tracking-widest">Our Stays</h2>
			<p class="font-light text-secondary max-w-xl">
				Explore our carefully curated collection of mountain retreats, each designed for comfort and
				tranquility.
			</p>
		</div>

		{#if visible}
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2" in:fly={{ y: 50, duration: 800 }}>
				{#each rooms as room, i}
					<div class="group transform transition-all duration-500 hover:-translate-y-2">
						<RoomCard {...room} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
