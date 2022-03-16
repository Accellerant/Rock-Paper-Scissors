//Requirements
/*  
    function:  
        computerPlay(), game(), playRound(), 

    parameters: 
        playerSelection, computerSelection
*/

// Pseudocode
/*
    Three Game Variables for Rock, Paper, Scissors
    Two Variables for User and CPU: Score and Choice
    
    #Program Starts
    Game loops 5 times.
        CPU randomly chooses one of three Game Variables
        
        User chooses Game variable via String
            Convert to lower-case string.
            Compare to three game variables.
            None match? Repeat 'till valid user input.

        Print Who Chose What

        Compare CPU to User Choice.
            If CPU Choice != User Choice
                Compare all plausible CPU win conditions
                If (  CPU == Rock, User == Scissors   OR  
                    CPU == Paper, User == Rock  OR
                    PU == Scissors, User == Paper   )

                    CPU +1 Score 
                    Print CPU Scored a point

                else CPU had no wins, then the User wins
                    User +1 Score
                    Print User Scored a point
                
            otherwise, both must have the same choice
                print tie message
    Exit Loop - Compare Scores
    Declare Winner
    #Program Ends
*/


//CPU choses one of the available moves
function computerPlay(){
    
    // The index chosen will be from 0 - 2
    return moves[ Math.floor(Math.random() * 3) ];
}

//Play a single round of Rock-Paper-Scissors
function playRound(playerSelection, computerSelection){

    let msgSelections = 
        `CPU picked ${computerSelection},\nYou picked ${playerSelection}.`,
    
        // MUST have "lose" for game()
        msgCpuWon = 
            `You lose this round, ${computerSelection} beats ${playerSelection}!`,
        // MUST have "win" for game()
        msgPlayerWon = 
            `You win this round, ${playerSelection} beats ${computerSelection}!`,
        // MUST have "DRAW" for game()
        msgDraw = "DRAW: You both have the same move.";


    console.log(msgSelections);

    // If both selections are the same
    if (computerSelection === playerSelection) {
        return msgDraw;

    // If any of the win conditions for CPU are found, they win.
    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') || 
                (computerSelection == 'paper' && playerSelection == 'rock') ||
                (computerSelection == 'scissors' && playerSelection ==='paper')) {

        return msgCpuWon;
        
    // Otherwise, the player scored. 
    } else {
        return msgPlayerWon;
    }   
}



// Play Rock-Paper-Scissors for 5 times before finding a winner. 
function game(){

    let userScore = 0, cpuScore = 0, results = "";

    //Get the result of the round

    const btn = document.querySelectorAll('button');
    btn.forEach((button) => {
        
        button.addEventListener('click', function(e) {
            console.log(results = playRound(e.target.id, computerPlay()));

                    //Add +1 to a score, or nothing at all.
            //If the player Lost
            ( results.indexOf("lose") != -1 ) ? cpuScore++ :
            //If the player won
            ( results.indexOf("win") != -1  ) ? userScore++ :
            //If it was a draw
            null ;
            
            findWinner(userScore, cpuScore);
        });

    });

}


//Print who won the game.
function findWinner(userScore, cpuScore){

    let msgUserWin = `You win!`,
        msgCpuWin = `You Lose.`,
        msgDraw = `DRAW - Nobody Won!`;

    //If the player won
    (userScore > cpuScore) ? console.log(msgUserWin) : 
    //If the CPU won
    (cpuScore > userScore) ? console.log(msgCpuWin) :
    // Otherwise, it must be a draw.
    console.log(msgDraw);

}

//Main Program
//Utilized by computerPlay() and playerChoice()
const moves = ["rock", "paper", "scissors"];

game();

const results = document.querySelector(".results");
const resultsTitle = document.createElement('h3');
const userMove = document.createElement('p');
const cpuMove = document.createElement('p');
const userResults = document.createElement('div');

const scoreTitle = document.createElement('h3');
const userScore = document.createElement('p');
const cpuScore = document.createElement('p');

for (let a = 0; a < 5; a++) {

    resultsTitle.textContent = " -- Results -- ";
    userMove.textContent = `User Move: ${a}`;
    cpuMove.textContent = `CPU Move: ${a}`;

    results.appendChild(resultsTitle);
    resultsTitle.appendChild(userMove);
    resultsTitle.appendChild(cpuMove);


    scoreTitle.textContent = " -- Score -- ";
    userScore.textContent = `User Score: ${a}`;
    cpuScore.textContent = `CPU Score: ${a}`;

    results.appendChild(scoreTitle);
    scoreTitle.appendChild(userScore);
    scoreTitle.appendChild(cpuScore);
    
}


