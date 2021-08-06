let playersTurn = 1 
let score = 0
let valueScoreToWin = document.getElementById("scoreToWin").textContent;

// console.log(valueScoreToWin)



const switchTurn = () => {
    if (playersTurn == 1){
        document.getElementById("playerP1").style.opacity = 0.2;
        document.getElementById("playerP2").style.opacity = 1;
        playersTurn = 2;
    }
    else{
        document.getElementById("playerP1").style.opacity = 1;
        document.getElementById("playerP2").style.opacity = 0.2;
        playersTurn = 1;
    }
    score = 0;
    document.getElementById(`currentScoreP1`).textContent = 0;
    document.getElementById(`currentScoreP2`).textContent = 0;

}

// example of calling an unnamed function
document.getElementById("rollDice").addEventListener("click", () =>{
    //get a random number between 1 and 6
    let valueOfDice = (Math.floor(Math.random() * 6 + 1));
    
    // document.getElementById("dice").src = `../images/${valueOfDice}.jpg`;

       //first try to solve empty image by only adding the img html when roll dice pressed
       document.getElementById("imageOfDice").innerHTML = '<img id="dice" src="" ></img>';    
       document.getElementById("dice").src = `../images/${valueOfDice}.jpg`;


    if (valueOfDice == 1){
        switchTurn()
    }       
    else{
        //increase score by one
        // score ++; 
        //increase score by number on dice
        score += valueOfDice
        document.getElementById(`currentScoreP${playersTurn}`).textContent = score;
    }
})

document.getElementById("hold").addEventListener("click", () => {
    let totalsScore = document.getElementById(`totalScoreP${playersTurn}`).textContent ;
    totalsScore = parseInt(totalsScore) + parseInt(score);
    document.getElementById(`totalScoreP${playersTurn}`).textContent = totalsScore;
    if (totalsScore >= valueScoreToWin){
        document.getElementById(`playerP1`).style.opacity = 1;
        document.getElementById(`playerP2`).style.opacity = 1;
        document.getElementById(`playerP${playersTurn}`).textContent = "**Winner**";
        document.getElementById("rollDice").removeEventListener("click",rollDice);
    }
    else {
        switchTurn();
    }
})

document.getElementById("scoreToWin").contentEditable = "true";

document.getElementById("scoreToWin").addEventListener("keyup", scoreToWin);

function scoreToWin () {
    num = document.getElementById("scoreToWin").textContent;
    if (isNaN(num)){
        document.getElementById("notInt").innerHTML = "This is not a number (the score needed to win will not change until a valid number is entered)";
    }
    else{ 
        document.getElementById("notInt").innerHTML = "";
        valueScoreToWin = document.getElementById("scoreToWin").textContent;
    }
}

//an example of claling a function
document.getElementById("startAgain").addEventListener("click", startAgain);

function startAgain () {   
    //resets everything for a new game
    document.getElementById(`currentScoreP1`).textContent = 0;
    document.getElementById(`currentScoreP2`).textContent = 0;
    document.getElementById(`totalScoreP1`).textContent = 0;
    document.getElementById(`totalScoreP2`).textContent = 0;
    // document.getElementsByClassName("start").textContent = 0;
    playersTurn = 1;   
    document.getElementById("playerP1").textContent = "Player 1";
    document.getElementById("playerP2").textContent = "Player 2";
    document.getElementById("playerP1").style.opacity = 1; 
    document.getElementById("playerP2").style.opacity = 0.2; 
    document.getElementById("dice").src = `` ;
    document.getElementById("rollDice").addEventListener("click",rollDice);
    document.getElementById("imageOfDice").innerHTML = ""
}
