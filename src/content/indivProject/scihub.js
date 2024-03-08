const ScihubContent = [
  {
    description: (
      <>
        <p>
          This undertaking was focused on the development of an automation script designed to facilitate the retrieval of scientific articles from SCI-HUB via utilization of selenium-python. The script was engineered to enable the acquisition of a designated quantity of research papers across multiple queries. The project employs web scraping as a mechanism for processing web data and retrieving the desired elements as specified by the programmed instructions
        </p>
        <br />
        <p>
          This project uses selenium [Python] to scrap webdata from Google Scholar followed by scihub to download the relevant PDF files of given research topic.
        </p>
      </>
    ),
    badge: "About",
    image:
      "/assets/images/project_images/webautomation.jpg",
  },
  {
    description: (
      <>
        <p>
          The scripts are distributed on a github repository. You can find installation and using instruction in the following repository link. 
        </p>
      </>
    ),
    badge: "Deployment",
    links: [
      {
        image: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        url: "https://github.com/TRY-ER/Scihub_scrapper.git",
        text: "TRY-ER/Scihub_scrapper",
      }
    ] 
  },
];

export { ScihubContent };