<script>
	import { fade, fly } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import Card from './Card.svelte';

	let activeIndex = $state(0);
	let visible = $state(false);
	let coords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.4 });

	$effect(() => {
		visible = true;
		const interval = setInterval(() => {
			activeIndex = (activeIndex + 1) % 3;
		}, 3000);
		return () => clearInterval(interval);
	});

	function handlePointerMove(e) {
		coords.set({
			x: (e.clientX / window.innerWidth - 0.5) * 20,
			y: (e.clientY / window.innerHeight - 0.5) * 20
		});
	}

	function handlePointerLeave() {
		coords.set({ x: 0, y: 0 });
	}

	const images = ['/hero/hero-1.jpeg', '/hero/hero-2.jpeg', '/hero/hero-3.jpeg']; // Replace with unique images
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
	class="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-hero p-8 text-white"
	onpointermove={handlePointerMove}
	onpointerleave={handlePointerLeave}
>
	{#if visible}
		<!-- Stacked card container -->
		<div
			class="relative h-87.5 w-70 md:h-125 md:w-100"
			in:fly={{ duration: 1500, delay: 500, y: 100 }}
		>
			{#each images as img, i}
				<Card
					imageUrl={img}
					active={activeIndex === i}
					xOffset={$coords.x * (1 - i * 0.25)}
					yOffset={$coords.y * (1 - i * 0.25)}
					rotate={i === 0 ? $coords.x * 0.2 : i === 1 ? $coords.x * 0.1 : -$coords.x * 0.1}
					zIndex={30 - i}
					shadow={i === 0 ? 'shadow-2xl' : i === 1 ? 'shadow-xl' : 'shadow-lg'}
				/>
			{/each}

			<!-- Stamp Overlay -->
			<div
				class="absolute top-[85%] -left-12 z-40 -translate-y-1/2 rotate-[-15deg] rounded-full border border-white bg-amber-100 p-2 md:top-1/2 md:-left-20 md:p-4"
			>
				<div
					class="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-primary text-center font-sans text-[8px] font-bold tracking-widest text-primary uppercase sm:text-[10px] md:h-24 md:w-24 md:text-xs"
				>
					Airbnb's guest favorite
				</div>
			</div>
		</div>

		<h1
			class="mt-12 text-center font-sans text-4xl font-medium md:text-5xl"
			in:fade={{ duration: 1500, delay: 500 }}
		>
			Tamanari Airbnb Bandung🍃
		</h1>

		<!-- Navigation Dots -->
		<div class="mt-8 flex gap-2" in:fade={{ duration: 1500, delay: 500 }}>
			{#each images as _, i}
				<button
					class="h-3 w-3 rounded-full transition-all {activeIndex === i
						? 'scale-125 bg-white'
						: 'bg-white/50'}"
					onclick={() => (activeIndex = i)}
				></button>
			{/each}
		</div>
	{/if}
</section>
