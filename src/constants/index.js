import {
    call,
    cargo,
    cocktail,
    estate,
    lorry,
    uber,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    photoshop,
    sass,
    cocktailSite,
    weather,
    game,
    pizza,
    cv,
    showcase,
    simplex,
    presentationSite,
    trainer
} from "../assets";



export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: reactjs,
    },
    {
        title: "Problem Solver",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "sass",
        icon: sass,
    },
    {
        name: "Photoshop",
        icon: photoshop,
    },
];

const experiences = [
    {
        title: "Cocktail Bartender",
        company_name: "Creative Bar Events/Anturaj Coffe",
        icon: cocktail,
        iconBg: "#E6DEDD",
        date: "09/2015- 12/2018",
        points: [
            "Responsibility",
            "Seriousness",
            "Punctuality",
            "Teamwork",
            "Communication",
        ],
    },
    {
        title: "Call Centre Agent",
        company_name: "Optima Solutions Services",
        icon: call,
        iconBg: "#E6DEDD",
        date: "02/2018- 05/2018",
        points: [
            "Communication",
            "Sales contracts",
        ],
    },
    {
        title: "Cargo Vehicle Driver",
        company_name: "Construct SRL",
        icon: cargo,
        iconBg: "#E6DEDD",
        date: "03/2020- 07/2021",
        points: [
            "Professional driver",
            "Cargo cartificate",
        ],
    },
    {
        title: "Real Estate Agent",
        company_name: "Select Estate",
        icon: estate,
        iconBg: "#E6DEDD",
        date: "09/2021- 12/2021",
        points: [
            "Real estate sales",
            "Sale and purchase techniques",
        ],
    },
    {
        title: "Partner Uber Driver",
        company_name: "Spedition",
        icon: uber,
        iconBg: "#E6DEDD",
        date: "01/2022 - 03/2022",
        points: [
            "Passenger transport",
        ],
    },
    {
        title: "Lorry Vehicle Driver",
        company_name: "Bip Mobile",
        icon: lorry,
        iconBg: "#E6DEDD",
        date: "03/2022 - 06/2022",
        points: [
            "Transport general goods in the European community",
            "Overseeing the loading and offloading of goods",
            "Inspecting and cleaning the vehicle.",
            "Safely transporting goods to and from distribution centers",
            "Obeying the rules of the road and following company safety regulations",
            "Finding the quickest and safest route to your destination",
            "Completing travel logs.",
            "Sale and purchase techniques",
            "Following accident procedures",
            "Reporting any accidents or delays",
            "Maintaining a good relationship with customers",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Cat timp am colaborat cu Laurentiu la curs mi-a aratat ca are un potential mare in partea de front end developer. Are ambitie si nu ii este frica sa invete lucruri noi. Totally recommend him!",
        name: "George",
        designation: "Trainer",
        company: "SDA",
        image: trainer,
    },
    {
        testimonial:
            "Laurentiu a fost un student excelent la cursul de JavaScript! A fost dedicat, a înțeles conceptele cheie rapid și a făcut progrese remarcabile. A fost o adevărată plăcere să îl am ca elev și îi doresc mult succes în continuare!",
        name: "Sorin",
        designation: "Trainer",
        company: "SDA",
        image: "https://ca.slack-edge.com/T03JHUM1VAT-U03NQRLRQ49-f95f478fcc3d-512",
    },
    {
        testimonial:
            "Îmi face plăcere să spun că Laurentiu a fost un elev foarte bun la cursul de ReactJS. A avut o atitudine pozitivă și a demonstrat o înțelegere profundă a frameworkului. A fost un adevărat standout și îi urez numai bine în viitorul său de programator!",
        name: "Razvan",
        designation: "Trainer",
        company: "SDA",
        image: "https://ca.slack-edge.com/T03JHUM1VAT-U04DJJN9L2K-a37937b9abee-72",
    },
];

const projects = [
    {
        name: "Simplex Games Store",
        description:
            "An online platform that allows you to buy games directly from your web browser.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "green-text-gradient",
            },
            {
                name: "react-redux",
                color: "pink-text-gradient",
            },
        ],
        image: simplex,
        source_code_link: "https://github.com/LaurVieru96/game-store-final-project",
        source_code_demo: "https://simplexgaming.netlify.app/"

    },
    {
        name: "Presentation Site",
        description:
            "An online platform that allows you to buy games directly from your web browser.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "pink-text-gradient",
            },
        ],
        image: presentationSite,
        source_code_link: "https://github.com/LaurVieru96/presentation-site",
        source_code_demo: "https://laurvieru.netlify.app/#home"

    },
    {
        name: "Showcase App",
        description:
            "A small web application that lets manage the list of showcased works",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "react-redux",
                color: "pink-text-gradient",
            },
        ],
        image: showcase,
        source_code_link: "https://github.com/LaurVieru96/showcase",
        source_code_demo: "https://showcase-app-project.netlify.app/"

    },
    // {
    //     name: "Resume",
    //     description:
    //         "A short resume builded only with HTML and CSS.",
    //     tags: [
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "green-text-gradient",
    //         },
    //     ],
    //     image: cv,
    //     source_code_link: "https://github.com/LaurVieru96/Portfolio",
    //     source_code_demo: "https://vieru-laurentiu-review.netlify.app/"

    // },
    // {
    //     name: "Taverneta Truck",
    //     description:
    //         "A web application builded during classes at Software Development Academy.",
    //     tags: [
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "js",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: pizza,
    //     source_code_link: "https://github.com/LaurVieru96/PizzaAppSite-atClassWithColleagues",
    //     source_code_demo: "https://pizza-rest-truck.netlify.app/"

    // },
    // {
    //     name: "Heroes Game",
    //     description:
    //         "App build during class when I learned OOP principles.",
    //     tags: [
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "js",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: game,
    //     source_code_link: "https://github.com/LaurVieru96/The-heroes-game",
    //     source_code_demo: "https://heroes-game-online.netlify.app/"

    // },
    // {
    //     name: "Weather App",
    //     description:
    //         "Weather App with public weather API",
    //     tags: [
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "js",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: weather,
    //     source_code_link: "https://github.com/LaurVieru96/weather-App-with-API",
    //     source_code_demo: "https://weather-app-online-api.netlify.app/"

    // },
    // {
    //     name: "Cocktails Brew App",
    //     description:
    //         "Add custom recipes for your home brews below.",
    //     tags: [
    //         {
    //             name: "html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "js",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: cocktailSite,
    //     source_code_link: "https://github.com/LaurVieru96/cocktailRecipeApp",
    //     source_code_demo: "https://cocktail-recipe-online.netlify.app/"
    // },
];

export { services, technologies, experiences, testimonials, projects };