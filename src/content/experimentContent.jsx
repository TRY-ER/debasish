import { LargeScaleAISteps } from "./indivExp/largeScaleAI"
import { IntTTSSteps } from "./indivExp/intTTS"
import { SoilTestSteps } from "./indivExp/soilTesting"
import { WixConSteps } from "./indivExp/wixDataConnector"


const experimentContent = [ 
    {
        id: "large-scale-qna",
        title: "Large Scale QnA System with GenAI",
        desc: "Full Stack Solution Development for Large Scale QnA System using Generative AI",
        img: "/assets/images/experiment_images/dark_theme_state.png",
        steps: LargeScaleAISteps 
    },
    {
        id: "indic-tts-stt",
        title: "Integrated T2S and S2T System",
        desc: "Integrated various open-source tools, and Huggingface Inference Endpoint for T2S and S2T for Indic Languages with transliteration and translation",
        img: "/assets/images/experiment_images/integrate_s2t.jpeg",
        steps: IntTTSSteps 
    },
    {
        id: "NPK-Reader",
        title: "ML Integrated Soil Testing and Prediction",
        desc: "Developed the RESTAPI Backend for ML model prediction for crops and fertilizers with chemial and physical parameter input from embedded device.",
        img: "/assets/images/experiment_images/soil_testing.jpeg",
        steps: SoilTestSteps 
    },
    {
        id: "wix-database-connector",
        title: "WIX Database Python Connector",
        desc: "This is a python library for abstraction over wix-data RESTAPI for easier data access without explicit setup for wix-developer API",
        img: "/assets/images/experiment_images/wix-data.webp",
        steps: WixConSteps 
    },
]

export {experimentContent}