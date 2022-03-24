console.log('Thanks for checking out the game and being so nosey that you\'re either looking at the source or the console to read this.\n.................')

// Gotta keep score
var computerScore = 0;
var playerScore = 0;
var round = 0;

// Computer randomly picking rock, paper, or scissors
function computerPlay(items) {
    return items[Math.floor(Math.random()*items.length)];
};
const items = ['rock', 'paper', 'scissors'];
var computerSelection = computerPlay(items);

// Player input from buttons            
function rockButton() {
    window.playerSelection = 'rock';
    console.log('Round: ' + (round + 1));
    console.log('Human plays rock');
    game();
};
function paperButton() {
    window.playerSelection = 'paper';
    console.log('Round: ' + (round + 1));
    console.log('Human plays paper');
    game()
};
function scissorsButton() {
    window.playerSelection = 'scissors';
    console.log('Round: ' + (round + 1));
    console.log('Human plays scissors');
    game()
};
var playerSelection = window.playerSelection;

// Game Play    
    function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            document.getElementById('score').innerHTML = 'You tie! You and the computer played rock.';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/rock.png">';
        } else if (computerSelection == 'paper') {
            document.getElementById('score').innerHTML = 'You lose! Computer played paper. Paper covers rock.';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/paper.png">';
            computerScore = computerScore + 1;
        } else {
            document.getElementById('score').innerHTML =  'You Win! Computer played scissors. Rock smashes scissors.';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/scissors.png">';
            playerScore = playerScore + 1;
        };
    } else if (playerSelection == 'paper') {
       if (computerSelection == 'paper') {
            document.getElementById('score').innerHTML =  'You tie! You and the computer played paper.';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/paper.png">';
        } else if (computerSelection == 'scissors') {
            document.getElementById('score').innerHTML =  'You lose! Computer played scissors. Scissors slices paper.';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/scissors.png">';
            computerScore = computerScore + 1;
        } else {
            document.getElementById('score').innerHTML = 'You Win! Computer played rock. Paper covers rock.';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/rock.png">';
            playerScore = playerScore + 1;
        };
    } else {
        if (computerSelection == 'scissors') {
            document.getElementById('score').innerHTML = 'You tie! You and the computer played scissors.';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/scissors.png">';
       } else if (computerSelection == 'rock') {
            document.getElementById('score').innerHTML = 'You lose! Computer played rock. Rock smashes scissors.';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/rock.png">';
            computerScore = computerScore + 1;
        } else {
            document.getElementById('score').innerHTML = 'You Win! Computer played paper. Scissors slices paper';
            document.getElementById('computer-hand').innerHTML = '<img class="image is-4by5 pt-0" src="images/paper.png">';
            playerScore = playerScore + 1;
        };
   };
};

// Final score alert
function finalScore() {
    if (playerScore < computerScore) {
            alert ( 'Congrats loser! You lost.\n\nSleek Smart Computer: ' + computerScore + '\nEmbarrassingly Bad Human: ' + playerScore );
            console.log('Final Score: Computer ' + computerScore + ' - Human ' + playerScore);
        } else if (playerScore > computerScore) {
            alert ( 'You got lucky this time!\n\nHuman with dumb luck: ' + playerScore + '\nComputer that let you win: ' + computerScore );
            console.log('Final Score: Human ' + playerScore + ' - Computer ' + computerScore);
        } else {
            alert ( 'It was a tie. Ugh... so unsatisfying.\n\nSorry Little Human: ' + playerScore + '\nFast Powerful Computer: ' + computerScore );
            console.log('Final Score: Human ' + playerScore + ' - Computer ' + computerScore);
        };
};

// Game time  
function game() {
    do {
    computerPlay(items);
    computerSelection = computerPlay(items);
    playRound(playerSelection, computerSelection);
    console.log('Computer plays ' + computerSelection)
    document.getElementById('computerScore').innerHTML = 'Superior Machine: ' + computerScore;
    document.getElementById('playerScore').innerHTML = 'Inferior Human: ' + playerScore;
    if (round < 4){
        document.getElementById('round').innerHTML = 'Round ' + (round + 2) + ' of 5';
    };
    round++;
    } while (round > 5);
    if (round == 5) {
        finalScore();
        location.reload();
    } else {};                
};

// Thank you for putting up with Frank's attempt at javascript