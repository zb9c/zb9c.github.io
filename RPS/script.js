//Removes "____WINS"
setTimeout(
  () => {
    a = document.getElementsByClassName("result")[0];
    a.style.display= 'none';
  },
  100
);

let userChoice;
let botChoice;
var choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;


function assignBot(){
    x = Math.floor(Math.random() * (3 - 0) + 0);
	return choices[x];
}
function clickRock(){
    //Computer makes a choice
    botChoice = assignBot();
    userChoice = "rock";
    //Computer choice and user choice are compared and the winner is chosed
    compare(userChoice, botChoice);
    //the bot is reassigned a choice
    botChoice = assignBot();
}
function clickPaper(){
    botChoice = assignBot();
    userChoice = "paper";
     compare(userChoice, botChoice);
     botChoice = assignBot();
}
function clickScissors(){
    botChoice = assignBot();
    userChoice = "scissors";
    compare(userChoice, botChoice);
    botChoice = assignBot();
}
function userWon(){
    r = document.getElementsByClassName('result')[0];
    r.innerHTML = userChoice + " beats " + botChoice + ". You Win!";
    r.style.display = 'block';
    r.style.color = "green";

}
function botWon(){
    r = document.getElementsByClassName('result')[0];
    r.innerHTML = botChoice + " beats " + userChoice + ".";
    r.style.display = 'block';
    r.style.color = "red";
}
function compare(choice1, choice2) {
    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    if (choice1 == choice2) {
        r = document.getElementsByClassName('result')[0];
        r.innerHTML = "Tie!";
        r.style.color = "black";
        r.style.display = 'block';
        return "Tie";
    }
    if (choice1 == choices.length - 1 && choice2 == 0) {
        computerScore = computerScore + 1;
        document.getElementById("computer-score").innerHTML = computerScore;
        botWon();
	    return "Computer Wins!";	
    }
    if (choice2 == choices.length - 1 && choice1 == 0) {
        userScore = userScore + 1;
        document.getElementById("user-score").innerHTML = userScore;
        userWon();
	    return "You Win!";
	    }
    if (choice1 > choice2) {
        userScore = userScore + 1;
        document.getElementById("user-score").innerHTML = userScore;
        userWon();
	    return "You Win!";	
    } else {
	    computerScore = computerScore + 1;
        document.getElementById("computer-score").innerHTML = computerScore;
        botWon();
        return "Computer Wins";	
    }
}
function resetGame(){
    userScore = 0;
	computerScore = 0;
	botChoice = assignBot();
	document.getElementById("computer-score").innerHTML = computerScore;
	document.getElementById("user-score").innerHTML = userScore;
}