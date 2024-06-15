export let projects = [

    /* RVAU UnderCooked */

    {
        title: "UnderCooked",
        year: "5th year at Epita",
        people: "5",
        context: "School project",
        description: "Multiplayer VR cooking game",
        infos: "UnderCooked is a duo cooking game in VR made on Unity and Photon. \nThe goal is to cook as many dishes as possible in a limited time. You have to communicate with your partner to succeed. \n\n The game is played with a VR headset and two controllers.",
        languages: ["C#", " Unity"],
        crossplatform : ["Oculus Quest"],
        visible: false,
        images: [
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/rvau1.png",
                alt: "UnderCooked Main Menu",
                id: "undercooked1",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/rvau2.png",
                alt: "UnderCooked Kitchen",
                id: "undercooked2",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/rvau3.png",
                alt: "UnderCooked Oven",
                id: "undercooked3",
            }
        ],
    },

    /* 3D Animation */

    {
        title: "3D Animation",
        year: "5th year at Epita",
        people: "2",
        context: "School project",
        description: "Cloth and wind simulation with a fan.",
        infos: "Cloth and wind simulation : \n\nSeveral cloths are hung on clotheslines, and the wind comes from a fan that can be adjusted in terms of power and position.",
        languages: ["C++", " OpenGL"],
        crossplatform : ["Windows", " MacOS", " Linux"],
        dependencies: ["Glad", " GLFW", " ImGui"],
        visible: false,
        images: [
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/anim3d1.png",
                alt: "Animation 3D",
                id: "anim3d1",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/anim3d2.png",
                alt: "Animation 3D",
                id: "anim3d2",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/anim3d3.png",
                alt: "Animation 3D",
                id: "anim3d3",
            }
        ],
        github: "https://github.com/charlotte-pbt/ANI3D",
    },

    /* Catmull–Clark subdivision surface */

    {
        title: "Catmull–Clark subdivision surface",
        year: "4th year at Epita",
        people: "2",
        context: "School project",
        description: "Recursive implementation of Catmull–Clark subdivision surface for image synthesis project.",
        infos: "The Catmull–Clark algorithm is a technique to create curved surfaces by using subdivision surface modeling.\n\nWe implemented a recursive version of the algorithm with an interface allowing you to select .objs and a result displayed using OpenGL",
        languages: ["C++", " OpenGL"],
        crossplatform : ["Windows", " MacOS", " Linux"],
        dependencies: ["Glad", " GLFW3", " Glm", " Dear ImGui"],
        visible: false,
        images: [
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/catmull-clark1.png",
                alt: "Catmull-Clark 0 subdivision",
                id: "catmullclark1",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/catmull-clark4.png",
                alt: "Catmull-Clark 2 subdivision",
                id: "catmullclark4",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/catmull-clark3.png",
                alt: "Catmull-Clark 4 subdivision",
                id: "catmullclark3",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/catmull-clark2.png",
                alt: "Catmull-Clark sword 1 subdivision",
                id: "catmullclark2",
            }
        ],
    },


    /* My Tiny Town */

    {
        title: "My Tiny Town",
        year: "4th year at Epita",
        people: "2",
        context: "School project",
        description: "Design software for building your own city.",
        infos: "My tiny town is a simple CAD city software inspired by some games we used to play. Behind this project lies one week of work and much progress made. \n\nThis project doesn't have any pretension, and it's only a way for us to learn new things through a toy project.",
        languages: ["OpenGL"],
        crossplatform : ["Windows", " MacOS", " Linux"],
        dependencies: ["Glad", " GLFW", " assimp", " Dear ImGui", " STB Image" ],
        visible: false,
        images: [
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/mytinytown.png",
                alt: "My Tiny Town",
                id: "myTinyTown",
            }
        ],
        github: "https://github.com/downvoteed/my-tiny-town",
    },


    /* Ball game */

    {
        title: "Casual mobile game",
        year: "Personnal project",
        people: "1",
        context: "Personnal project",
        description: "Game prototype (3 levels) made on Unity in 5 days",
        infos: "This is a casual mobile game made on Unity in 5 days for an internship test.",
        languages: ["C#", " Unity"],
        platforms: ["Android"],
        levels: ["3"],
        visible: false,
        images: [
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ball_game1.png",
                alt: "Ball Game 1",
                id: "ball_game1",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/ball_game2.png",
                alt: "Ball Game 2",
                id: "ball_game2",
            }
        ],
        github: "https://github.com/charlotte-pbt/Ball-Game",
    },


    /* Video game S2 */

    {
        title: "Video game",
        year: "1st year at Epita",
        people: "4",
        context: "School project",
        description: "Multiplayer hide-and-seek video game on Unity",
        infos: "Multiplayer hide-and-seek video game with 2 maps made on Unity and Photon.",
        languages: ["C#", " Unity"],
        visible: false,
        images: [
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/jeu1.png",
                alt: "Hide and seek game 1",
                id: "Hide_and_seek_game1",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/jeu2.png",
                alt: "Hide and seek game 2",
                id: "Hide_and_seek_game2",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/jeu3.png",
                alt: "Hide and seek game 3",
                id: "Hide_and_seek_game3",
            },
            {
                path: "https://raw.githubusercontent.com/charlotte-pbt/portfolio/master/src/images/jeu4.png",
                alt: "Hide and seek game 4",
                id: "Hide_and_seek_game4",
            }
        ],
    },
]