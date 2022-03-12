// I declared global variables like in the Freshman Tutorial at https://freshman.tech/simon-game/

// pattern is for Computer's gameplay, we set pattern equal to an array[].
let pattern = [];
// userPattern is for user's gameplay, we set userPattern equal to an array[]. 
let userPattern = [];
// set level to 0 so we can add to it for each round in function nextTurn.
let level = 0;
// Boolean for user turn
let usersTurn = false;
// User's current position in array
let currentIndex = 0;



// Connect startBtn to the html button by it's class name with our const declaration.
const startBtn = document.querySelector('.start');
// Connect instruction to the html span for instruction by it's class name with our const declaration.
const instruction = document.querySelector('.game-info');
// Connect userLevel to match Level: in html file by it's div class name. 
const userLevel = document.querySelector('.level-count');
// Connect easyInterface to match the class name of the parent div of easy in the html file.
const gameInterface = document.querySelector('.game-interface'); 



/**
 * This resetGame function is taken as inspiration from Freshman Simon Game, but with my own names of the declarations.
 * I have no alert message in my resetGame as it is in the tutorial. https://freshman.tech/simon-game/
 * */ 

// Reset game, it changes the text above the game to message the user that he/she has lost. 

function resetGame() { 
    pattern = [];
    userPattern = [];
    level = 0; 
    instruction.textContent = 'Game Over! You hit the same sequence as the computer. Press Start game button to play again.';
    startBtn.classList.remove('unseen');
} 


// This userTurn function is taken as inspiration from Freshman Simon Game, but with my own names of the declarations. https://freshman.tech/simon-game/

// This function creates a way to tell the user that it is his/her's turn to play. 
function userTurn() { 
    usersTurn = true; 
    gameInterface.classList.remove('not-activated'); 
    instruction.textContent = "Now it's your turn."; 
    
}


// This activateCircle function is taken as inspiration from Freshman Simon Game, but with my own names of the declarations. https://freshman.tech/simon-game/

/**
 * This function is used to select the correct color of the circles. And light up that
 * circle for 400 milliseconds, each circle will light up for 400 milliseconds each. 
 *  */ 

function activateCircle(color) {
    const currentClick = document.querySelector(`[data-circle='${color}']`);
    currentClick.classList.add('activate');
    setTimeout(() => {
        currentClick.classList.remove('activate');
    }, 400);
}

// This playPattern function is taken as inspiration from Freshman Simon Game, but with my own names of the declarations. https://freshman.tech/simon-game/

// Here is a function to set a delay on 800 milliseconds between each color that the computer flashes. 

function playPattern(nextPattern) {
    nextPattern.forEach((color, index) => {
        setTimeout(() => {
            activateCircle(color); 
        }, (index + 1) * 800);
    });
}
  


/**
 * This function checks which difficulty that has been choosen and displays the right Interface depending on 
 * if it is Easy = 4 colors, Medium = 3 colors, Hard = 2 colors.   
 *  */ 
 
let currentDifficulty = 'easy';

let radioButtons = document.getElementsByClassName('radio-buttons');
for (let i = 0; i < radioButtons.length; i++) {


    radioButtons[i].addEventListener('click', function(){

        currentDifficulty = radioButtons[i].value; 

        if (currentDifficulty == 'easy') { 

            // Change the amount of circles  
            document.getElementById('circle-blue').style.display = 'inline-flex'; 
            document.getElementById('circle-red').style.display = 'inline-flex'; 
            document.getElementById('circle-orange').style.display = 'inline-flex';    
        } 

        else if (currentDifficulty == 'medium') { 

            // Change the amount of circles
            document.getElementById('circle-blue').style.display = 'inline-flex'; 
            document.getElementById('circle-red').style.display = 'inline-flex'; 
            document.getElementById('circle-orange').style.display = 'none'; 
        }

        else if (currentDifficulty == 'hard') { 


            // Change the amount of circles   
            document.getElementById('circle-blue').style.display = 'none';
            document.getElementById('circle-red').style.display = 'inline-flex';
            document.getElementById('circle-orange').style.display = 'none';        
        } 

    }); 
        
}
 
/* 
* This nextPhase function is taken as inspiration from Freshman Simon Game, but it is configurated to work with 
* Erik game. It also checks which difficulty the user has selected. https://freshman.tech/simon-game/
*/

/**
 * This function creates a random number between index 0-4, index 0-3 or index 0-2 depending on which 
 * difficulty level that has been selected. Math.floor is used to pick a 
 * random number between each index. Without it we could get 0.3 which wouldn't let our game to work properly.
 *  */ 

function nextPhase() {

    // check if currentDifficulty is matched with easy radio button 
    if (currentDifficulty == 'easy') {
        const easier = ['green', 'blue', 'yellow', 'red', 'orange'];
        const randomEasy = easier[Math.floor(Math.random() * easier.length)]; 

        return randomEasy; 
    } 
    // check if currentDifficulty is matched with medium radio button 
    else if (currentDifficulty == 'medium') {

        const medium = ['green', 'blue', 'yellow', 'red'];
        const randomMedium = medium[Math.floor(Math.random() * medium.length)]; 

        return randomMedium; 
    }
    // check if currentDifficulty is matched with hard radio button 
    else if (currentDifficulty == 'hard') {
        const hard = ['green', 'yellow', 'red'];
        const randomHard = hard[Math.floor(Math.random() * hard.length)]; 

        return randomHard; 
    }
}

/* 
* This nextTurn function is taken as inspiration from Freshman Simon Game, but with my own names of the declarations. https://freshman.tech/simon-game/
*/

/**
 * Function called nextTurn is used to add 1 color to the sequence.   
 * TimeOut is set to slightly delay the time between the computers finished sequence and 
 * the user's turn to play. 
 * Pattern is also updated to match the current sequence in play. 
 *  */ 

function nextTurn() {
    usersTurn = false; 
    level += 1; 

    
    gameInterface.classList.add('not-activated');
    instruction.textContent = "Let the computer play it's sequence first";
    userLevel.textContent = `Level ${level}`;
    
    
    const nextPattern = [...pattern];
    nextPattern.push(nextPhase()); 
    playPattern(nextPattern);

    pattern = [...nextPattern];
    setTimeout(() => {
        userTurn();
    }, level * 700 + 1000);
}



// This function is created to compare the user input to the computer. 
function manageClick(currentClick) { 


    if (usersTurn) {

       usersTurn = false; 

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
         usersTurn = true; 
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
      }
   }   
}


/* 
* This startGame function is taken as inspiration from Freshman Simon Game, but it is configurated to work with 
* Erik game. https://freshman.tech/simon-game/
*/

/**
 * Function called startGame that will make the start game button dissapear when user press
 * it and show the game instructions.
 *  */ 

function startGame() {

    startBtn.classList.add('unseen'); 
    instruction.classList.remove('unseen');
    instruction.textContent = "Let the computer play it's sequence first"; 
    nextTurn(); 
} 


/* 
* startBtn is taken as inspiration from Freshman Simon Game, but it is configurated to work with 
* Erik game. https://freshman.tech/simon-game/
*/

/**
 * Here we make sure that startGame function excecutes when startBtn is pressed/clicked 
 * by the user. 
 *  */ 

startBtn.addEventListener('click', startGame); 
gameInterface.addEventListener('click', event => {

    const currentClick = event.target.dataset.circle; 

    if (event.target.hasAttribute('data-circle')) {
        manageClick(currentClick);
    }

}); 

