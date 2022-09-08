let computerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "Rock".toLowerCase();
  } else if (number === 1) {
    return "Paper".toLowerCase();
  } else return "Scissors".toLowerCase();
};

let userChoice = () => {
  let choice;
  while (true) {
    choice = prompt("Rock, paper or scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      break;
    }
    alert("Wrong input, please enter again.");
  }
  return choice;
};

let winner = [(user = 0), (computer = 0)];

let singleRound = (computerChoice, userChoice) => {
  if (userChoice === computerChoice) {
    return "It's a TIE! No cigar!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      winner[1]++;
      return "COMPUTER WON !";
    } else {
      winner[0]++;
      return "USER WON !";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      winner[1]++;
      return "COMPUTER WON !";
    } else {
      winner[0]++;
      return "USER WON !";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      winner[1]++;
      return "COMPUTER WON !";
    } else {
      winner[0]++;
      return "USER WON !";
    }
  }
};

let fiveround = () => {
  for (let i = 0; i < 5; i++) {
    singleRound(computerChoice(), userChoice());
  }
  console.log(winner);
};
fiveround();
if (winner[0] > winner[1]) {
  console.log("user is the winner");
} else if (winner[0] < winner[1]) {
  console.log("computer is the winner");
} else {
  console.log("Its a tie");
}
