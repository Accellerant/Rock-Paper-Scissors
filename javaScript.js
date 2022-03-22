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


/*
Play a single round of Rock-Paper-Scissors.
Find out if the player or CPU won and return a string
to be evaluated for key words: win, lose, draw.
*/
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

    const movesChosen = document.querySelector('.movesChosen');
    movesChosen.textContent = msgSelections;

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


// Play Rock-Paper-Scissors until someone reaches a score of 5.
function game(){
    let userScore = 0, cpuScore = 0, endResults = "";
    const userDocScore = document.querySelector('.userScore');
    const cpuDocScore = document.querySelector('.cpuScore');
    const btn = document.querySelectorAll('button');
    const gameResults = document.querySelector('.gameResults');
    

    btn.forEach((button) => {
    
        button.addEventListener('click', (e) => {
            // This function runs whenever there's a click!
            // Each button has an id which is passed to playRound
            if(cpuScore !== 5 && userScore !== 5) {

                gameResults.textContent = endResults = 
                    playRound(e.target.id, computerPlay());
    
                //Add +1 to a score, or nothing at all.
                //If the player Lost
                ( endResults.indexOf("lose") != -1 ) ? cpuScore++ :
                //If the player won
                ( endResults.indexOf("win") != -1  ) ? userScore++ :
                //If it was a draw
                null ;

                userDocScore.textContent = `User Score: ${userScore}`;
                cpuDocScore.textContent = `CPU Score: ${cpuScore}`;
            } 

            findWinner(userScore, cpuScore);
        });

    });
}


// Display who's leading and who wins when a score of 5 is reached.
function findWinner(userScore, cpuScore){

    const gameStatus = document.querySelector('.gameStatus');

    let msgUserWin = `You win, The Computer Loses!`,
        msgCpuWin = `You Lose, The Computer Won.`,
        msgCpuWinning = "The Computer is In The Lead",
        msgPlayerWinning = "You're In The Lead!", 
        msgNeitherWinning = "You're both tied currently";
    
    (userScore === 5 && cpuScore !== 5) ? gameStatus.textContent = msgUserWin :  
    (cpuScore === 5 && userScore !== 5) ? gameStatus.textContent = msgCpuWin :
    //If the player is winning.
    (userScore > cpuScore) ? gameStatus.textContent = msgPlayerWinning : 
    //If the CPU is winning.
    (cpuScore > userScore) ? gameStatus.textContent = msgCpuWinning :
    // Otherwise, currently a draw.
    gameStatus.textContent = msgNeitherWinning;
}

/*
Target and create DOM elements for body which displays
what's happening in the game. 
*/
function gameDOMGeneration () {
    const body = document.querySelector('body');
    body.setAttribute(
        'style', 'display:flex; justify-content: center; flex-direction: column; align-items: center; text-align: center;');


    const movesContainer = document.querySelector(".movesContainer");
    const resultsTitle = document.createElement('h3');
    const movesChosen = document.createElement('p');
    const gameResults = document.createElement('p');

    movesChosen.classList.add('movesChosen');
    gameResults.classList.add('gameResults');

    resultsTitle.textContent = " -- Results -- ";
    movesChosen.textContent = "Awaiting for Round";
    gameResults.textContent = "To Be Played."
    movesContainer.appendChild(resultsTitle);
    movesContainer.appendChild(movesChosen);
    movesContainer.appendChild(gameResults);



    const scoresContainer = document.querySelector(".scoresContainer");
    const scoreTitle = document.createElement('h3');
    const userScore = document.createElement('p');
    const cpuScore = document.createElement('p');

    userScore.classList.add('userScore');
    cpuScore.classList.add('cpuScore');

    scoreTitle.textContent = " -- Score -- ";
    userScore.textContent = `User Score: 0`;
    cpuScore.textContent = `CPU Score: 0`;
    scoresContainer.appendChild(scoreTitle);
    scoresContainer.appendChild(userScore);
    scoresContainer.appendChild(cpuScore);


    const gameStatusContainer = document.querySelector('.gameStatusContainer');
    const gameStatus = document.createElement('div');

    gameStatus.classList.add('gameStatus');
    gameStatus.textContent = "New Game";
    
    gameStatusContainer.appendChild(gameStatus);

}

//Main Program
const moves = ["rock", "paper", "scissors"];

gameDOMGeneration();
game();