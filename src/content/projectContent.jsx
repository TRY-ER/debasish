import { dummyContent } from "./indivProject/sampleDetail"
import { PSCContent } from "./indivProject/PSCRegressor"
import { StabilityContent } from "./indivProject/Stability"
import { SikhyarthiContent } from "./indivProject/Sikhyarthi"
import { LCContent } from "./indivProject/LC50"
import { ScihubContent } from "./indivProject/scihub"

const projectContent = [ 
    {
        id: "PSC-regressor",
        title: "PSC PCE Regressor",
        desc: "ML/DL Based Regression Mechanism for Power Converstion Efficiency of Perovskite Solar cells",
        img: "./assets/images/project_images/publication_img.png",
        steps: PSCContent 
    },
    {
        id: "stability",
        title: "Stability Enhancment in PSCs using Ionic Molecules and Additives",
        desc: "Experimented Various Ionic Additives and Molecules on Perovskite Layer to Improve Hydrophobicity of Perovskite Layers.",
        img: "./assets/images/project_images/perovskite_main.jpg",
        steps: StabilityContent 
    },
    {
        id: "toxicity",
        title: "LC50 Value Predictor",
        desc: "Used Various ML Algorithms to Predict LC50 Value from Chemical Descriptors",
        img: "./assets/images/project_images/LC_50.jpg",
        steps: LCContent 
    },
    // {
    //     id: "essensia",
    //     title: "Essensia",
    //     desc: "Essensia is a Startup Organization That Focuses on Providing Research Level Guidance to Students Online !",
    //     img: "/assets/images/project_images/essensia_main.jpg",
    //     steps: []
    // },
    {
        id: "sikhyarthi",
        title: "Sikhyarthi",
        desc: "Sikharthi is a Web-based Service Developed During Pandemic to Provide Online Content for Students Under Studing Under NLET Curriculum.",
        img: "./assets/images/project_images/sikhyarthi.jpg",
        steps: SikhyarthiContent 
    },
    {
        id: "auto-data-scraper",
        title: "Automated Research Data Scrapper",
        desc: "Developed This CLI Tool to Automatically Collect Data From Google Scholar using Selenium and Sci-Hub",
        img: "./assets/images/project_images/webautomation.jpg",
        steps: ScihubContent 
    }
]

export {projectContent}