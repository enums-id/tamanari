<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = $state(false);

	$effect(() => {
		visible = true;
	});

	const room = {
		title: 'The Mountain Suite',
		weekdayPrice: '3690 IDR',
		weekendPrice: '3990 IDR',
		description: `V ceně ubytování jsou 2 nocležníci. Na další už se musíme připravit. Pohodlně ubytuji 4 dospělé nocležníky. Děti do 3 let uvítá Šmírák zdarma.`,
		imageUrl: '/hero/hero-1.jpeg'
	};
</script>

<svelte:head>
	<title>{room.title} - Tamanari</title>
</svelte:head>

<section class="min-h-screen bg-primary px-8 py-12 text-white md:px-20 md:py-24">
	<a
		href="/"
		class="mb-12 inline-block text-sm tracking-widest uppercase opacity-60 transition-opacity hover:opacity-100"
	>
		← Back to all stays
	</a>
	{#if visible}
		<div class="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
			<!-- Left Column: Content -->
			<div class="flex-1 space-y-12" in:fly={{ x: -50, duration: 1000 }}>
				<h1 class="font-serif text-7xl md:text-8xl">{room.title}</h1>

				<div class="max-w-md space-y-6">
					<div class="flex items-end justify-between border-b border-white/20 pb-4">
						<div class="text-sm tracking-widest uppercase opacity-80">
							Price per night<br />Weekdays
						</div>
						<div class="text-3xl font-medium">{room.weekdayPrice}</div>
					</div>

					<div class="flex items-end justify-between border-b border-white/20 pb-4">
						<div class="text-sm tracking-widest uppercase opacity-80">
							Price per night<br />Weekends & Holidays
						</div>
						<div class="text-3xl font-medium">{room.weekendPrice}</div>
					</div>
				</div>

				<div class="flex gap-8">
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
						>
							<span class="text-xs">↗</span>
						</div>
						<span class="text-sm font-medium tracking-widest uppercase">Pricing</span>
					</div>
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
						>
							<span class="text-xs">↗</span>
						</div>
						<span class="text-sm font-medium tracking-widest uppercase">Equipment</span>
					</div>
				</div>

				<p class="max-w-lg font-sans text-lg leading-relaxed font-light opacity-90">
					{room.description}
				</p>

				<div class="flex flex-wrap items-center gap-8 pt-4">
					<button
						class="flex items-center gap-3 rounded-xl bg-[#FF5A5F] px-8 py-4 font-sans text-lg font-medium text-white transition-transform hover:scale-105"
					>
						<span class="text-xl">🏠</span>
						Book via Airbnb
					</button>
				</div>
			</div>

			<!-- Right Column: Image -->
			<div class="flex-1" in:fade={{ duration: 1500, delay: 300 }}>
				<div class="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
					<img src={room.imageUrl} alt={room.title} class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	{/if}
</section>
