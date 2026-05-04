<script>
	import Hero from '$lib/components/Hero.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import RoomsGrid from '$lib/components/RoomsGrid.svelte';
	import Amenities from '$lib/components/Amenities.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSplit from '$lib/components/HeroSplit.svelte';
</script>

<Hero />
<HeroSplit
	title="Located in the heart of Bandung"
	subtitle="Love the serenity"
	description="Nestled in the serene landscapes in the heart of Bandung, our retreat offers the perfect escape from the bustling city. Enjoy nature's embrace while remaining close to the city's charm."
	imageUrl="/hero/hero-1.jpeg"
/>
<RoomsGrid />
<Footer />
