let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") 
        return "Rock";
    else if(letter === "p") 
        return "Paper";
    else 
        return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUser} beats ${convertToWord(computer)}${smallComp}. You win!`;
}

function lose(user, computer) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUser} loses to ${convertToWord(computer)}${smallComp}. You lost!`;
}

function draw(user, computer) {
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUser} equals ${convertToWord(computer)}${smallComp}. it's a draw!`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();