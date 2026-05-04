<script>
	import content from '$lib/data/content.json';
</script>

<section class="flex flex-col items-center bg-bg px-8 py-24">
	<div class="max-w-2xl space-y-6 text-center">
		<span class="block text-sm font-medium tracking-[0.2em] text-primary uppercase"
			>{content.intro.badge}</span
		>
		<h2 class="text-5xl leading-tight text-text md:text-6xl">{content.intro.title}</h2>
		<p class="text-lg leading-relaxed font-light text-secondary md:text-xl">
			{content.intro.description}
		</p>
		<div class="pt-8">
			<a
				href="#rooms"
				class="hover:bg-opacity-90 inline-block bg-primary px-8 py-3 font-medium text-white transition-colors"
			>
				{content.intro.ctaText}
			</a>
		</div>
	</div>
</section>
