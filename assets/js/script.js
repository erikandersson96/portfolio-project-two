let pattern = []; 
let userPattern = []; 

const startBtn = document.querySelector('.start'); 
const instruction = document.querySelector('.game-info'); 

function startGame() {
    startBtn.classList.add('unseen'); 
    instruction.classList.remove('unseen');
} 

startBtn.addEventListener('click', startGame); 



