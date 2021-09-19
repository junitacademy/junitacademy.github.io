<script context="module">
  export function preload() {
    return this.fetch(`/api/anchorfm/`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Youtube | Junit Academy</title>
</svelte:head>
<div class="list">
  {#each posts as post}
    <div class="list-item">
      <a rel="prefetch" href="anchorfm/episode/{post.slug}">{post.title}</a>
    </div>
  {/each}
</div>

<style>
  .list-item {
    list-style-type: none;
  }
  .list-item:hover {
    color: #ff5e2b;
    font-weight: bolder;
  }
  .list-item > a {
    padding: 0.5rem 0;
    display: block;
  }
</style>
