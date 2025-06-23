function getComputerChoice() {
    let rand_num = Math.floor(Math.random() * 3);
    switch (rand_num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt('Choose rock, paper, or scissors: ');
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == computerChoice) {
        console.log(`Both players choose ${humanChoice}. Its a tie!`)
        return 'tie';    
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        console.log(`${humanChoice.toUpperCase()} beats ${computerChoice}. Player 1 is the winner!`)
        return 'human';
    }
    else {
        console.log(`${computerChoice.toUpperCase()} beats ${humanChoice}. The computer is the winner!`)
        return 'computer';
    }

}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

outcome = playRound(humanSelection, computerSelection);
console.log(getHumanChoice())