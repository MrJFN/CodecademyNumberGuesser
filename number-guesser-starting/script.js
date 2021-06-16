let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
};

const compareGuesses = (humanGuess, compGuess, target) => {
    if(humanGuess < 0 || humanGuess > 10){
        alert('Please enter a value between 0 and 9');
    }else{
        const humanDifference = getAbsoluteDistance(target, humanGuess);
        const compDifference =  getAbsoluteDistance(target, compGuess);
    
       return (humanDifference <= compDifference)  
    }
};

const updateScore = (string) => {
    switch(string){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++
            break;
        default:
            break;
    }
};


const advanceRound = () =>  currentRoundNumber++;

