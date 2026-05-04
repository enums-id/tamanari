<section id="rooms" class="grid">
  {#each rooms as room}
    <RoomCard {...room} />
  {/each}
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
</style>

<script>
  import RoomCard from './RoomCard.svelte';
  let { rooms = [
    { title: 'The Mountain Suite', description: 'Cozy suite with a fireplace.', image: '/room1.jpg' },
    { title: 'The Forest View', description: 'Spacious room with forest views.', image: '/room2.jpg' }
  ] } = $props();
</script>