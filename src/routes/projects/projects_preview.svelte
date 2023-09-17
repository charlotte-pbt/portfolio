<script>
    import { projects } from './projects.js';
    import { base } from '$app/paths';


    function getsubString(str, len) {
        if (str.length > len) 
        {
            if (str[len] != ' ')
            {
                let i = str.substring(0, len).lastIndexOf(' ');
                return str.substring(0, i) + '...';
            }
            return str.substring(0, len) + '...';
        }
        return str;
    };

</script>

<div class="container">
    <div class="projects">
        {#each Array(projects.length) as _, i}
          {#if i % 2 === 0}
              <div class="row">
                  {#each Array(2) as _, j}
                      <div class="post">
                          <h2>{projects[i+j].title}</h2>
                          <p>{getsubString(projects[i+j].description, 60)}</p>
                            <a class="readmore" href="{base}/projects" on:click={() => projects[i+j].visible=true}>
                                   Read More
                            </a>
                      </div>
                  {/each}
              </div>
            {/if}
        {/each}
    </div>
 </div>
 

 <style>
    .container {
        max-width: 1400px;
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

    h2 {
        margin: 0;
    }

    .readmore {
        display: flex;
        color: black;
        margin: 20px 0 0 0;
        float: right;
    }

    .readmore:hover {
        color: #ff6a00;  
        cursor: pointer;
    }
</style>