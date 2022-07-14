let i;
let playerScore = 0;
let compScore = 0;
let round = 0;
let k = 0;

const buttons = document.querySelectorAll('.play');
const playerscored = document.querySelector('#playerscore');
const compscored = document.querySelector('#compscore');
const result = document.querySelector('#result');
const final = document.querySelector('#finalresult');
const reset = document.querySelector('#reset');

buttons.forEach((button) => {

    button.addEventListener('click', ()=>{
        if(round<=4){
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        result.textContent = playRound(computerSelection, playerSelection);
        playerscored.textContent = `playerscore:${playerScore}`;
        compscored.textContent = `computerscore:${compScore}`;
        }


        else{
            k = 1;
            console.warn("reload");
        }

        if(round==5 && k==0){
            if(compScore==playerScore){final.textContent = "It's a draw.";}
            else if(compScore>=playerScore){final.textContent = `computer beat you by ${compScore}-${playerScore}`;}
            else{final.textContent = `you beat computer by ${playerScore}-${compScore}`};
        }
    });

});

reset.addEventListener('click', ()=>{
    round=0;
    playerScore=0;
    compScore=0;
    k=0;
    result.textContent="";
    final.textContent="";
    playerscored.textContent = `playerscore:${playerScore}`;
    compscored.textContent = `computerscore:${compScore}`;
});

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
    round++;
    if(computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'paper'){
        i = 2;
        playerScore++;
        return "You win! Paper beats rock.";
    }
    else if(computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'rock'){
        i = 1;
        return "Draw!";
    }
    else if(computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors'){
        i = 0;
        compScore++;
        return "You lose! Rock beats scissors.";
    }
    else if(computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'paper'){
        i = 1;
        return "Draw!";
    }
    else if(computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock'){
        i = 0;
        compScore++;
        return "You lose! Paper beats rock.";
    }
    else if(computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'scissors'){
        i = 2;
        playerScore++;
        return "You win! Scissors beats paper.";
    }
    else if(computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper'){
        i = 0;
        compScore++;
        return "You lose! Scissors beats paper.";
    }
    else if(computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'rock'){
        i = 2;
        playerScore++;
        return "You win! rock beats scissors.";
    }
    else {
        i = 1;
        return "Draw!";
    }
}

