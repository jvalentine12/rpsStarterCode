// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var ROCK = 'rock';
var PAPER = 'paper';
var SCISSORS = 'scissors';
var COMPUTER_WINS = 'computer wins';
var USER_WINS = 'user wins';
var DRAW = 'draw';
var VALID_CHOICES = [ROCK, PAPER, SCISSORS];
var VALID_OUTCOMES = [COMPUTER_WINS, USER_WINS, DRAW];
var generateComputerChoice = function () {
    var number = genRandom(2);
    var choice = VALID_CHOICES[number];
    return choice;
};
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
var array=  ["rock","paper","scissors" ];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2.
var generateComputerChoice = function (i){Math.round(Math.random()*i))}
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[ranomNum])
var randomNum= (Math.round(Math.random()*2));
var choice= array[randomNum];
    // Task 1, Step 4: return this new value
    console.log(choice);{
        return choice
    };

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
    var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    var outcome = ''
// Task 2, Step 1: Create an "if/else if/else" statement that compares the
// userChoice and computerChoice under any possible game outcome.
    if (userChoice == ROCK) {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = COMPUTER_WINS;
       }
       else {
           outcome = USER_WINS;
       }
    }
    else if (userChoice == PAPER) {
       if (computerChoice == ROCK) {
           outcome = USER_WINS;
       }
       else if (computerChoice == PAPER) {
           outcome = DRAW;
       }
       else {
           outcome = COMPUTER_WINS;
       }
    }
    else {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = USER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    return outcome 
};

var handleUserClick = function(userChoice){
    // generate the computer choice
    var computerChoice = generateComputerChoice();
    
    // pick a winner
    var outcome = pickWinner(userChoice, computerChoice);
    
    // set the html element text for the computer choice and the outcome
    $('#computer-choice').text('The computer picked ' + computerChoice);
    $('#winner').text('Outcome: ' + outcome);
};
    