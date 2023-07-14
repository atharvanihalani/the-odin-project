let rounds = 0;
const score = [0, 0];
const scoreDOM = document.querySelector(".score");
const messageDOM = document.querySelector(".message");

function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.error("well, shit");
    }
}

function playRound(playerChoice, computerChoice) {
    playerWins = (playerChoice == "rock" && computerChoice == "scissors") || 
                (playerChoice == "scissors" && computerChoice == "paper") ||
                (playerChoice == "paper" && computerChoice == "rock")
    
    computerWins = (computerChoice == "rock" && playerChoice == "scissors") || 
                (computerChoice == "scissors" && playerChoice == "paper") ||
                (computerChoice == "paper" && playerChoice == "rock")
    
    if (playerWins) {
        return 0;
    } else if (computerWins) {
        return 1;
    } else if (playerChoice == computerChoice) {
        return 2;
    } 

    console.error("well, shit; smtn's goofy");
}

function onClick(playerChoice = "rock") {
    if (rounds == 5) {
        return;
    }

    rounds++;
    let computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    
    switch (result) {
        case 0:
            score[0]++;
            messageDOM.textContent = `${playerChoice} beats ${computerChoice}!!`;
            break;
        case 1:
            score[1]++;
            messageDOM.textContent = `${playerChoice} gets beaten by ${computerChoice} :(`;
            break;
        case 2:
            messageDOM.textContent = `${playerChoice} and ${computerChoice} are samesies`;
            break;
    }
    scoreDOM.textContent = `Score - ${score[0]} : ${score[1]}`;

    if (rounds == 5) {
        endGame();
    }
}

function endGame() {
    const endMsg = document.createElement("h2");
    if (score[0] > score[1]) {
        endMsg.textContent = `GGs, u win!!`;
    } else if (score [0] < score[1]) {
        endMsg.textContent = `LAWL get rekt`;
    } else {
        endMsg.textContent = `hmm, it's a tie. play again?`;
    }
    scoreDOM.parentNode.appendChild(endMsg);

    // TODO play again button
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => onClick(rockBtn.id));
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', () => onClick(paperBtn.id));
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click', () => onClick(scissorsBtn.id));
