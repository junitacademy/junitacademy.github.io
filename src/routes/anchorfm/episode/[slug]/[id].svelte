<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`/api/anchorfm/items/${params.id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return {
        post: {
          ...data,
          enmbedUrl: data.link.replace('/episodes/', '/embed/episodes/'),
        },
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h2 class="post-title">{post.title}</h2>

<div class="content">
  <div style="text-align: center;">
    <iframe
      title={post.title}
      src={post.enmbedUrl}
      height="102px"
      width="400px"
      frameborder="0"
      scrolling="no"
    />
  </div>
  <div class="post-content">
    {@html post.description}
  </div>
</div>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
