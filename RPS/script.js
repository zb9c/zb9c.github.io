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
let cheating = false;
let y = 0;

botChoice = assignBot();

function assignBot(){
    if(cheating === false){
        x = Math.floor(Math.random() * (3 - 0) + 0);
        console.log("Bot Chose: " + choices[x])
        return choices[x];
    }else{
        
        x = Math.floor(Math.random() * (3 - 0) + 0);
        if(choices[x] == "rock"){document.getElementsByClassName("choice")[0].style.borderColor = "green";}
        if(choices[x] == "paper"){document.getElementsByClassName("choice")[1].style.borderColor = "green";}
        if(choices[x] == "scissors"){document.getElementsByClassName("choice")[2].style.borderColor = "green";}
        
        console.log(choices[x]);
        
        
        return choices[x];
    }

    
}
function clickRock(){

    userChoice = "rock";
    //Computer choice and user choice are compared and the winner is chosed
    compare(userChoice, botChoice);
    //the bot is reassigned a choice
    botChoice = assignBot();
}
function clickPaper(){
    userChoice = "paper";
    compare(userChoice, botChoice);
    botChoice = assignBot();
}
function clickScissors(){
    userChoice = "scissors";
    compare(userChoice, botChoice);
    botChoice = assignBot();
}
function userWon(){
    document.getElementById("user-score").innerHTML = userScore;
    r = document.getElementsByClassName('result')[0];
    r.innerHTML = userChoice + " beats " + botChoice + ". You Win!";
    r.style.display = 'block';
    r.style.color = "green";

}
function botWon(){
    
    document.getElementById("computer-score").innerHTML = computerScore;   
    r = document.getElementsByClassName('result')[0];
    r.innerHTML = botChoice + " beats " + userChoice + ".";
    r.style.display = 'block';
    r.style.color = "red";
}
function compare(hc, btc) {
    
    if(hc == btc){  //condition 1
        r = document.getElementsByClassName('result')[0];
        r.innerHTML = "Tie!";
        r.style.color = "black";
        r.style.display = 'block';
    }
    else if(hc == "rock"){ //condition 2
        if(btc == "scissors"){ 
            console.log("rock wins");
            userScore = userScore + 1
            userWon();
        }else{
            console.log( "paper wins");
            computerScore = computerScore + 1;
            botWon();
        }
    }
    else if(hc == "paper"){ //condition 3
        if(btc == "rock"){ 
            console.log("paper wins");
            userScore = userScore + 1
            userWon();
        }else{ 
            console.log("scissors wins");
            computerScore = computerScore + 1;
            botWon();
        }
    }
    else if(hc == "scissors"){
        if(btc == "rock"){
            console.log("rock wins");
            computerScore = computerScore + 1;
            botWon();
        }else{ 
            console.log("scissors wins");
            userScore = userScore + 1
            userWon();
        }
    } 
/*    

    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    console.log("choice 1: "+ choice1);
    console.log("choice 2: "+ choice2);

    if (choice1 == choice2) {
        r = document.getElementsByClassName('result')[0];
        r.innerHTML = "Tie!";
        r.style.color = "black";
        r.style.display = 'block';
       
    }
    if (choice1 == choices.length - 1 && choice2 == 0) {
        computerScore = computerScore + 1;
        document.getElementById("computer-score").innerHTML = computerScore;
        botWon();
	    	
    }
    if (choice2 == choices.length - 1 && choice1 == 0) {
        userScore = userScore + 1;
        document.getElementById("user-score").innerHTML = userScore;
        userWon();	    
	    }
    if (choice1 > choice2) {
        userScore = userScore + 1;
        document.getElementById("user-score").innerHTML = userScore;
        userWon();	    	
    } else {
	    computerScore = computerScore + 1;
        document.getElementById("computer-score").innerHTML = computerScore;
        botWon();        
    }
*/
    if(choices[x] == "rock"){document.getElementsByClassName("choice")[0].style.borderColor = "white";}
    if(choices[x] == "paper"){document.getElementsByClassName("choice")[1].style.borderColor = "white";}
    if(choices[x] == "scissors"){document.getElementsByClassName("choice")[2].style.borderColor = "white";}
}
function resetGame(){
    userScore = 0;
	computerScore = 0;
	botChoice = assignBot();
	document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("user-score").innerHTML = userScore;
    
    y = y + 1;
    
    if(y == 4){
        cheat();
    }
}
function cheat(){
    alert("Cheat activated")
    cheating = 'true';
    botChoice = assignBot();
}