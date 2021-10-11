// let computerMove = 'kamień';

// printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// let playerMove = `papier`;

// printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// let player2Move = `nozyce`;

// printMessage('Zagrałem ' + player2Move + '! Jeśli Twój ruch to papier, to wygrywasz!');


// let randomFraction = Math.random();

// printMessage('Wylosowany ułamek to: ' + randomFraction);

// let calculation = randomFraction * 3 + 1;

// printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

// let roundNumber = Math.floor(calculation);

// printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

let randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Liczba po zaokrągleniu w dół to: ' + randomNumber);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);
