<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = $state(false);
	let activeImageIndex = $state(0);
	let showFloatingCTA = $state(false);

	$effect(() => {
		visible = true;
	});

	onMount(() => {
		const handleScroll = () => {
			showFloatingCTA = window.scrollY > 400;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const room = {
		title: 'The Mountain Suite',
		weekdayPrice: '3690 IDR',
		weekendPrice: '3990 IDR',
		description: `V ceně ubytování jsou 2 nocležníci. Na další už se musíme připravit. Pohodlně ubytuji 4 dospělé nocležníky. Děti do 3 let uvítá Šmírák zdarma.`,
		images: ['/hero/hero-1.jpeg', '/room2.jpg', '/hero-bg.jpg'],
		amenities: [
			{ name: 'High-Speed WiFi', icon: '🌐' },
			{ name: 'Gourmet Kitchen', icon: '🍳' },
			{ name: 'Private Parking', icon: '🅿️' },
			{ name: 'Mountain View', icon: '🏔️' },
			{ name: 'Smart Home', icon: '🏠' },
			{ name: 'Fresh Linens', icon: '🛏️' },
			{ name: 'Air Conditioning', icon: '❄️' },
			{ name: 'Private Balcony', icon: '🌅' }
		],
		facilities: [
			{ name: 'Local Coffee Shop', distance: '5 mins walk', icon: '☕' },
			{ name: 'Nature Trail', distance: '10 mins walk', icon: '🥾' },
			{ name: 'Traditional Market', distance: '10 mins drive', icon: '🧺' },
			{ name: 'City Center', distance: '20 mins drive', icon: '🏢' }
		]
	};

	function nextImage() {
		activeImageIndex = (activeImageIndex + 1) % room.images.length;
	}

	function prevImage() {
		activeImageIndex = (activeImageIndex - 1 + room.images.length) % room.images.length;
	}
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
					<a href="#amenities" class="flex items-center gap-3 transition-opacity hover:opacity-80">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
						>
							<span class="text-xs">↗</span>
						</div>
						<span class="text-sm font-medium tracking-widest uppercase">Equipment</span>
					</a>
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

			<!-- Right Column: Image Gallery -->
			<div class="flex-1 space-y-6" in:fade={{ duration: 1500, delay: 300 }}>
				<div class="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
					{#each room.images as img, i}
						{#if activeImageIndex === i}
							<img
								src={img}
								alt="{room.title} view {i + 1}"
								class="absolute inset-0 h-full w-full object-cover"
								in:fade={{ duration: 500 }}
							/>
						{/if}
					{/each}

					<!-- Navigation Arrows -->
					<div class="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
						<button
							onclick={prevImage}
							class="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md transition-colors hover:bg-black/40"
						>
							←
						</button>
						<button
							onclick={nextImage}
							class="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md transition-colors hover:bg-black/40"
						>
							→
						</button>
					</div>
				</div>

				<!-- Thumbnail Indicator -->
				<div class="flex justify-center gap-2">
					{#each room.images as _, i}
						<button
							onclick={() => (activeImageIndex = i)}
							class="h-2 w-8 rounded-full transition-all {activeImageIndex === i
								? 'bg-white'
								: 'bg-white/20 hover:bg-white/40'}"
						></button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Amenities & Facilities Sections -->
		<div id="amenities" class="mx-auto mt-32 max-w-7xl space-y-24">
			<!-- Amenities -->
			<div class="space-y-12">
				<h2 class="border-b border-white/10 pb-4 font-serif text-4xl">Room Amenities</h2>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{#each room.amenities as item}
						<div
							class="flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10"
						>
							<div
								class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl"
							>
								{item.icon}
							</div>
							<h3 class="font-sans text-base font-medium text-white">{item.name}</h3>
						</div>
					{/each}
				</div>
			</div>

			<!-- Facilities -->
			<div class="space-y-12 pb-24">
				<h2 class="border-b border-white/10 pb-4 font-serif text-4xl">Nearby Facilities</h2>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each room.facilities as item}
						<div
							class="flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10"
						>
							<div
								class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl"
							>
								{item.icon}
							</div>
							<div>
								<h3 class="font-sans text-lg font-medium text-white">{item.name}</h3>
								<p class="mt-1 text-sm tracking-wider uppercase opacity-60">{item.distance}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Floating CTA -->
		{#if showFloatingCTA}
			<div
				class="fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
				in:fly={{ y: 50, duration: 500 }}
				out:fly={{ y: 50, duration: 300 }}
			>
				<button
					class="flex items-center gap-4 rounded-full bg-[#FF5A5F] px-4 py-2 font-sans text-sm font-medium text-white shadow-2xl transition-transform hover:scale-105 active:scale-95 sm:px-8 sm:py-4 sm:text-lg"
				>
					<span class="text-xl">🏠</span>
					Book via Airbnb
				</button>
			</div>
		{/if}
	{/if}
</section>
