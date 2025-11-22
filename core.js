// Function needs to return rock, paper or sccissors randomly
// math.random will give us a number between 0 and 1 
// We can multiply that by 3 to get a number between 0 and 3 
// We can then use Math.floor to round down to the nearest whole number (0, 1, or 2)
// No arrays needed 
// 0 = rock, 1 = paper, 2 = scissors
// Use if statements to return the correct string based on the random number generated
// Example: if the random number is 0, return "rock"

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
} 

// Function to get user input

function userPlay() {
    const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return userInput;
}

//throw error if its not valid input
function validateInput(input) {
    const validInputs = ["rock", "paper", "scissors"];
    if (!validInputs.includes(input)) {
        throw new Error("Invalid input. Please enter rock, paper, or scissors.");
    }
    return input;
}

// Function to play a single round of rock-paper-scissors
// if human chpice is the same as computer choice return tie
// if human choice is rock and computer is scissors human wins
// if human choice is paper and computer is rock human wins
// if human choice is scissors and computer is paper human wins
// else computer wins

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

// Function to play a 5-round game of rock-paper-scissors
// Logic
// Initialize humanScore and computerScore to 0
// Loop 5 times to play 5 rounds
// In each round, get human choice and computer choice
// Call playRound to determine the winner of the round
// Update scores based on the result
// After 5 rounds, compare scores and declare overall winner

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // Play 5 rounds

    for (let i = 0; i < 5; i++) {
        const humanChoice = validateInput(userPlay());
        const computerChoice = computerPlay();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);

        if (result.startsWith("You win")) {
            humanScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
}

// Display final scores and overall winner

    console.log("Final Scores:");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    // Determine overall winner 

    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("The game is a tie overall!");
    }
}

// Call the playGame function to start the game

playGame();