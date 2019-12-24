if (confirm('Do you want to play a game?')) {
    const startRange = 8,         
         firstAttempt = 3,
         secondAttempt = 2,
         firstAttemptPrize = 100,
         secondAttemptPrize = 50,
         thirdAttemptPrize = 25,
         rangeStep = 4;
    let attempts = 3;
    let loop = 0;    
    let totalPrize = 0;  
    let wantPlayGame = true;
    let gameWin = false;
    while(wantPlayGame === true) {
        let randomRange = startRange + rangeStep*loop;
        let randomNumber = Math.floor(Math.random() * randomRange);                
        while(attempts > 0) {
            let prizePull = 0;
            const prizePullStep = 2;
            if (attempts === firstAttempt) {
                prizePull = firstAttemptPrize * Math.pow(prizePullStep, loop);
            } else if (attempts === secondAttempt) {
                prizePull = secondAttemptPrize * Math.pow(prizePullStep, loop);
            } else {
                prizePull = thirdAttemptPrize * Math.pow(prizePullStep, loop);
            }
            let userNumber = parseInt(prompt('Choose a roulette pocket number from 0 to ' + randomRange +
            '\nAttempts left: ' + attempts + '\nTotal prize: ' + totalPrize + '$\nPossible prize on current attempt: ' +
            prizePull + '$',''));
            if (isNaN(userNumber) || userNumber < 0 || userNumber > randomRange ) {
                alert('Entered data isn’t number or out of range');                
            } else if (userNumber === randomNumber){
                totalPrize += prizePull;
                gameWin = true;
                attempts = 0;
            } else {
                alert('You guessed wrong number.')
            }
            attempts -= 1;
        } 
        if (gameWin) {
            if (confirm('Congratulation, you won!\nYour prize is: '+ totalPrize +'$\nDo you want to continue?')) {
                loop += 1;
                gameWin = false;
                attempts = firstAttempt;
            } else {
                totalPrize = 0;
                alert('Thank you for your participation.\nYour prize is: '+ totalPrize +'$');
                if (confirm('Do you want to play again?')) {
                    loop = 0;
                    attempts = firstAttempt;
                } else {
                    wantPlayGame =false;
                }
            }
        } else {
            totalPrize = 0;
            alert('Thank you for your participation.\nYour prize is: '+ totalPrize +'$');
            if (confirm('Do you want to play again?')) {
                attempts = firstAttempt;
                loop = 0;
            } else {
                wantPlayGame = false;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}