<script>
	const amenities = [
		{ name: 'High-Speed WiFi', icon: '🌐' },
		{ name: 'Gourmet Kitchen', icon: '🍳' },
		{ name: 'Private Parking', icon: '🅿️' },
		{ name: 'Mountain View', icon: '🏔️' },
		{ name: 'Smart Home', icon: '🏠' },
		{ name: 'Fresh Linens', icon: '🛏️' }
	];
</script>

<section class="bg-bg py-24 px-8">
	<div class="mx-auto max-w-5xl">
		<div class="mb-16 text-center">
			<span class="text-primary font-medium tracking-[0.2em] uppercase text-sm block mb-4">Features</span>
			<h2 class="font-serif text-5xl text-text">Our Amenities</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each amenities as item}
				<div class="flex items-center gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
					<div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-bg text-3xl">
						{item.icon}
					</div>
					<h3 class="font-sans text-lg font-medium text-text">{item.name}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>
