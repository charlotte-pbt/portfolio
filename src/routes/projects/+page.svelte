<!-- src/routes/projects.svelte -->
<svelte:head>
   <title>Projects</title>
</svelte:head>

<script>
    import Projects from './projects.svelte';
</script>

<dev class="container">
  <Projects/>
  <slot></slot>
</dev>

<style>

    .container {
      height: 100%;
      display:flex;
      flex-direction: column;
      justify-content: center;
      size: cover;
  }
</style>
