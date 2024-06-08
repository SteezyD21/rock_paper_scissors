const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      const playerChoice = option.innerHTML;
      player.src = "./gameImages/" + playerChoice + "Player.png";

      const choices = ["stone", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * 3);
      const computerChoice = choices[randomIndex];
      computer.src = "./gameImages/" + computerChoice + "Computer.png";

      console.log("Player choice image path: ", player.src);
      console.log("Computer choice image path: ", computer.src);

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (playerChoice === "stone") {
        if (computerChoice === "paper") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "scissors") {
          playerPoints.innerHTML = pPoints + 1;
        }
      } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "stone") {
          playerPoints.innerHTML = pPoints + 1;
        }
      } else if (playerChoice === "scissors") {
        if (computerChoice === "stone") {
          computerPoints.innerHTML = cPoints + 1;
        } else if (computerChoice === "paper") {
          playerPoints.innerHTML = pPoints + 1;
        }
      }
    }, 900);
  });
});
