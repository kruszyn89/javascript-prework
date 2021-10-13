function playGame(){

    function getMoveName(randomNumber){
        if(randomNumber == 1) {
            return 'kamień';
        } else if ( randomNumber == 2) {
            return 'papier';
        } else if ( randomNumber == 3) {
            return 'nożyce';
        } else { 
            return 'Proszę wybrać poprawny numer!'
        }
    }
    function displayResult(argComputerMove, argPlayerMove) {
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            return('Ty wygrywasz!');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            return('Komputer wygrywa!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            return('Komputer wygrywa!');    
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            return('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            return('Komputer wygrywa!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            return('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            return('Remis!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            return('Remis!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            return('Remis!');
        } else 
            return ('Gracz nie wybrał zadnej opcji, proszę spróbuj ponownie!');
          
    }


    let randomNumber = Math.floor(Math.random() * 3 + 1);
    printMessage('Liczba po zaokrągleniu w dół to: ' + randomNumber);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);
    console.log('Komputer wylosował: ' + argComputerMove);

    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    let final = displayResult(argComputerMove, argPlayerMove);
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Wynik to: ' + final);
}

playGame(3);

























/*
// Obliczanie reszty

function calculateChange (argPrice, argPaidAmount) {
    console.log('wywołano calculateChange')
    console.log('argumenty: ' + argPrice + ', ' + argPaidAmount);
    return (argPaidAmount - argPrice);
  }

let change1 = calculateChange(13, 20);
printMessage('Do zapłaty 13zł, zapłacono 20zł, reszta: ' + change1);

*/