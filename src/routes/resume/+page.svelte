<!-- src/routes/resume.svelte -->
<svelte:head>
   <title>Resume</title>
</svelte:head>

<script>
    let url = "https://files.tanguymaraux.com/api/public/dl/JdCfQ3hF?inline=true"
</script>

<head>
    <link rel="preload" href={url}>
</head>

<div class="all">

    <iframe
        title="CV_Charlotte_Philibert"
        src={url}
        width="80%"
        height="100%"
        style="border:none"
        frameborder="0"
    ></iframe>

</div>

<style>

.all {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

</style>