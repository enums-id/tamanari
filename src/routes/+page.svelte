<script>
	import Hero from '$lib/components/Hero.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import RoomsGrid from '$lib/components/RoomsGrid.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSplit from '$lib/components/HeroSplit.svelte';
	import content from '$lib/data/content.json';
</script>

<Hero />
<!-- <Intro /> -->
<HeroSplit
	title={content.heroSplit.title}
	subtitle={content.heroSplit.subtitle}
	description={content.heroSplit.description}
	imageUrl={content.heroSplit.imageUrl}
	ctaText={content.heroSplit.ctaText}
/>
<RoomsGrid />
<Footer />
