<!-- src/routes/resume.svelte -->
<svelte:head>
   <title>Resume</title>
</svelte:head>

<script>
    import { onMount } from "svelte";
    let url = "https://files.tanguymaraux.com/api/public/dl/JdCfQ3hF?inline=true"

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

<head>
    <link rel="preload" href={url}>
</head>

<div class="all">

    <iframe
        title="CV_Charlotte_Philibert"
        src={url}
        frameborder="0"
        width="100%"
        height="100%"
    ></iframe>

</div>

<style>

.all {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 70px 0 70px;
}

@media screen and (max-width: 768px) {
		.all {
			margin: 0 30px 0 30px;
		}
	}

</style>