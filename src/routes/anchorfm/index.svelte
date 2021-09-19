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
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <div class="list-item">
      <a href="anchorfm/episode/{post.slug}">{post.title}</a>
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
