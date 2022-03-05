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


const moves = ["rock", "paper", "scissors"];
let userChoice,
    userScore = 0,

    cpuChoice,
    cpuScore = 0;

//CPU choses one of the available moves
function computerPlay(){
    
    // The index chosen will be from 0 - 2
    cpuChoice = moves[ Math.floor(Math.random() * 3) ];
}

//Play the actual game
function game(playerSelection, computerSelection){

}

/*
Have the user select their move. 
Compare it to the rest of the moves available to be sure
it's a valid option.
*/
function playerChoice() {
    
    //Get input, then make it lowercase
    let userChoice = prompt("Rock, Paper, or Scissors?\n");

    // Compare it to all three 
    for(let a = 0; a < 3; a++) {
        console.log("userChoice: " + userChoice);
        console.log("Current Word Comparison: " + moves[a]);
        if (userChoice == moves[a]) {
            console.log("Choice " + userChoice + " valid!");
            return userChoice;
        } else {
            console.log("ERROR! Input either \"Rock,\" \"Paper,\" or \"Scissors.\"");
            playerChoice();
        }

            
    }

}

for (let a = 0; a < 5; a++) {
    playerChoice();
}