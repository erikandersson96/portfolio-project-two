let pattern = []; 
let userPattern = []; 

const startBtn = document.querySelector('.start'); 

function startGame() {
    startBtn.classList.add('unseen'); 
} 

startBtn.addEventListener('click', startGame)

