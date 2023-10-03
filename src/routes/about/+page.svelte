<!-- src/routes/about.svelte -->
<svelte:head>
   <title>About</title>
</svelte:head>

<script>
    import { onMount } from "svelte";
    import { onDestroy } from "svelte";

    let screenWidth = 769;

    if (typeof window !== 'undefined') {

        screenWidth = window.innerWidth;

    function updateScreenHeight() {
        screenWidth = window.innerWidth;
    }

    window.addEventListener('resize', updateScreenHeight);

    // N'oubliez pas de retirer l'écouteur d'événements lorsque le composant est démonté
    onDestroy(() => {
      window.removeEventListener('resize', updateScreenHeight);
    });
}
</script>

<head>
    <!--Preload of images to prevent blinking-->
    <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" as="image">
    <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" as="image">
    <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" as="image">
</head>

<div class="container">
    <div class="main_container" >
        <div class="text">
            <h1 class="about-title">
                <p>I'm Charlotte Philibert 👋</p>
            </h1>
            <div class="about-subtitle">
                <p>
                    I am currently a 5th year student in computer engineering at EPITA, IMAGE major, specialized in image synthesis. 
                    I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, 
                    starting in February 2024. 
                </p>
                <p>
                    I have a particular interest in video games, animated films and serious games. 
                    I have already completed a 5-month internship in this field at the Polymorph studio as a 3D developer. 
                    I was able to take part in the development of real-time applications on Unreal Engine, such as AI for a VR serious game.
                </p>
                <p>
                    I am open to all kinds of opportunities.
                </p>
                <p>
                You can send me an email at <span class="info-text">charlotte56.philibert@gmail.com</span>
                </p>
            </div>
        </div>
        
        {#if screenWidth > 768}
                <div class="image-container">
                <img class="photo" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert">
                </div>
        {/if}
    </div>

    <div class="main_container2">
        <a href="https://www.linkedin.com/in/charlotte-philibert/" target="_blank">
            <img class="logo" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" alt="LinkedIn">
        </a>
        <a href="https://github.com/charlotte-pbt" target="_blank">
            <img class="logo" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" alt="GitHub">
        </a>
    </div>

    {#if screenWidth <= 768}
        <div class="main_container3" >
                <div class="image-container">
                <img class="photo" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert">
                </div>
        </div>
    {/if}  
</div> 

<style>

   h1 {
          font-size: 4rem;
          margin: 0 0 0.5em 0;
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
      font-size: auto;
  }

    @media screen and (min-width: 768px) {
        .image-container {
            margin-left: 20px;
        }

        .container {
            margin: 120px 70px 0 70px;
            max-width: 1400px;
        }
    }

   @media screen and (max-width: 768px) {
    /* Réduire la taille du texte pour les écrans plus petits (par exemple, les téléphones) */
    h1 {
        font-size: 3.5em;
    }

    
   .container {
       margin: 120px 30px 0 30px;
   }

    .image-container {
        /* Styles pour l'image au-dessus du texte */
        margin-top: 20px; /* Espacement entre l'image et le texte */
        margin-left: 0px;
    }
   }

   @media screen and (max-width: 480px) {
      /* Réduire davantage la taille du texte pour les écrans plus petits */
      h1 {
          font-size: 3em;
      }

      .container {
       margin: 190px 30px 0 30px;
   }
   }

   .main_container {
       display: flex;
       align-items: center;
   }

   .main_container3 {
        display: flex;
        justify-content: center; /* Centre horizontalement */
        align-items: center; /* Centre verticalement */
        margin: 0 auto;
        margin-top: 10px;
        flex-direction: column;
   }

   .main_container2 {
       display: flex;
       align-items: left;

   }

   .about-title {
       font-weight: bold;
       
   }

   .about-subtitle >p {
       font-weight: normal;
       font-size: 1rem;
       line-height: 2rem;
   }

   .info-text {
       font-style: italic;
       font-weight: bold;
   }

   .text {
    flex: 1;
    max-width: 950px;
}

   .photo {
       border-radius: 50%;
       min-width: 250px; /* Largeur maximale souhaitée */
       min-height: 250px; /* Hauteur maximale souhaitée */
       object-fit: cover;
       width: 250px;
       height: 250px;
   }
   
   .logo {
         width: 50px;
         height: 50px;
         margin-right: 20px;
         transition: opacity 0.3s ease;
   }

   .logo:hover {
       opacity: 0.7;
   }

   

</style>