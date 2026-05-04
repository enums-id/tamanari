<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let { title, subtitle, description, imageUrl, ctaText } = $props();

	let visible = $state(false);
	let sectionRef = $state();
	let mousePos = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.3 });

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);

		if (sectionRef) observer.observe(sectionRef);
		return () => observer.disconnect();
	});

	function handleMouseMove(e) {
		if (!sectionRef) return;
		const rect = sectionRef.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		mousePos.set({ x, y });
	}

	function handleMouseLeave() {
		mousePos.set({ x: 0, y: 0 });
	}
</script>

<section
	bind:this={sectionRef}
	class="relative flex min-h-screen flex-col overflow-hidden bg-bg md:flex-row"
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
>
	{#if visible}
		<!-- Left: Text Column -->
		<div
			class="order-2 flex flex-1 flex-col justify-center px-12 py-24 md:order-1 lg:px-24"
			in:fly={{ x: -30, duration: 1000, delay: 200 }}
		>
			<div
				class="transition-transform duration-300 ease-out"
				style="transform: translate({$mousePos.x * 20}px, {$mousePos.y * 20}px)"
			>
				<span
					class="mb-4 block font-sans text-sm font-medium tracking-[0.3em] text-primary uppercase"
				>
					{subtitle}
				</span>
				<h2 class="mb-8 text-5xl leading-tight text-text md:text-6xl lg:text-7xl">
					{title}
				</h2>
				<p class="max-w-md font-sans text-lg leading-relaxed font-light text-secondary opacity-80">
					{description}
				</p>

				<div class="mt-12">
					<button
						class="group flex items-center gap-4 text-sm font-bold tracking-widest text-primary uppercase"
					>
						<span class="h-[1px] w-8 bg-primary transition-all group-hover:w-12"></span>
						{ctaText}
					</button>
				</div>
			</div>
		</div>

		<!-- Right: Image Column -->
		<div
			class="relative order-1 h-[50vh] flex-1 overflow-hidden md:order-2 md:h-screen"
			in:fade={{ duration: 1200 }}
		>
			<div
				class="h-full w-full transition-transform duration-500 ease-out"
				style="transform: scale(1.1) translate({$mousePos.x * -30}px, {$mousePos.y * -30}px)"
			>
				<img src={imageUrl} alt={title} class="h-full w-full object-cover shadow-2xl" />
			</div>

			<!-- Decorative floating badge -->
			<div
				class="absolute bottom-12 left-12 z-10 hidden rounded-full border border-white/20 bg-white/10 p-6 backdrop-blur-md md:block"
				style="transform: translate({$mousePos.x * 40}px, {$mousePos.y * 40}px)"
			>
				<div
					class="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-white/40 text-center text-[10px] font-bold tracking-tighter text-white uppercase"
				>
					Est. 2024<br />Tamanari
				</div>
			</div>
		</div>
	{/if}
</section>
