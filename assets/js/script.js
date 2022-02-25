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


function nextPhase() {
    const easier = ['green', 'blue', 'yellow', 'red'];
}

// a function called nextTurn is used to add 1 to the level for the user to see how many 
// levels he/she has completed. 
function nextTurn() {
    level += 1; 

    const nextPattern = [...pattern]; 
}

// a function called startGame that will make the start game button dissapear when user press
// it and show game instructions.
function startGame() {
    startBtn.classList.add('unseen'); 
    instruction.classList.remove('unseen');
    instruction.textContent = "Let the computer play it's sequence first"; 
} 

// here we make sure that startGame function excecutes when startBtn is pressed/clicked 
// by the user.
startBtn.addEventListener('click', startGame); 



