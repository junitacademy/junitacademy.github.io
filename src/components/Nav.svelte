<script>
  export let segment;
</script>

<div class="nav-bar">
  <nav>
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href="."
          >Home</a
        >
      </li>
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about"
          >About</a
        >
      </li>
      
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'youtube' ? 'page' : undefined}
          href="youtube">Youtube</a
        >
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'anchorfm' ? 'page' : undefined}
          href="anchorfm">AnchorFm</a
        >
      </li>
    </ul>
  </nav>
</div>

<style>
  .nav-bar > nav {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 0 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .nav-bar {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
