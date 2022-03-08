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
    
        msgCpuWon = 
            `You lose this round, ${computerSelection} beats ${playerSelection}!`,
        msgPlayerWon = 
            `You win this round, ${playerSelection} beats ${computerSelection}!`,
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

/*
Have the user select their move. 
Compare it to the rest of the moves available to be sure
it's a valid option.
*/
function playerChoice() {

    // Loop until a valid choice is entered.
    while(true) {
        //Get input, convert to string, lowercase.
        let userChoice = String( prompt("Rock, Paper, or Scissors?\n") ).toLowerCase();

        //See if userChoice is a valid move choice.
        if (moves.indexOf(userChoice) != -1) 
            return userChoice;
            
        console.log("ERROR! Input either \"Rock,\" \"Paper,\" or \"Scissors.\"");    
    }

}

// Play Rock-Paper-Scissors for 5 times before finding a winner. 
function game(){

    let userScore = 0, cpuScore = 0, findWinner = "";

    for (let a = 0; a < 5; a++) {
        let cpuChoice = computerPlay(), 
            userChoice = playerChoice();
    
        console.log(findWinner = playRound(userChoice, cpuChoice));
    }
}

function updateScores(userScore, cpuScore, findWinner){

}


// The main program,
const moves = ["rock", "paper", "scissors"];

game();