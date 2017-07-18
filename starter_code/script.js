$(document).ready(function () {
$(function(){

  function ComputerChoice(){
      var computerChoice = Math.ceil(Math.random()*3);
      if (computerChoice === 1) {
        computerChoice = "rock";
      } else if (computerChoice === 2) {
        computerChoice = "paper";
      } else {
        computerChoice = "scissors";   
      }
      return computerChoice;
  }


    function convertUserChoice(userChoice){
      var computerChoice = ComputerChoice();
      var outcome = "";
    if (userChoice == computerChoice) {
        $("#winner").text("It's a tie!");
    }
      else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
            $("#winner").text("You Won!");
        } else {
            $("#winner").text("You Lost.");
        }
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            $("#winner").text("You Won!");
        } else {
            $("#winner").text("You Lost.");
        }
    } else if (userChoice == "scissors") {
        if (computerChoice == "paper") {
            $("#winner").text("You Won!");
        } else {
            $("#winner").text("You Lose.");
        }
    }
      $("#choice").text("Computer Picked " + computerChoice)
      $("#another").text("You Picked " + userChoice)
    }
  
  //add event listeners:
        $('#rock').click(function() {
            convertUserChoice("rock");
        });
        $('#paper').click(function() {
            convertUserChoice("paper");
        });
        $('#scissors').click(function() {
            convertUserChoice("scissors");
        });
        $(".button").click(function(){
    location.reload()
  });
  });
});