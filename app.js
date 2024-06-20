let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoint = document.querySelector("#user-score");
const compPoint = document.querySelector("#comp-score");

const genComputerChoice = () => {
    //rock,paper,sissors

    const options = ["rock", "paper", "sissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    msg.innerText = "game was draw :( Play again!!";

};

const showWinner =(userWin , userChoice, compChoice) => {
  if(userWin ) {
    userScore++;
    userPoint.innerText = userScore;
    msg.innerText = `you win !! your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor = "green";

  } else{
    compScore++;
    compPoint.innerText=compScore;
    msg.innerText = `you lose :(( ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
    console.log("user choice is : ", userChoice);
    //generate comp chocie
    const compChoice = genComputerChoice();
    console.log("computer choice is : ", compChoice);

    if (userChoice === compChoice){
        //draw
        drawGame();
    }

    else {
        let userWin=true; 
        if (userChoice==="rock"){
            //sissors , paper
           userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock,sissors
            userWin= compChoice==="sissors" ?false:true;
        }else{
            //rock,sissors
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

       playGame(userChoice);
    }

    );
});