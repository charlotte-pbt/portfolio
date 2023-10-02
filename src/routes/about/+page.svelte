<!-- src/routes/about.svelte -->
<svelte:head>
   <title>About</title>
</svelte:head>

<head>
    <!--Preload of images to prevent blinking-->
    <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" as="image">
    <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" as="image">
    <link rel="preload" href="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" as="image">
</head>

<div class="main_container" >
       <div class="text">
         <h1 class="about-title">I'm Charlotte Philibert 👋</h1>
         <div class="about-subtitle">
             <p>
                I am currently a 5th year student in computer engineering at EPITA, IMAGE major, specialized in image synthesis. 
                I have a particular interest in video games, animated films and serious games.
             </p>
             <p>
                I am actively looking for a 6-month end-of-studies internship in the field of image synthesis, 
                starting in February 2024. I am open to all kinds of opportunities.
             </p>
             <p>
               You can send me an email at <span class="info-text">charlotte56.philibert@gmail.com</span>
             </p>
         </div>
       </div>
    
       <div class="image-container">
       <img class="photo" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ING3.JPG" alt="Charlotte Philibert">
       </div>
</div>
<div class="main_container">
    <a href="https://www.linkedin.com/in/charlotte-philibert/" target="_blank">
        <img class="logo" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/linkedin.png" alt="LinkedIn">
    </a>
    <a href="https://github.com/charlotte-pbt" target="_blank">
        <img class="logo" src="https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/GitHub_logo.png" alt="GitHub">
    </a>
</div>

<style>

   h1 {
          font-size: 4rem;
          margin: 0 0 0.5em 0;
   }

   @media screen and (max-width: 768px) {
    /* Réduire la taille du texte pour les écrans plus petits (par exemple, les téléphones) */
    h1 {
        font-size: 3.5em;
    }

    .main_container {
        flex-direction: column; /* Afficher les éléments en colonne */
        align-items: flex-start; /* Aligner le contenu à gauche */
    }

    .image-container {
        /* Styles pour l'image au-dessus du texte */
        margin-top: 20px; /* Espacement entre l'image et le texte */
    }

    .text{
        max-width: 800px;
    }

   }

   @media screen and (max-width: 480px) {
      /* Réduire davantage la taille du texte pour les écrans plus petits */
      h1 {
          font-size: 3em;
      }

      .main_container {
        flex-direction: column; /* Afficher les éléments en colonne */
        align-items: flex-start; /* Aligner le contenu à gauche */
    }

    .image-container {
        /* Styles pour l'image au-dessus du texte */
        margin-top: 20px; /* Espacement entre l'image et le texte */
    }

    .text{
        max-width: 800px;
    }
   }

   .main_container {
       margin: 0 60px 0 80px;
       max-width: 1400px;
       display: flex;
       align-items: center;

   }

   .about-title {
       font-size: 4.2rem;
       font-weight: bold;
       margin-top: 10rem;
   }

   .about-subtitle {
       margin-top: -2rem;
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
    max-width: 800px;
}

   .image-container {
    margin-left: 20px; 
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
         margin-top: 10px;
         transition: opacity 0.3s ease;
   }

   .logo:hover {
       opacity: 0.7;
   }

   

</style>