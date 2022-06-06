let i;
let playerScore = 0;
let compScore = 0;

function computerPlay(){
    let x = Math.floor((Math.random()*3));
    switch(x){
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

function playRound(computerSelection, playerSelection){
    if(computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'paper'){
        i = 2;
        return "You win! Paper beats rock.";
    }
    else if(computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'rock'){
        i = 1;
        return "Draw!";
    }
    else if(computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors'){
        i = 0;
        return "You lose! Rock beats scissors.";
    }
    else if(computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'paper'){
        i = 1;
        return "Draw!";
    }
    else if(computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock'){
        i = 0;
        return "You lose! Paper beats rock.";
    }
    else if(computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'scissors'){
        i = 2;
        return "You win! Scissors beats paper.";
    }
    else if(computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper'){
        i = 0;
        return "You lose! Scissors beats paper.";
    }
    else if(computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'rock'){
        i = 2;
        return "You win! rock beats scissors.";
    }
    else {
        i = 1;
        return "Draw!";
    }
}

function game(){
    for(let a = 0; a<5; a++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Choose from stone, paper or scissors.");
        console.log(playRound(computerSelection, playerSelection));
        if(i == 2){
            playerScore = playerScore + 1;
        }
        else if(i == 0){
            compScore = compScore + 1;
        }
    }

    if(playerScore > compScore){
        console.log("You beat computer by " + playerScore + " - " + compScore );
    }
    else if (compScore > playerScore){
        console.log("Computer beat you by " + compScore + " - " + playerScore );
    }
    else{
        console.log("There was a tie between you and computer")
    }
}

game();