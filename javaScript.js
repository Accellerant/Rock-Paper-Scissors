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

    const cpuMove = document.querySelector('.cpuMove');
    const playerMove = document.querySelector('.playerMove');
    const moveResults = document.querySelector('.moveResults');

    //cpuMove.textContent = `User Move: ${playerSelection}`;
    //playerMove.textContent = `CPU Move: ${computerSelection}`;


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


    moveResults.textContent = msgSelections;
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

    let guserScore = 0, gcpuScore = 0, endResults = "";

    //Get the result of the round

    const userScore = document.querySelector('.userScore');
    const cpuScore = document.querySelector('.cpuScore');

    
    const btn = document.querySelectorAll('button');
    btn.forEach((button) => {
        
        button.addEventListener('click', function(e) {
            console.log(`Scores - User: ${guserScore}, CPU: ${gcpuScore}`);
            if(gcpuScore !== 2 && guserScore !== 2) {
                console.log(endResults = playRound(e.target.id, computerPlay()));
    
                        //Add +1 to a score, or nothing at all.
                //If the player Lost
                ( endResults.indexOf("lose") != -1 ) ? gcpuScore++ :
                //If the player won
                ( endResults.indexOf("win") != -1  ) ? guserScore++ :
                //If it was a draw
                null ;
            }

            userScore.textContent = `User Score: ${guserScore}`;
            cpuScore.textContent = `CPU Score: ${gcpuScore}`;

            
        });

        if(gcpuScore == 2 || guserScore == 2)
        findWinner(guserScore, gcpuScore);

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

function gameDOMGeneration () {
    const results = document.querySelector(".results");
    const resultsTitle = document.createElement('h3');
    const userMove = document.createElement('p');
    const cpuMove = document.createElement('p');
    const userResults = document.createElement('div');

    const scoreTitle = document.createElement('h3');
    const userScore = document.createElement('p');
    const cpuScore = document.createElement('p');

    userScore.classList.add('userScore');
    cpuScore.classList.add('cpuScore');
    cpuMove.classList.add('cpuMove');
    userMove.classList.add('playerMove');
    userResults.classList.add('moveResults');




    resultsTitle.textContent = " -- Results -- ";
    userMove.textContent = `User Move: ${"None"}`;
    cpuMove.textContent = `CPU Move: ${"None"}`;

    results.appendChild(resultsTitle);
    resultsTitle.appendChild(userMove);
    resultsTitle.appendChild(cpuMove);
    resultsTitle.appendChild(userResults);

    scoreTitle.textContent = " -- Score -- ";
    userScore.textContent = `User Score: 0`;
    cpuScore.textContent = `CPU Score: 0`;
    scoreTitle.appendChild(userScore);
    scoreTitle.appendChild(cpuScore);


    results.appendChild(scoreTitle);

    const roundResults = document.createElement('h4');
    roundResults.classList.add('moves');
}


gameDOMGeneration();
game();


