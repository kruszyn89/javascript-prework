const playGame = function(playerInput){
    clearMessages();
    
    const getMoveName = function(randomNumber){
            if(randomNumber == 1){
                return 'kamień';
            } else if ( randomNumber == 2) {
                return 'papier';
            } else if ( randomNumber == 3) {
                return 'nożyce';
            } else {
                printMessage('Nie znam ruchu o numerze ' + randomNumber); 
                return 'Proszę wybrać poprawny numer!'
            }
        }
        const displayResult = function(argComputerMove, argPlayerMove){
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            if(argComputerMove == 'kamień' && argPlayerMove == 'papier')
            {
              printMessage('Ty wygrywasz!');
              playerScore = playerScore + 1;
            }
      
            else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce')
            {
              printMessage('Ty wygrywasz!');
              playerScore = playerScore + 1;
            }
      
            else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') 
            {
              printMessage('Ty wygrywasz!');
              playerScore = playerScore + 1;
            }
      
            else if(argComputerMove == argPlayerMove)
            {
              printMessage('Remis!');
            }
      
            else {
              printMessage('Przegrałeś');
              computerScore = computerScore + 1;
            }
            return ''
          }
          
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        
        console.log('Wylosowana liczba to: ' + randomNumber);

        const argComputerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + argComputerMove);
        console.log('Komputer wylosował: ' + argComputerMove);

        // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        // console.log('Gracz wpisał: ' + playerInput);
        
        let argPlayerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + argPlayerMove);

        printMessage(displayResult(argComputerMove, argPlayerMove)); 
};




const rockElement = document.getElementById('play-rock');
rockElement.addEventListener('click', function(){
    playGame(1);
    showResult ("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});

const paperElement = document.getElementById('play-paper');
paperElement.addEventListener('click', function(){
    playGame(2);
    showResult ("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});

const scissorsElement = document.getElementById('play-scissors');
scissorsElement.addEventListener('click', function(){
    playGame(3);
    showResult ("Gracz: " + playerScore + " -" + " Komputer: " + computerScore);
});























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