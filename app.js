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
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUser} beats ${convertToWord(computer)}${smallComp}. You win!`;
    
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('green-glow');
    }, 300)
}

function lose(user, computer) {
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    const userChoice_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUser} loses to ${convertToWord(computer)}${smallComp}. You lost!`;
    
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('red-glow');
    }, 300)
}

function draw(user, computer) {
    const smallUser = "(user)".fontsize(4).sup();
    const smallComp = "(comp)".fontsize(4).sup();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)}${smallUser} equals ${convertToWord(computer)}${smallComp}. it's a draw!`;
    
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('gray-glow');
    }, 300)
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