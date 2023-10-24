<!-- src/routes/resume.svelte -->
<svelte:head>
   <title>Resume</title>
</svelte:head>

<script>
    let url = "https://files.tanguymaraux.com/api/public/dl/PtB4__r7?inline=true"
</script>

<div class="all">

    <embed
        title="CV_Charlotte_Philibert"
        src={url}
        type="application/pdf"
        width="100%"
        height="1000"
    />

</div>

<style>

.all {
    margin: 0 70px 0 70px;
}


@media screen and (max-width: 768px) {
		.all {
            position: relative;
			margin: 0 30px 0 30px;
		}
	}

</style>