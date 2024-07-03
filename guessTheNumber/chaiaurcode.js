let number = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainingGuesses = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p =document.createElement('p')


let prevGuess = []
let newGuess = 1

let playGame = true


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number more than 1')
    }else if(guess>100){
        alert('please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(newGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${number}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===number){
        
        displayMessage(`Congratulations! You guessed the number in ${newGuess-1} guesses`)
        endGame()
    }else if(guess>number){
        
        displayMessage('Too high')
    }else{
        
        displayMessage('Too low')
    }
    

}

function displayGuess(guess){
    userInput.value=""
    guessSlot.innerHTML += `${guess} `
    newGuess++;
    remainingGuesses.innerHTML = `${11-newGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        number = parseInt(Math.random()*100+1)
        prevGuess = []
        newGuess = 1 
        guessSlot.innerHTML = ''
        remainingGuesses.innerHTML = `${11-newGuess}`
        userInput.removeAttribute('disabled')
        lowOrHi.innerHTML = ''
        
        startOver.removeChild(p)



        playGame = true
    })

}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" style = "cursor:pointer">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}




