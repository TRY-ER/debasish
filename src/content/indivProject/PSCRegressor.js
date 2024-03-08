const PSCContent = [
  {
    title: "Abstarct",
    description: (
      <>
        <p>
          Perovskite solar cells (PSCs) have garnered considerable interest as a viable replacement for conventional silicon-based solar cells, thanks to their high-power conversion efficiency (PCE), low manufacturing costs, and ease of adjusting optoelectronic properties. To expedite the development of PSC devices, it is crucial to establish seamless connections between relevant parameters, thereby saving time and reducing the costs associated with actual experimentation. This capability can be achieved through advanced machine learning (ML) models, which are at the forefront of providing such interrelation capabilities. In this investigation, we establish a comprehensive ML pipeline using scientific data from PSCs, which includes data processing methods and synthetic data generation. Various ML models such as linear, logic-tree-based, gradient-based, discriminative-based, attention-based neural network regressors are utilized to predict PCE of PSCs. Our results indicate that the XG-Boost ML algorithm displays a minimum mean absolute error (MAE) of 1.52, while the attention-based neural network model TabNet also demonstrates a MAE as low as 1.62. Furthermore, the coefficient of determination for these models is as high as 0.919 and 0.915, respectively. Our findings and developed models can aid in the study of training and evaluation processes and provide insights into correlations within perovskite data for required property prediction.
        </p>
        <br />
        <p>
          The findings of the project is published as a research paper and can be found using link below.
        </p>
      </>
    ),
    badge: "Intro",
    image:
      "/assets/images/project_images/publication_img.png",
    links: [
      {
        image: "https://onlinelibrary.wiley.com/pb-assets/journal-banners/25130390-1583487885883.jpg",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/adts.202300309",
        text: "Comprehensive Machine Learning Pipeline for Prediction of Power Conversion Efficiency in Perovskite Solar Cells",
      }
    ]
  },
  {
    title: "Understanding and Selecting Parameters",
    description: (
      <>
        <p>
          A massive dataset of 42,443 data points on perovskite solar cells was meticulously cleaned and preprocessed for machine learning analysis. Irrelevant columns, null values, and redundant information were removed. Text data was parsed, new columns were created, and missing values were converted for compatibility. Categorical data was encoded, and all features were scaled for seamless processing. This resulted in a dataset of 22,852 data points with 129 properties, further refined to 104 columns by eliminating scientifically irrelevant categories. Finally, Pearson's correlation coefficients were calculated to analyze the relationships between features and the target performance metric (PCE).
        </p>
        <br />
        <p>
          The complete data exploratory analysis can be found in the github repository below.
        </p>
      </>
    ),
    badge: "Data Selection And Analysis",
    image:
      "/assets/images/project_images/psc_paper_arch.png",
    links: [
      {
        image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        url: "https://github.com/TRY-ER/PerovDataMain.git",
        text: "TRY-ER/PerovDataMain",
      }
    ]
  },
  {
    description: (
      <>
        <p>
          The code for different phases of the research have distributed as different github repositories.
          Find the repositories from following links.
        </p>
      </>
    ),
    badge: "Distribution",
  },
  {
    badge: "ML Development",
    links: [
      {
        image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        url: "https://github.com/TRY-ER/PSC_Regressor",
        text: "TRY-ER/PSC_Regressor",
      }
    ]
  },
  {
    badge: "Frontend",
    links: [
      {
        image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        url: "https://github.com/TRY-ER/perov_deployer_main.git",
        text: "TRY-ER/perov_deployer_main",
      }
    ]
  },
  {
    badge: "Backend",
    links: [
      {
        image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        url: "https://github.com/TRY-ER/perov_deployer_backend.git",
        text: "TRY-ER/perov_deployer_backend",
      }
    ]
  }
];

export { PSCContent };