import { dummyContent } from "./indivProject/sampleDetail"

const projectContent = [ 
    {
        id: "PSC-regressor",
        title: "PSC PCE Regressor",
        desc: "ML/DL Based Regression Mechanism for Power Converstion Efficiency of Perovskite Solar cells",
        img: "/assets/images/project_images/publication_img.png",
        steps: dummyContent 
    },
    {
        id: "stability",
        title: "Stability Enhancment in PSCs using Ionic Additives",
        desc: "Used various ionic additives and molecules on Perovskite layer to improve hydrophobicity of perovskite layers.",
        img: "/assets/images/project_images/perovskite_main.jpg",
        steps: []
    },
    {
        id: "toxicity",
        title: "LC50 Value Predictor",
        desc: "Used various ML Algorithms to predict LC50 value from chemical descriptors",
        img: "/assets/images/project_images/LC_50.jpg",
        steps: []
    },
    {
        id: "essensia",
        title: "Essensia",
        desc: "Essensia is a startup organization tha focuses on providing research level guidance to students online !",
        img: "/assets/images/project_images/essensia_main.jpg",
        steps: []
    },
    {
        id: "sikhyarthi",
        title: "Sikhyarthi",
        desc: "Sikharthi is a web-based service developed during covid to provide online content for students under studing under NLET curriculum.",
        img: "/assets/images/project_images/sikhyarthi.jpg",
        steps: []
    },
    {
        id: "auto-data-scraper",
        title: "Automated Research Data Scrapper",
        desc: "Developed this CLI tool to automatically collect data from Google Scholar using Selenium and Sci-Hub",
        img: "/assets/images/project_images/webautomation.jpg",
        steps: []
    }
]

export {projectContent}