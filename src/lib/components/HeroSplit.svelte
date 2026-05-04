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

<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
	bind:this={sectionRef}
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg"
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
>
	<!-- Background Image -->
	<div class="absolute inset-0 z-0 h-full w-full overflow-hidden">
		<div
			class="h-full w-full transition-transform duration-500 ease-out"
			style="transform: scale(1.1) translate({$mousePos.x * -20}px, {$mousePos.y * -20}px)"
		>
			<img src={imageUrl} alt={title} class="h-full w-full object-cover" />
			<div class="absolute inset-0 bg-black/40"></div>
		</div>
	</div>

	{#if visible}
		<!-- Centered Content -->
		<div
			class="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center"
			in:fly={{ y: 30, duration: 1000, delay: 200 }}
		>
			<div
				class="max-w-lg transition-transform duration-300 ease-out"
				style="transform: translate({$mousePos.x * 10}px, {$mousePos.y * 10}px)"
			>
				<span
					class="mb-4 block font-sans text-sm font-medium tracking-[0.3em] text-white uppercase"
				>
					{subtitle}
				</span>
				<h2 class="mb-8 text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
					{title}
				</h2>
				<p class="mx-auto max-w-lg font-sans text-lg leading-relaxed font-light text-white/80">
					{description}
				</p>

				<!-- <div class="mt-12 flex justify-center">
					<button
						class="group flex items-center gap-4 text-sm font-bold tracking-widest text-white uppercase"
					>
						<span class="h-[1px] w-8 bg-white transition-all group-hover:w-12"></span>
						{ctaText}
					</button>
				</div> -->
			</div>
		</div>
	{/if}
</section>
