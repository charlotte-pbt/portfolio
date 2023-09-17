<!-- src/routes/projects.svelte -->
<svelte:head>
   <title>Projects</title>
</svelte:head>

<script>
  import { projects } from './projects.js';
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';

  let projectsData = [];

  onMount(() => {
      projectsData = [...projects];
     
  });

  onDestroy(() => {
     projects.forEach(p => {
              p.visible = false;
      });
  });

  function toggleExpand(project) {
      projectsData.forEach(p => {
          if (p.title != project.title)
              p.visible = false;
      });
      project.visible = !project.visible;
      projectsData = [...projectsData];
}

</script>

<h1>My Projects</h1>

<div class="container">
  <div class="projects">
      {#each Array(projectsData.length) as _, i}
          {#if i % 2 === 0}
              <div class="row">
                  {#each Array(2) as _, j}
                      <div class="post">
                          <h2>{projectsData[i+j].title}</h2>
                          <p style="font-size: 1.2em;">{projectsData[i+j].year}</p>
                          <p>{projectsData[i+j].languages}</p>
                          <p class="readmore">
                              <button on:click={() => toggleExpand(projectsData[i+j])} style="color: rgb(10, 10, 139);">
                                  {#if projectsData[i+j].visible}
                                      Read Less
                                  {:else}
                                      Read More
                                  {/if}
                              </button>
                          </p>
                      </div>
                  {/each}
              </div>
              {#if projectsData[i].visible}
                  <div class="post-infos">
                      <h2>{projectsData[i].title}</h2>
                      <p>{projectsData[i].description}</p>
                  </div>

              {:else if projectsData[i+1].visible}
                  <div class="post-infos">
                      <h2>{projectsData[i+1].title}</h2>
                      <p>{projectsData[i+1].description}</p>
                  </div>
              {/if}
          {/if}
      {/each}

  </div>
</div>


<style>
  .container {
      max-width: 1100px;
      margin: 50px auto;
      background-color: transparent;
     
  }
  .projects {
      margin: 0 auto;
  }

  .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5%;
      margin: 5% auto;
  }

  .post {
      border: 1px solid #ddd;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 10px;
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
      transition: all 0.3s;
      
  }

  .post-infos {
      padding: 10px;
  }

  h2 {
      margin: 0;
      margin-bottom: 10px;
  }

  p {
      margin: 0;
      margin-bottom: 5px;
  }

  .readmore {
      color: rgb(10, 10, 139);
      text-align: right;
      margin: 20px 0 0 0;
  }

  .readmore:hover {
      color: green;
  }
</style>