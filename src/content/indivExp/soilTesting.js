const SoilTestSteps = [
  {
    title: "Soil Testing System",
    description: (
      <>
        <p>
          This soil testing system leverages wireless connections to acquire chemical and physical data from embedded devices in a streaming format with batching. Through robust data processing, the system utilizes two distinct machine learning models, each served via a REST API developed using FastAPI, to predict optimal crops and fertilizers.
        </p>
      </>
    ),
    badge: "Intro",
    image:
      "/assets/images/experiment_images/soil_testing.jpeg",
  },
  {
    title: "Two Staged Development",
    description: (
      <>
        <p>
          The development has two stages.
        </p>
        <br />
        <p>
          The initial stage focuses on establishing communication between wireless embedded devices and the processing server. While the system is currently configured for a PC server (using Python), it can also be adapted to function with an Android server.
          Communication utilizes serial ports and sockets, leveraging C++ on the embedded devices and Python on the PC server.
        </p>
        <br />
        <p>
          The second stage involves constructing a REST API to deliver crop and fertilizer predictions based on soil type. This separation is necessitated by the distinct input parameter requirements of the two machine learning models.
          The API endpoints are developed using Python's FastAPI framework.
        </p>
      </>
    ),
    badge: "Development",
  },
  {
    title: "The project is currently under development in a private Git repository. We plan to release it publicly once it has a fully functional frontend.",
    badge: "Deployment",
  },
];

export { SoilTestSteps };