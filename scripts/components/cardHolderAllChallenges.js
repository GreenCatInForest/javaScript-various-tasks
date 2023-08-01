let basicJsChallengesContainer = document.querySelector(
  "#basicJsChallengesContainer"
);

fetch("./data/data.json")
  .then((response) => response.json())
  .then((datas) => {
    dataChallenges = datas.challenges;
    displayListAllChallenges(dataChallenges);
  })
  .catch((error) => console.error("Error fetching data:", error));

let displayListAllChallenges = (dataChallenges) => {
  dataChallenges.forEach((dataChallenge) => console.log(dataChallenge));
};

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
//   })
