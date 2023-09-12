<script>
    import { projects } from './projects.js';
</script>

<div class="container">
    <div class="projects">
        {#each projects as project, i}
        <div class="post">
            <h2>{project.title.substring(0, 20)}</h2>
            <p>{project.description.substring(0, 60)}</p>
            <p class="readmore">
             <a style=" color: rgb(10, 10, 139);" href={`/projects/${i}`}>
               Read More
             </a>
           </p>
        </div>
        {/each}
    </div>
 </div>

 <style>
    .container {
        max-width: 1100px;
        margin: 50px auto;
       
    }
    .projects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 70px;
        margin: 0 auto;
    }

    .post {
        border: 1px solid #ddd;
        padding: 10px;
        box-shadow: 0 0 10px #eee;
    }

    h2 {
        margin: 0;
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