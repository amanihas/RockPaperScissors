// --- Base Variables ---
let playerScore = 0; // keeps track of when the user wins a round
let computerScore = 0; // keeps track of when the user loses a round
let round = 0; // keeps track of the amount of rounds

// Randomly chooses a string from the array
function randomizer() {
    let list = ['rock', 'paper', 'scissors'];
    return list[Math.floor(Math.random() * list.length)];
}

// Updates the #player-score HTML Element 
function updatePlayerScore(newScore) {

}

// Updates the #computer-score HTML Element
function updateComputerScore(newScore) {

}

// Updates the #player-choice HTML Element
function updatePlayerChoice(newChoice) {

}

// Updates the #computer-choice HTML Element
function updateComputerChoice(newChoice) {

}

// Updates the #round-result HTML Element
function updateRoundResult(newResult) {

}

// Collects all the button elements and makes the run playRound(button.id) on click
document.querySelectorAll('.options button').forEach((button) => {
    // Add a click event listener
})


// the whole game in a function
function playRound(playerChoice) {
    // Creates a choice for the computer
    let computerChoice = randomizer();

    // Keeps track of what message will be displayed after the round
    let roundResult = ""

    // Check to see if it is a tie
    if (computerChoice == playerChoice) {
        // Set round result to a tie
    }
    else {
        // The logic for every other case
    }



    // Updates the choice selected
    updatePlayerChoice(playerChoice)
    updateComputerChoice(computerChoice)

    // Updates the score after someone won
    updateComputerScore(computerScore);
    updatePlayerScore(playerScore);

    updateRoundResult(roundResult)

}


