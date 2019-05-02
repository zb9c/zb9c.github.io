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


botChoice = assignBot();
console.log(botChoice);

function assignBot(){
	x = Math.floor(Math.random() * (3 - 0) + 0);
	return choices[x];
}
function clickRock(){
	userChoice = "rock";
	alert(compare(userChoice, botChoice));
}
function clickPaper(){
	userChoice = "paper";
 	alert(compare(userChoice, botChoice));
}
function clickScissors(){
	userChoice = "scissors";
	alert(compare(userChoice, botChoice));
}

function compare(choice1, choice2) {
    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    if (choice1 == choice2) {
        return "Tie";
    }
    if (choice1 == choices.length - 1 && choice2 == 0) {
        computerScore = computerScore + 1;
	document.getElementById("computer-score").innerHTML = computerScore;
	return "Computer Wins!";	
    }
    if (choice2 == choices.length - 1 && choice1 == 0) {
        userScore = userScore + 1;
	document.getElementById("user-score").innerHTML = userScore;
	return "You Win!";
	    }
    if (choice1 > choice2) {
        userScore = userScore + 1;
	document.getElementById("user-score").innerHTML = userScore;
	return "You Win!";	
    } else {
	computerScore = computerScore + 1;
	document.getElementById("computer-score").innerHTML = computerScore;
        return "Computer Wins";	
    }
    botChoice = assignBot();
    console.log(botChoice);
}
function resetGame(){
	let userScore = 0;
	let computerScore = 0;
	botChoice = assignBot();
	document.getElementById("computer-score").innerHTML = computerScore;
	document.getElementById("user-score").innerHTML = userScore;
}