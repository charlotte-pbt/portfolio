<svelte:head>
 <title>Charlotte Philibert</title>
</svelte:head>

<script>
  import Projects from './projects/projects.svelte';
  import { base } from '$app/paths';
</script>

<div class="container">
  <div class="info">
    <div class="animate-background">
      <div class="container info-container">
        <div class="info-text">
          <h1>
            <p class="animate-text-1">Computer engineering student,</p>
          </h1>
          <h11>
            <p class="text-2">EPITA, IMAGE major, specialized in images synthesis</p>
          </h11>
        </div>
        <h2 class="subtitle">
          I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, starting in February 2024.
        </h2>
        <div style="color:black" class="scroll-button animate-scroll" tabindex="0">
          <a href="{base}/about">Click Here</a><div class="arrow">→</div>
        </div>
        <div class="title-project">
          <h11>My Projects</h11>
        </div>
      </div>
    </div>
  </div>
 </div>

 <!--<div class="background-div"></div>-->

 <Projects/>
 


 <style>

  :global(body)
    {
      background: linear-gradient(130deg, rgb(255, 255, 110), rgb(245, 116, 245));
    }
  
  .info {
      text-align: center;
      position: relative;
  }       

  .info-container {
      height: 100%;
      display:flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      align-items: start;
  }

  .container {
      max-width: 1400px;
      margin: 190px 0 0 2.5rem;
  }

  .info h1 {
      font-size: 4rem;
      margin: 0;
  }

  .info h1 p {
      position: relative;
      font: inherit;
      margin: 0;
      text-align: left;
      line-height: 130%;
      width: fit-content;
      font-weight: 800;
      letter-spacing: -0.03em;
  }

  .info h11 {
      font-size: 2rem;
      margin: 0;
  }

  .info h11 p {
      position: relative;
      font: inherit;
      margin: 0;
      text-align: left;
      line-height: 130%;
      width: fit-content;
      font-weight: 800;
      letter-spacing: -0.03em;
  }

  .title-project {
      font-weight: 800;
      margin-top: 200px;
  }

  .info h2 {
      max-width: 65ch;
      font-weight: 200;
      margin-top: 0.50rem;
  }

  
/*
.background-div {
  background-color: var(--background);
  width: 100%;
  height: 56vh;
  margin: -155px auto;
}*/
 

  .info .info-text {
      position: relative;
  }

  .scroll-button {
    display: flex;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .scroll-button .arrow {
    margin-left: 0.50rem;
  }
</style>