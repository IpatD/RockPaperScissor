/* Rock Paper Scissor Game */
/* Player vs computer game */
/* Player chooses 1 out of 3 options and is matched 
against the computer choice */
/* Paper - 2 beats rock - 1
Rock beats Scissors - 0
Scissors beat paper */
/* 1. get computer choice
2. get players choice
3. match them
4. show the score*/


/* makes computer choice */
function getComputerChoice (max = 3) {
    numComp = Math.floor(Math.random()* max);
    if (numComp == 1) 
        return numComp = "rock"
    else if (numComp == 2)
        return numComp = "paper"
    else 
        return numComp = "scissors"
}
/* asign player choice */
function getPlayerChoice(){
    let string = prompt("choose your weapon")
    let choice = string.toLowerCase()
    return choice
}

function game(){
    let playerSel = getPlayerChoice();
    let compSel = getComputerChoice();
    return playRound(playerSel, compSel);
}

function playRound (playerSel, compSel) {    
    if (compSel == "paper" && playerSel == "rock") {
        return "Computer wins!"}
    else if (compSel == "paper" && playerSel == "scissors"){
        return "Player wins!"}
    else if (compSel == "paper" && playerSel == "paper"){
        return "Tie"}
    else if (compSel == "rock" && playerSel == "rock"){
        return "Tie"}
    else if (compSel == "rock" && playerSel == "paper"){
        return "Player Wins!"}
    else if (compSel == "rock" && playerSel == "scissors"){
        return "Computer wins!"}
    else if (compSel == "scissors" && playerSel == "rock"){
        return "Player Wins!"}
    else if (compSel == "scissors" && playerSel == "paper"){
        return "Computer Wins!"}
    else if (compSel == "scissors" && playerSel == "scissors"){
        return "Tie!"}
    else
        return "no such weapon in the arsenal"
}

console.log(game())
console.log(game())
console.log(game())
console.log(game())
console.log(game())
