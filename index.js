
let playerSelection

//Generate random Computer choice.
function getComputerChoice() {
    let possibleChoice = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * possibleChoice.length);
    let computerChoice = possibleChoice[randomChoice]
    return computerChoice
}


let userScore = 0
let computerScore = 0
let compChoice




//Game logic of rock-paper-scissors, comparing playerSelection with computerSelection.
function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    compChoice = computerSelection



    console.log(`The computer picked: ` + computerSelection)
    console.log(`You picked: ` + playerSelection)

    if (playerSelection == "Rock" && computerSelection == "Rock" ||
        playerSelection == "Paper" && computerSelection == "Paper" ||
        playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "This is a tie"
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        userScore++
        return "You win ! Paper beats Rock"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++
        return "You lose ! Rock beats Scissors"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++
        return "You lose ! Paper beats Rock"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        userScore++
        return "You win ! Scissors beats Paper"
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        userScore++
        return "You win ! Rock beats Scissors"

    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++
        return "You lose ! Scissors beats Paper"

    }
    return "Please enter either 'Rock' 'Paper' or 'Scissors'"
}


let choicesBtn = document.getElementById('btn');

choicesBtn.addEventListener('click', (e) => {
    let selectedBtn = e.target
    let choiceValue = selectedBtn.getAttribute('data')
    playerSelection = choiceValue

    // Display results
    let resultsText = document.createElement("p")
    resultsText.innerHTML = `${playRound(playerSelection)}`

    document.getElementById("results").appendChild(resultsText)

    // Display pickedChoices
    let pickedChoicesText = document.createElement("p")
    pickedChoicesText.innerHTML = `You picked: ${playerSelection} 
    &nbsp &nbsp &nbsp
    The Computer picked:  ${compChoice}`

    document.getElementById("pickedChoices").appendChild(pickedChoicesText)

})