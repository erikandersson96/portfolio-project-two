// pattern is for Computer's gameplay, we set pattern equal to an array[].
let pattern = [];
// userPattern is for user's gameplay, we set userPattern equal to an array[]. 
let userPattern = [];
// set level to 0 so we can add to it for each round in function nextTurn.
let level = 0;
// Boolean for user turn
let usersTurn = false
// Boolean for win condition
let gameOver = false
// User's current position in array
let currentIndex = 0

// we connect startBtn to the html button by it's class name with our const declaration.
const startBtn = document.querySelector('.start');
// we connect instruction to the html span for instruction by it's class name with our const declaration.
const instruction = document.querySelector('.game-info');
// we connect userLevel to match Level: in html file by it's div class name. 
const userLevel = document.querySelector('.level-count');
// we connect easyInterface to match the class name of the parent div of easy in the html file.
const easyInterface = document.querySelector('.easy-interface');
// we connect mediumInterface to match the class name of the parent div of medium in the html file.
const mediumInterface = document.querySelector('.medium-interface'); 
// we connect hardInterface to match the class name of the parent div of hard in the html file.
const hardInterface = document.querySelector('.hard-interface'); 

// reset game alert
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
    const currentClick = document.querySelector(`[data-easy='${color}']`);
    currentClick.classList.add('activate');
    setTimeout(() => {
        currentClick.classList.remove('activate');
    }, 350);
}

// here is a function to set a delay on 700 milliseconds between each color that the computer
// flashes. 
function playPattern(nextPattern) {
    nextPattern.forEach((color, index) => {
        setTimeout(() => {
            activateEasy(color); 
        }, (index + 1) * 800);
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
    userLevel.textContent = `Level ${level} of 10`;
    
    
    const nextPattern = [...pattern];
    nextPattern.push(nextPhase());
    playPattern(nextPattern);

    pattern = [...nextPattern];
    setTimeout(() => {
        userTurn();
    }, level * 700 + 1000);
}

// this function is created to compare the user input to the computer. 
function manageClick(currentClick) {
    // If current value matches current pattern position's value
    if (currentClick === pattern[currentIndex]) {
        // Game over
        resetGame('Oh no! You pressed the same color sequence as the computer...');
        return;
    } else {
        // Increase index by 1
        currentIndex++;
        // Tell the user their score
        instruction.textContent = `Bravo! ${currentIndex} correct of ${level} colors! Carry on!`;
    }
    // Check win condition
    if (currentIndex === 10) {
        resetGame('Good Work! You won the game!');
        gameOver = true;
        return;
    }
    // Check to see if index is the length of current pattern
    if (currentIndex == pattern.length) {
        // Set computer's turn
        usersTurn = false;
        // Reset index
        currentIndex = 0;
        // Play CPU's next turn
        setTimeout(() => {
            nextTurn();
        }, 1000);
        usersTurn = true;
    }
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
    const {
        currentClick
    } = event.target.dataset; 
    manageClick(currentClick); 
}); 


