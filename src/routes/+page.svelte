<script>
	import Hero from '$lib/components/Hero.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import RoomsGrid from '$lib/components/RoomsGrid.svelte';
	import Events from '$lib/components/Events.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSplit from '$lib/components/HeroSplit.svelte';
	import content from '$lib/data/content.json';

    const events = [
        { title: 'Sunset Yoga Session', date: 'Every Friday', image: '/hero/hero-1.jpeg' },
        { title: 'Local Art Workshop', date: 'May 15, 2026', image: '/hero/hero-2.jpeg' },
        { title: 'Community Dinner', date: 'May 20, 2026', image: '/hero/hero-3.jpeg' }
    ];
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
<Events {events} />
<Footer />
