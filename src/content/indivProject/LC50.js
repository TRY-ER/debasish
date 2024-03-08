const LCContent = [
  {
    title: "Abstarct",
    description: (
      <>
        <p>
          The problem addressed in this project is to develop robust and accurate QSAR models for predicting the LC50 value, a measure of the concentration of a substance that causes 50% mortality in test organisms, of potentially hazardous chemical compounds.
        </p>
        <br />
        <p>
          The proposed solution for the problem involves the development and evaluation of QSAR models based on molecular descriptors to predict LC50 values. The models will be trained on a dataset of compounds with known LC50 values and molecular descriptors. The performance of the models will be evaluated using statistical measures such as correlation coefficient, root mean square error, and coefficient of determination. The resulting models can be used to predict the toxicity of new compounds, which can be useful in environmental risk assessment, and chemical safety evaluation.
        </p>
      </>
    ),
    badge: "Intro",
    image:
      "/assets/images/project_images/LC_50.jpg",
  },
  {
    title: "Development with of ML models",
    description: (
      <>
        <p>
          Various ML/DL models were tested with crossvalidation and finetuning layer for getting most generalized and least error.
          The regression model was trained and validated using the Kaggle notebook.  
        </p>
        < br/>
        <p>
          The complete code and documents can be found the the following git repository
        </p>
      </>
    ),
    badge: "Development",
    links: [
      {
        image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        url: "https://github.com/TRY-ER/Prediction-of-LC50-value-using-Quantitative-structure-activity-relationship-models-QSAR-models-.git",
        text: "TRY-ER/Prediction-of-LC50-value-using-Quantitative-structure-activity-relationship-models-QSAR-models",
      }
    ]
  },
  {
    description: (
      <>
        <p>
          A sample  user interface was developed using ReactJS with connection to a RESTAPI endpoint developed with FastAPI. 
          The code for the both can be found the the above mentioned github repository. 
        </p>
      </>
    ),
    badge: "Deployment",
    image:
      "/assets/images/project_images/predicted state.png",
  },
];

export { LCContent };