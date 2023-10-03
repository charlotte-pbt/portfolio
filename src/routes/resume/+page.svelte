<!-- src/routes/resume.svelte -->
<svelte:head>
   <title>Resume</title>
</svelte:head>

<script>
    import { onMount } from "svelte";
    let url = "https://files.tanguymaraux.com/api/public/dl/PtB4__r7?inline=true"

    onMount(() => {
        // Obtenez la hauteur de la nav-container
        let navContainer = document.querySelector('.header');
        let navContainerHeight = 0;
        if (navContainer instanceof HTMLElement) {
            navContainerHeight = navContainer.offsetHeight;

        // Appliquez la hauteur calculée à la div
        const maDiv = document.querySelector('.all');

        if (maDiv instanceof HTMLElement) {
            maDiv.style.height = `calc(100vh - ${navContainerHeight}px)`;
        }
        }
    });
</script>

<div class="all">

    <iframe
        class="responsive-iframe"
        title="CV_Charlotte_Philibert"
        src={url}
        frameborder="0"
    ></iframe>

</div>

<style>

.all {
    position: relative;
    margin: 0 70px 0 70px;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0; 
}

@media screen and (max-width: 768px) {
		.all {
            position: relative;
			margin: 0 30px 0 30px;
		}
	}

</style>