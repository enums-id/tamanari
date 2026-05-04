<script>
	import content from '$lib/data/content.json';
	let { id, title, description, image } = $props();
</script>

<div
	class="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:rotate-[-1deg]"
>
	<!-- Postcard border/edge styling -->
	<div class="relative pb-4">
		<!-- Image frame -->
		<div class="mb-6 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gray-100">
			<img
				src={image}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
			/>
		</div>

		<!-- Content -->
		<div class="space-y-2 px-1">
			<h3 class="text-2xl text-text">{title}</h3>
			<p class=" line-clamp-2 text-sm font-light text-secondary">{description}</p>
		</div>

		<!-- Action -->
		<div class="mt-6">
			<a
				href="/rooms/{id}"
				class="block w-full rounded-full border border-primary bg-transparent px-4 py-2.5 text-center text-sm font-medium tracking-widest text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-white"
			>
				{content.common.detail}
			</a>
		</div>
	</div>
</div>
