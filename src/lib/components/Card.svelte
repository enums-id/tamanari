<script>
	// Reusable Card Component
	let {
		imageUrl,
		xOffset = 0,
		yOffset = 0,
		rotate = 0,
		zIndex = 10,
		shadow = 'shadow-xl',
		active = true
	} = $props();
</script>

<div
	class="absolute inset-0 overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl transition-all duration-700 ease-out {active
		? 'scale-100 opacity-100'
		: 'scale-95 opacity-0'} {shadow}"
	style="transform: translate({xOffset}px, {yOffset}px) rotate({rotate}deg); z-index: {zIndex};"
>
	<div class="h-full w-full overflow-hidden rounded-[1.5rem]">
		<img src={imageUrl} alt="Card visual" class="h-full w-full object-cover" />
	</div>
</div>
