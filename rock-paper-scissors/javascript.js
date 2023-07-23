let rounds = 0;
const score = [0, 0];
const scoreDOM = document.querySelector(".score");
const messageDOM = document.querySelector(".message");
const roundsDOM = document.querySelector(".rounds");

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

function onMouseOver(playerChoice) {
    if (rounds == 5) {
        return;
    }

    rounds++;
    roundsDOM.textContent = `played ${rounds}/5`
    let computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    
    switch (result) {
        case 0:
            score[0]++;
            messageDOM.textContent = `Your ${playerChoice} beats da compooter's ${computerChoice}!!`;
            break;
        case 1:
            score[1]++;
            messageDOM.textContent = `Your ${playerChoice} gets beaten by the computer's ${computerChoice} :(`;
            break;
        case 2:
            messageDOM.textContent = `Your ${playerChoice} and the computer's ${computerChoice} are samesies`;
            break;
    }
    messageDOM.innerHTML = messageDOM.innerHTML.replace(`${playerChoice}`, `<u>${playerChoice}</u>`);
    messageDOM.innerHTML = messageDOM.innerHTML.replace(`${computerChoice}`, `<u>${computerChoice}</u>`);
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
        endMsg.textContent = `hmm, it's a tie`;
    }
    scoreDOM.parentNode.appendChild(endMsg);

    const playAgain = document.createElement("button");
    playAgain.textContent = "play again?";
    playAgain.onclick = () => location.reload();
    scoreDOM.parentNode.appendChild(playAgain);
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => onMouseOver(rockBtn.id));
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', () => onMouseOver(paperBtn.id));
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click', () => onMouseOver(scissorsBtn.id));
