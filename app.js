const computerChoiceDisplay = document.getElementById("computer-choice")
const playerChoiceDisplay = document.getElementById("player-choice")
const resultDisplay = document.getElementById("result")
const possibleOptions = document.querySelectorAll("button")
let playerOptions
let computerOptions
let result

possibleOptions.forEach(possibleOption => possibleOption.addEventListener("click", (e) => {
     playerOptions = e.target.id
     playerChoiceDisplay.innerHTML = playerOptions
     generateComputerOptions()
     getResult()



}))

   function generateComputerOptions () {
    
       const randomNumber = Math.floor(Math.random() * possibleOptions.length + 1)
       

       if (randomNumber === 1){
          computerOptions = "Rock"
       }
       if (randomNumber === 2){
          computerOptions = "Scissor"
       }
       if (randomNumber === 3){
          computerOptions = "Paper"
       }
       computerChoiceDisplay.innerHTML = computerOptions
   }

   function getResult() {
        if (computerOptions === playerOptions){
            result = "It's a draw!"
        }
        else if (computerOptions === "Rock" && playerOptions === "Paper"){
            result = "You Won!"
        }
        else if (computerOptions === "Rock" && playerOptions === "Scissor"){
            result = "You Lost!"
        }
        else if (computerOptions === "Paper" && playerOptions === "Rock"){
            result = "You Lost!"
        }
        else if (computerOptions === "Paper" && playerOptions === "Scissor"){
            result = "You Won!"
        }
        else if (computerOptions === "Scissor" && playerOptions === "Paper"){
            result = "You Lost!"
        }
        else if (computerOptions === "Scissor" && playerOptions === "Rock"){
            result = "You Won!"
        }
        resultDisplay.innerHTML = result     
   }

      

