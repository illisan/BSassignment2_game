function startGame() {
    userName();

    let max = getMaxFromUser();
    let goal = generateRandomNumber(max);
    let guess = getGuessFromUser(max);
    let userGuess = isGuessCorrect(goal, guess);
    let maxGuesses = 8;

    for (i = 1; i <= maxGuesses; i++) {
        if (guess === goal) {
            alert('Congratulations your won!'); { break; }
        } else if (guess < goal) {
            guess = parseInt(prompt('Your guess is too low, guess again' + goal));
        } else if (guess > goal) {
            guess = parseInt(prompt('Your guess is too high, guess again' + goal));
        } else {
            guess = parseInt(prompt('Invalid input, try again!' + goal));
        }
    }

}

startGame();

function userName() {
    let name = prompt('What is your name?');
    {
        if (name === '' || name === null) {
            let name = prompt('Input is invalid please enter valid name');
        } else {
            let intro = prompt(
                'Welcome' + ' ' + name + ' ' + 'are you ready to play?'
            );
            console.log(name);
        }
    }
}

function getMaxFromUser() {
    let number = parseInt(prompt('Great! Enter a number between 1 and 100.'));
    alert(
        'You chose the number' +
        ' ' +
        number +
        ' ' +
        '.' +
        ' ' +
        "This will be your limit. Let's begin!"
    );
    console.log('this is the max set by user ' + number);
    return number;
}

function generateRandomNumber(max) {
    let min = 1;
    let goal = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('This is the random number or goal ' + goal);
    return goal;
}


function getGuessFromUser(max) {
    let guess = parseInt(prompt('Guess a number between 0 and ' + max));
    console.log('this is the user guess ' + guess);
    return guess;
}

function isGuessCorrect(goal, guess) {
    console.log('this is the user guess:', guess);
    console.log('this is the random number or goal:', goal);
    if (guess == goal) {
        return true;
    } else {
        return false;
    }

}


