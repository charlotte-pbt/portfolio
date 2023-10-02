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
                  <a href="{base}/projects">
                    <button class="post" on:click={() => projects[i+j].visible=true}>     
                        <div class="post-text">
                          <h2>{projects[i+j].title}</h2>
                          <p>{getsubString(projects[i+j].description, 60)}</p>
                          </div>
                            <p class="readmore">
                                   Read More
                            </p>
                        </button>
                    </a>
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
        margin-top: 60px; 
        
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
      width: 100%;
      height: 100%;
      
  }

  .post:hover {
      cursor: pointer;
      border: 1px solid #ff6a00;
      box-shadow: 0 0 10px #ff6a00;
  }

  .post:hover .readmore {
    color: #ff6a00;
}

.post-text {
    flex-grow: 1;
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

    h2 {
        margin: 0;
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

</style>