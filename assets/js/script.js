// pattern is for Computer's gameplay, we set pattern equal to an array[].
let pattern = []; 
// userPattern is for user's gameplay, we set userPattern equal to an array[]. 
let userPattern = []; 
// set level to 0 so we can add to it for each round in function ADD FUNCTION NAME HERE!!!
let level = 0; 

// we connect startBtn to the html button by it's class name with our const declaration.
const startBtn = document.querySelector('.start'); 
// we connect instruction to the html span for instruction by it's class name with our const declaration.
const instruction = document.querySelector('.game-info'); 

function nextPattern() {
    
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



