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

function playRound(humanChoice, computerChoice) {
    
    let readOut = document.querySelector("#readOut");

    if (humanChoice == computerChoice) {
        readOut.textContent = `Both players choose ${humanChoice}. Its a tie!`;
        return 'tie';    
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        readOut.textContent = `${humanChoice.toUpperCase()} beats ${computerChoice}. Player 1 is the winner!`
        return 'human';
    }
    else {
        readOut.textContent = `${computerChoice.toUpperCase()} beats ${humanChoice}. The computer is the winner!`
        return 'computer';
    }
}


let humanScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
container.addEventListener('click', (event) => {
    if ((event.target.tagName === 'BUTTON') && (humanScore < 5 && computerScore < 5)) {
        
        let humanSelection = event.target.id;
        
        let computerSelection = getComputerChoice();

        outcome = playRound(humanSelection, computerSelection);
        switch (outcome) {
            case 'human':
                ++humanScore;
                break;
            case 'computer':
                ++computerScore;
                break;
            case 'tie':
                break;
        }
    }
        let score = document.querySelector("#score"); 
        score.textContent = `Human: ${humanScore}   Comp: ${computerScore}`;
});