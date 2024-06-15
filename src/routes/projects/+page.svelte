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
    <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub.png" as="image">
    
</head>


<div class="container">
  <h1>My Projects</h1>
  <div class="projects">
      {#each Array(projectsData.length) as _, i}
          {#if i % 2 === 0}
              <div class="row">
                  {#each Array(2) as _, j}
                    {#if projectsData[i+j]}
                      <button class="post {projectsData[i+j].visible ? 'expanded' : ''}" on:click={() => toggleExpand(projectsData[i+j])}>
                        <div class="post-text">
                          <h2 >{projectsData[i+j].title}</h2>
                          <p style="color: #ff6a00; ">{projectsData[i+j].languages}</p>
                          <p >{projectsData[i+j].year}</p>
                        </div>
                        <p style="font-size: 0.9em;" class="readmore">
                            {#if projectsData[i+j].visible}
                                Read Less <div class="arrow">↑</div>
                            {:else}
                                Read More <div class="arrow">↓</div>
                            {/if}
                        </p>
                      </button>
                    {/if}
                  {/each}
              </div>
          {/if}
            <!--Si projectsData[i].visible alors class="infos .expended" sinon class="infos"-->
            <div class="infos {projectsData[i].visible ? 'expanded' : ''}">
                <div class="post-infos">
                    
                    <div style="display: flex; align-items: center;">
                        <h2 style="margin: 0;">{projectsData[i].title}</h2>
                        {#if projectsData[i].github}
                            <a href={projectsData[i].github} class="GitHub" style="width: 5%;" target="_blank">
                                    <img src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub.png" alt="GitHub" style="width: 100%; padding-top :5%"/>
                            </a>
                        {/if}
                    </div>
                    

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
                                        <img class="image" src={image.path} alt={image.alt} id={image.id}/>
                                {/each}
                        </Carousel>
                    </div>
                {/if}
            </div>
      {/each}

  </div>
</div>


<style>
  .container {
      margin: 0 65px 0 65px;
      height: 100%;  
     
  }

  @media screen and (max-width: 768px) {
		.container {
			margin: 0 30px 0 30px;
		}
	}

  .projects {
      margin: 0 auto;
      margin-top: 60px; 
  }

  .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5%;
      margin-top: 5%;
  }

  .post {
      border: 1px solid #ddd;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 10px;
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
      transition: all 0.3s;
      text-align: left;
      vertical-align: top;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text-align: left;
      vertical-align: top;
      position: relative;
      color: black;
      
  }

  .post:hover {
      cursor: pointer;
      border: 1px solid #ff6a00;
      box-shadow: 0 0 10px #ff6a00;
  }

  .post:hover .readmore {
    color: #ff6a00;
}

  .post.expanded {
    border: 1px solid #ff6a00;
    box-shadow: 0 0 10px #ff6a00;
  }

  .post-text {
    flex-grow: 1;
  }

  .readmore {
      display: flex;
      color: black;
      margin: 20px 0 0 0;
      float: right;
      border: none;
      background-color: transparent;
      margin-right: 0;
      margin-left: auto;
  }

  .readmore .arrow {
    margin-left: 0.50rem;
  }

  .infos {
    margin-top: 30px;
    display: none;
  }

  .infos.expanded {
    display: block;
  }

  .post-infos {
      padding-left: 10px;
      padding-right: 10px;
  }

  .carousel {
    padding-top: 35px;
    margin: 0 auto;
    height: auto;
    max-width: 70%;
  }

  @media screen and (max-width: 768px) {
		.carousel {
			max-width: 110%;
		}
	}

  .image {
    width: auto;
    height: auto;
  } 

  h2 {
      margin: 0;
      margin-bottom: 10px;
  }

  .post-text p {
      margin: 0;
      margin-bottom: 5px;
      font-size: 120%;
  }

  .post-text h2{
      margin: 0;
      margin-bottom: 10px;
      font-size: 150%;
  }

  p {
    margin: 0;
    margin-bottom: 5px;
  }

  

    .GitHub {
        background-color: rgba(255, 255, 255, 0.2);
        margin-left: 2%;
        border-radius: 15px 15px 15px 15px;
        min-width: 80px;
        min-height: 10px;
        border: 1px solid #ddd;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
        padding: 2px;
    }

    .GitHub:hover {
        cursor: pointer;
        border: 1px solid #ff6a00;
        box-shadow: 0 0 10px #ff6a00;
    }
</style>