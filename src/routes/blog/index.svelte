<script context="module">
  export function preload() {
    // return { posts:[]};
    return this.fetch(`/api/blog/`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  console.log(posts);
</script>

<svelte:head>
  <title>Blog | Junit Academy</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href="blog/posts/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>
