<script>
    import { projects } from './projects.js';
    import { onMount } from 'svelte';
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
        {#each projects as project, i}
            <div class="post">
                <h2>{project.title}</h2>
                <p>{getsubString(project.description, 60)}</p>
                <p class="readmore">
                    <a href="{base}/projects" class="link" on:click={() => project.visible=true} style="color: rgb(10, 10, 139);">
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
        background-color: transparent;
       
    }
    .projects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 70px;
        margin: 0 auto;
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
        color: rgb(10, 10, 139);
        text-align: right;
        margin: 20px 0 0 0;
    }

    .readmore:hover {
        color: green;
    }
</style>