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


<div class="container">
  <h1>My Projects</h1>
  <div class="projects">
      {#each Array(projectsData.length) as _, i}
          {#if i % 2 === 0}
              <div class="row">
                  {#each Array(2) as _, j}
                      <div class="post {projectsData[i+j].visible ? 'expanded' : ''}">
                          <h2>{projectsData[i+j].title}</h2>
                          <p style="color: #ff6a00;">{projectsData[i+j].languages}</p>
                          <p >{projectsData[i+j].year}</p>
                              <button class="readmore" on:click={() => toggleExpand(projectsData[i+j])}>
                                  {#if projectsData[i+j].visible}
                                      Read Less <div class="arrow">↑</div>
                                  {:else}
                                      Read More <div class="arrow">↓</div>
                                  {/if}
                              </button>
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
      max-width: 1400px;
      margin: 0 65px 0 65px;
      height: 100%;  
     
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

  .post.expanded {
    border: 1px solid #ff6a00;
    box-shadow: 0 0 10px #ff6a00;
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
      display: flex;
      color: black;
      margin: 20px 0 0 0;
      float: right;
      border: none;
      background-color: transparent;
  }

  .readmore .arrow {
    margin-left: 0.50rem;
  }

  button.readmore:hover {
      color: #ff6a00;  
      cursor: pointer;
}
</style>