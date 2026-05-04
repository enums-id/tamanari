<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let { title, subtitle, description, imageUrl } = $props();

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
			{ threshold: 0.3 }
		);

		if (sectionRef) observer.observe(sectionRef);
		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionRef} class="flex flex-col overflow-hidden bg-white md:flex-row">
	{#if visible}
		<!-- Left: Text Column -->
		<div
			class="order-2 flex w-full flex-1 flex-col justify-center px-12 py-16 text-center sm:w-1/2 md:order-1"
			in:fly={{ x: -50, duration: 1000 }}
		>
			<h1 class="mb-6 text-4xl leading-tight text-primary">
				{title}
			</h1>
			<span class="mb-4 text-lg font-medium tracking-[0.2em] text-primary uppercase opacity-85">
				{subtitle}
			</span>
			<p class=" text-sm leading-relaxed font-light text-secondary">
				{description}
			</p>
		</div>

		<!-- Right: Image Column -->
		<div class="order-1 h-64 w-1/2 w-full flex-1 md:order-2 md:h-full" in:fade={{ duration: 1500 }}>
			<img src={imageUrl} alt={title} class="h-full w-full object-cover" />
		</div>
	{/if}
</section>
