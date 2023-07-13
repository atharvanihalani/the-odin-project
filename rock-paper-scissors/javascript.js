function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.error("well, shit")
    }
}

function playRound(playerChoice, computerChoice) {    
    if (playerChoice == "gun") {
        return "gun";
    }
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        return "sus";
    }

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

function game() {
    const score = [0, 0];
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Play your move");
        playerChoice = playerChoice.toLowerCase();
        let computerChoice = getComputerChoice();

        result = playRound(playerChoice, computerChoice);
        switch (result) {
            case 0:
                score[0]++;
                console.log(`${playerChoice} beats ${computerChoice}. Score: ${score[0]}:${score[1]}`);
                break;
            case 1:
                score[1]++;
                console.log(`${playerChoice} gets beaten by ${computerChoice}. Score: ${score[0]}:${score[1]}`);
                break;
            case 2:ga
                console.log(`${playerChoice} and ${computerChoice} are samesies`)
                break;
            case "gun":
                console.log("nice lmao");
                i--;
                break;
            case "sus":
                console.warn("hey, no cheating!");
                i--;
                break;
        }
    }
    if (score[0] > score[1]) {
        console.log("You win!!");
    } else if (score [0] < score[1]) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}