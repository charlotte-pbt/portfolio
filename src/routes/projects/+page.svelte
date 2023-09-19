<!-- src/routes/projects.svelte -->
<svelte:head>
   <title>Projects</title>
</svelte:head>

<script>
  import { projects } from './projects.js';
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';
  import Carousel from 'svelte-carousel';

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

<head>
    <!--Preload of images to prevent blinking-->
    {#each projectsData as project}
        {#if project.images}
            {#each project.images as image}
                    <link rel="preload" href={image.path} as="image">
            {/each}
        {/if}
    {/each}
</head>


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
                              <button style="font-size: 0.9em;" class="readmore" on:click={() => toggleExpand(projectsData[i+j])}>
                                  {#if projectsData[i+j].visible}
                                      Read Less <div class="arrow">↑</div>
                                  {:else}
                                      Read More <div class="arrow">↓</div>
                                  {/if}
                              </button>
                      </div>
                  {/each}
              </div>
          {/if}
          {#if projectsData[i].visible}
                <div class="infos">
                    <div class="post-infos">
                        <h2>{projectsData[i].title}</h2>

                        {#if projectsData[i].github}
                            <p style="padding-top: 10px;">
                                Github : <a href={projectsData[i].github} class="github">
                                            {projectsData[i].github}
                                        </a>
                            </p>
                        {/if}

                        <p style="padding-top: 30px;">{@html projectsData[i].infos.replace(/\n/g, '<br>')}</p> 
                        <br>
                        {#if projectsData[i].people}
                            <p>Number of people involved : {projectsData[i].people}</p>
                        {/if}
                        {#if projectsData[i].context}
                            <p>Context : {projectsData[i].context}</p>
                        {/if}
                        {#if projectsData[i].crossplatform}
                            <p>Crossplatform : {projectsData[i].crossplatform}</p>
                        {/if}
                        {#if projectsData[i].platforms}
                            <p>Platform : {projectsData[i].platforms}</p>
                        {/if}
                        {#if projectsData[i].levels}
                            <p>Levels number : {projectsData[i].levels}</p>
                        {/if}
                        {#if projectsData[i].languages}
                            <p>Languages : {projectsData[i].languages}</p>
                        {/if}
                        {#if projectsData[i].dependencies}
                            <p>Dependencies : {projectsData[i].dependencies}</p>
                        {/if}
                    </div>

                    {#if projectsData[i].images}
                        <div class="carousel">
                            <Carousel >
                                    {#each projectsData[i].images as image}
                                    <div style="display: flex; justify-content: center; align-items: center;">
                                        <img class="image" src={image.path} alt={image.alt} id={image.id}/>
                                    </div>
                                    {/each}
                            </Carousel>
                        </div>
                    {/if}
                </div>
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
      padding-left: 10px;
      padding-right: 10px;
  }

  .carousel {
    padding-top: 35px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 0 auto;
    height: auto;
  }

  .image {
    max-height: 800px;
    max-width: 1100px;
    width: auto;
  } 

  .github {
      color: #ff6a00;
  }

  .github:hover {
      color: #ff6a00;
      text-decoration: underline;
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