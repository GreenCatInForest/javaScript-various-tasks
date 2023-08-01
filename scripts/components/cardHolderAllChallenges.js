let cardHolderChallengesContainers = document.querySelectorAll(
  ".cardHolderChallengesContainer"
);
const currentPageUrl = window.location.pathname;

fetch("./data/data.json")
  .then((response) => response.json())
  .then((datas) => {
    dataChallenges = datas.challenges;
    displayCardChallengesContainer(dataChallenges);
  })
  .catch((error) => console.error("Error fetching data:", error));

const displayCardChallengesContainer = (dataChallenges) => {
  const matchedDataChallenges = dataChallenges.filter((dataChallenge) =>
    currentPageUrl.includes(dataChallenge.name)
  );

  matchedDataChallenges.forEach((matchedDataChallenge) => {
    matchedDataChallenge.allChallenges.forEach((challenge) => {
      console.log(challenge.title);
    });
  });
};

// const challengesContainerCard = document.createElement("div");
// challengesContainerCard.setAttribute("id", "challengesContainerCard");
// challengesContainerCard.innerHTML = `<h4>${dataChallenge.title}</h4>
// //         <p>${listBasicJsChallenge.content}</p>
// //         <img src="${listBasicJsChallenge.image}" alt="${listBasicJsChallenge.title}"/>
// //         <div>
// //         <a href="${listBasicJsChallenge.projectLink}">Explore</a>
// //         <a href="${listBasicJsChallenge.projectGithubLink}">Github</a>
// //         </div>`;
// cardHolderChallengesContainer.appendChild(challengesContainerCard);

//     let listBasicJsChallenges = datas.challendes.basicJsChallenges;
//     listBasicJsChallenges.forEach((listBasicJsChallenge) => {
//       basicJsChallengesCard = document.createElement("div");
//       basicJsChallengesCard.setAttribute("id", "basicJsChallengesCard");
//       basicJsChallengesCard.innerHTML = `<h4>${listBasicJsChallenge.title}</h4>
//         <p>${listBasicJsChallenge.content}</p>
//         <img src="${listBasicJsChallenge.image}" alt="${listBasicJsChallenge.title}"/>
//         <div>
//         <a href="${listBasicJsChallenge.projectLink}">Explore</a>
//         <a href="${listBasicJsChallenge.projectGithubLink}">Github</a>
//         </div>`;
//       basicJsChallengesContainer.appendChild(basicJsChallengesCard);
//     });