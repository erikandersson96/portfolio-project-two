let pattern = []; 
let userPattern = []; 
let level = 0; 

const startBtn = document.querySelector('.start'); 
const instruction = document.querySelector('.game-info'); 

function startGame() {
    startBtn.classList.add('unseen'); 
    instruction.classList.remove('unseen');
    instruction.textContent = "Let the computer play it's sequence first"; 
} 

startBtn.addEventListener('click', startGame); 



