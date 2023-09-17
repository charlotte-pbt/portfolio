<svelte:head>
 <title>Charlotte Philibert</title>
</svelte:head>

<script>
  import Projects_preview from './projects/projects_preview.svelte';
  import { base } from '$app/paths';
</script>

<div class="container">
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

          <div role="link" style="color:black" class="scroll-button animate-scroll" tabindex="0">
            <a href="{base}/about">Click Here</a><div class="arrow">→</div>
          </div>

          <div class="title-project">
            <h11>My Projects</h11>
          </div>

          <Projects_preview/>
         
 </div>



 <style>
  

  .container {
      max-width: 1400px;
      margin: 190px 65px 0 65px;
  }

  h1 {
      font-size: 4rem;
      margin: 0;
  }

  h1 p {
      position: relative;
      font: inherit;
      margin: 0;
      text-align: left;
      line-height: 130%;
      width: fit-content;
      font-weight: 800;
      letter-spacing: -0.03em;
  }

  h11 {
      font-size: 2rem;
      margin: 0;
  }

  h11 p {
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

  h2 {
      max-width: 65ch;
      font-weight: 200;
      margin-top: 0.50rem;
  }
 

  .info-text {
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