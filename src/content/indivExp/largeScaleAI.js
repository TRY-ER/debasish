const LargeScaleAISteps = [
  {
    description: (
      <>
        <p>
          "Large Scale Question Answering System" a full-stack platform designed to address various inquiries. At its core lies a pre-trained LLM (Gemini - Pro). By harnessing this knowledge through strategic prompt engineering and context management, the system delivers informative and user-friendly responses in real-time. To ensure the information flows seamlessly, backend generators and frontend Server-Sent Events (SSE) work in tandem, minimizing user latency. Furthermore, the system transforms raw LLM output into visually appealing and well-structured responses through the implementation of HTML parsing on the frontend. ReactJS is employed for the user interface, facilitating intuitive navigation and effortless interaction with the platform.
        </p>
      </>
    ),
    badge: "Intro",
    image:
      "/assets/images/experiment_images/dark_theme_state.png",
  },
  {
    title: "Design Architecture",
    description: (
      <>
        <p>The above architecture is implemented for this ChatBot development.</p>
      </>
    ),
    badge: "Development",
    image:
      "/assets/images/experiment_images/architecture.png",
  },
  {
    title: "Tools / Frameworks Used",
    description: (
      <>
        <p>→      For using the Gemini LLM vertexai is used</p><br />
        <p>→      Langchain is used to manage the context and prompt</p><br />
        <p>→      Uvicorn is used to run the server</p><br />
        <p>→      ReactJS and FastAPI were used for building the web application.</p><br />
        <p>→      GitHub was used as version control system</p><br />
        <p>→      VSCode and NeoVim were used as primary IDE.</p><br />
        <p>→      Amazon EC2 instance is used for model deployment.</p><br />
      </>
    ),
    badge: "Tools",
  },
  {
    description: (
      <>
        <p>
          There was a testing deployment in AWS EC2 instance. The deployment was successful and the system is in halt after testing.
          The developement code for frontend, backend can be found in the following git repository.
        </p>
      </>
    ),
    badge: "Deployment",
    links: [
      {
        image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        url: "https://github.com/TRY-ER/large_scale_question_answering_system.git",
      }
    ]
  },
];

export { LargeScaleAISteps };