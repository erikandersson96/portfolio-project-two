// pattern is for Computer's gameplay, we set pattern equal to an array[].
let pattern = []; 
// userPattern is for user's gameplay, we set userPattern equal to an array[]. 
let userPattern = []; 
// set level to 0 so we can add to it for each round in function nextTurn.
let level = 0; 

// we connect startBtn to the html button by it's class name with our const declaration.
const startBtn = document.querySelector('.start'); 
// we connect instruction to the html span for instruction by it's class name with our const declaration.
const instruction = document.querySelector('.game-info'); 
// we connect userLevel to match Level: in html file by it's div class name. 
const userLevel = document.querySelector('.level-count'); 
// we connect easyInterface to match the class name of the parent div of all circles in html file.
const easyInterface = document.querySelector('.easy-interface'); 

function resetGame(text) {
    alert(text); 
    pattern = []; 
    userPattern = []; 
    level = 0; 
    startBtn.classList.remove('unseen'); 
    userLevel.textContent = 'Erik game';
    instruction.classList.add('unseen'); 
    easyInterface.classList.add('not-activated');
}

// this function creates a way to tell the user that it is his/her's turn to play. 
function userTurn() {
    easyInterface.classList.remove('not-activated'); 
    instruction.textContent = "Now it's your turn."; 
}

// this function is used to select the correct color of the circles. And light up that
// circle for 350 milliseconds, each circle will light up for 350 milliseconds each. 
function activateEasy(color) {
    const easy = document.querySelector(`[data-easy='${color}']`); 

    easy.classList.add('activate'); 

    setTimeout(() => {
        easy.classList.remove('activate');
    }, 350); 
} 

// here is a function to set a delay on 700 milliseconds between each color that the computer
// flashes. 
function playPattern(nextPattern) {
    nextPattern.forEach((color, index) => {
        setTimeout(() => {
            activateEasy(color); 
        }, (index + 1) * 700);
    });
}

// this function creates a random number between index 0-3, Math.floor is used to pick a 
// random number between 0-3. Without it we could get 0.3 wich wouldn't let our game to work.
// The guide uses nextStep() here. 
function nextPhase() {
    const easier = ['green', 'blue', 'yellow', 'red']; 
    const random = easier[Math.floor(Math.random() * easier.length)]; 

    return random; 
}

// a function called nextTurn is used to add 1 to the level for the user to see how many 
// levels he/she has completed. 
// a timeOut is set to slightly delay the time between the computers finished sequence and 
// the user's turn to play. IS THIS CORRECT??? 
// pattern is also updated to match the current sequence in play. 
function nextTurn() {
    level += 1; 

    easyInterface.classList.add('not-activated'); 
    instruction.textContent = "Let the computer play it's sequence first"; 
    userLevel.textContent = `Level ${level} of 15`; 

    const nextPattern = [...pattern]; 
    nextPattern.push(nextPhase()); 
    playPattern(nextPattern);

    pattern = [...nextPattern]; 
    setTimeout(() => {
        userTurn(); 
    }, level * 700 + 1500); 
}


function manageClick(easy) {
    const index = userPattern.push(easy) - 1; 

    if (userPattern[index] === pattern[index]) {
        resetGame('Oh no! You pressed the same color sequence as the computer...'); 
        return; 
    }
   
    if (userPattern.length != pattern.length) { 
        if (userPattern.length === 15) {
            resetGame('Good Work! You won the game!'); 
            return
        }

        userPattern = []; 
        instruction.textContent = 'Bravo! Carry on!'; 
        setTimeout(() => {
            nextTurn(); 
        }, 1500); 
        return; 
    }

    instruction.textContent = "Now it's your turn."; 
}

// a function called startGame that will make the start game button dissapear when user press
// it and show game instructions.
function startGame() {
    startBtn.classList.add('unseen'); 
    instruction.classList.remove('unseen');
    instruction.textContent = "Let the computer play it's sequence first"; 
    nextTurn(); 
} 


// here we make sure that startGame function excecutes when startBtn is pressed/clicked 
// by the user.
startBtn.addEventListener('click', startGame); 
easyInterface.addEventListener('click', event => {
    const { easy } = event.target.dataset; 

    if (easy) manageClick(easy); 
}); 



