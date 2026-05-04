<script lang="ts">
	import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let { events = [] } = $props();
	let scrollContainer = $state();
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

	function checkScroll() {
		if (!scrollContainer) return;
		canScrollLeft = scrollContainer.scrollLeft > 0;
		canScrollRight =
			scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 10;
	}

	function scroll(direction) {
		if (!scrollContainer) return;
		const scrollAmount = scrollContainer.clientWidth * 0.8;
		scrollContainer.scrollBy({
			left: direction === 'left' ? -scrollAmount : scrollAmount,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		checkScroll();
	});
</script>

<section class="bg-bg px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 flex items-end justify-between">
			<div>
				<span
					class="mb-4 block font-sans text-sm font-medium tracking-[0.3em] text-primary uppercase"
					>Experiences</span
				>
				<h2 class="text-4xl text-text md:text-5xl">Events at Tamanari</h2>
			</div>
			<div class="hidden gap-4 md:flex">
				<button
					onclick={() => scroll('left')}
					disabled={!canScrollLeft}
					class="rounded-full border border-primary/20 p-3 text-primary transition-all hover:bg-primary/5 disabled:opacity-30"
				>
					<ChevronLeft size={24} />
				</button>
				<button
					onclick={() => scroll('right')}
					disabled={!canScrollRight}
					class="rounded-full border border-primary/20 p-3 text-primary transition-all hover:bg-primary/5 disabled:opacity-30"
				>
					<ChevronRight size={24} />
				</button>
			</div>
		</div>

		<div
			bind:this={scrollContainer}
			onscroll={checkScroll}
			class="scrollbar-hide flex snap-x gap-8 overflow-x-auto pb-8"
		>
			{#each events as event}
				<div class="group min-w-[300px] snap-start md:min-w-[400px]">
					<div class="mb-6 h-[400px] w-full overflow-hidden rounded-2xl">
						<img
							src={base + event.image}
							alt={event.title}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
					<h3 class="mb-2 text-xl font-bold text-text">{event.title}</h3>
					<p class="text-secondary">{event.date}</p>
				</div>
			{/each}
		</div>

		<div class="mt-16 border-t border-primary/10 pt-16 text-center">
			<h3 class="mb-8 text-2xl text-text">Need more information?</h3>
			<div class="flex justify-center gap-6">
				<a
					href="https://instagram.com/tamanari"
					target="_blank"
					class="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary/90"
				>
					<img src={base + '/ig.svg'} alt="ig" class="h-4 w-4" /> Instagram
				</a>
				<a
					href="https://wa.me/628122423717"
					target="_blank"
					class="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary/90"
				>
					<img src={base + '/wa.svg'} alt="wa" class="h-4 w-4" /> WhatsApp
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
