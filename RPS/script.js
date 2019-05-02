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


function clickRock(){
	userChoice = 0;
}
function clickPaper(){
	userChoice = 1;
}
function clickScissors(){
	userChoice = 2;
}
function assignBot(){
	botChoice = Math.floor(Math.random() * (3 - 0) + 0);
	console.log(botChoice);
}
function compare(choice1, choice2) {
    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    
    if (choice1 == choice2) {
        return "Tie";
    }
    if (choice1 == choices.length - 1 && choice2 == 0) {
        return "Right wins";
    }
    if (choice2 == choices.length - 1 && choice1 == 0) {
        return "Left wins";
    }
    if (choice1 > choice2) {
        return "Left wins";
    } else {
        return "Right wins";
    }
}


botChoice = assignBot();
