let randomNumber = parseInt(Math.random()*100 + 1);


const submit = document.querySelector( '#subt')
const userInput = document.querySelector( '#guessField')
const guessSlot = document.querySelector( '.guesses')
const remaining = document.querySelector( '.lastResult')

const lowOrHigh = document.querySelector( '.lowOrHigh')

const startOver = document.querySelector( '.resultParas')


const p = document.createElement( 'p' )


let prevGuess = [];
let numGuess = 1;

let playGame = true; 


if(playGame)
{
    submit.addEventListener( 'click', function(e){
        e.preventDefault(); //value khi chle na jaye action filed ke through
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}    

function validateGuess(guess)
{
    // <1 , string  ,>100 -> Not Allowed

    if( isNaN(guess) )
    {
        alert('Please Enter a Valid Number')
    }  
    else if( guess < 1 )
    {
        alert('Please Enter a Number Greater than 1') 
    }   
    else if( guess > 100)
    {
        alert('Please Enter a Number Lesser than 100')
    }
    else 
    {
        prevGuess.push(guess)
        if(numGuess === 11)
        {
            displayGuess(guess)
            displayMessage( `Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else 
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess)
{
    // whether wrong or right or lower or higher
    if(guess === randomNumber)
    {
        displayMessage('You Guessed it right')
        endGame();
    }
    else if( guess < randomNumber)
    {
        displayMessage( ' Number is too low' )
    }    
    else{
        displayMessage( 'Number is too high')
    }
}


function displayGuess(guess)
{
    // remaining guess display, prev guess display
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}


function displayMessage(message)
{
    //guess result display

    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}


function endGame(){
    userInput.value ='';
    userInput.setAttribute('Disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
    
    const newGameButton = document.querySelector( '#newGame')
    newGameButton.addEventListener( 'click', function(e){
        randomNumber = parseInt( Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}



