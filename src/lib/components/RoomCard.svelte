<div class="card">
  <img src={image} alt={title} />
  <h3>{title}</h3>
  <p>{description}</p>
  <button class="cursor-pointer">View Details</button>
</div>

<style>
  .card {
    border: 1px solid #f3f4f6;
    padding: 1.5rem;
    background: white;
    transition: all 0.4s ease;
  }
  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
  }
  .cursor-pointer {
    cursor: pointer;
    background: transparent;
    border: 1px solid var(--color-primary);
    padding: 0.5rem 1rem;
    transition: background 0.3s;
  }
  .cursor-pointer:hover {
    background: var(--color-primary);
    color: white;
  }
</style>

<script>
  let { title, description, image } = $props();
</script>