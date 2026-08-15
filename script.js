const scores = {
      win:0,
      loss:0,
      tie:0,
    };
    updateScores();
    function playGame(playerMove){
      const computerGuess = pickComputerMove();
      let result = '';
      if(playerMove==='Rock'){
        if(computerGuess==='Rock'){
            result = 'Tie';
        }else if(computerGuess==='Paper'){
        result = 'Loss';
      }else if(computerGuess === 'Scissors'){
        result='Win';
      }
    }else if(playerMove==='Paper'){
        if(computerGuess==='Rock'){
            result = 'Win';
        }else if(computerGuess==='Paper'){
        result = 'Tie';
      }else if(computerGuess === 'Scissors'){
        result='Loss';
      }
    }else if(playerMove==='Scissors'){
        if(computerGuess==='Rock'){
            result = 'Loss';
        }else if(computerGuess==='Paper'){
        result = 'Win';
      }else if(computerGuess === 'Scissors'){
        result='Tie';
      }
    }
    if(result==='Win'){
      scores.win+=1;
    }else if(result==='Loss'){
      scores.loss+=1;
    }else if(result==='Tie'){
      scores.tie+=1;
    }
    document.querySelector(".result").innerHTML=`You ${result}`;
    document.querySelector(".you-computer").innerHTML=`You <img class="img-move" src="image/${playerMove}-emoji.png" alt=""> <img class="img-move" src="image/${computerGuess}-emoji.png" alt=""> computer`;
    updateScores();
      alert(`You picked ${playerMove}.Computer picked ${computerGuess}.You ${result}
win : ${scores.win} loss : ${scores.loss} tie : ${scores.tie}`);
    }
    function updateScores() {
      document.querySelector(".scores").innerHTML=`win : ${scores.win} loss : ${scores.loss} tie : ${scores.tie}`;
    }

    function resetScores(){
      scores.win = 0;
      scores.loss = 0;
      scores.tie = 0;
    }
    function pickComputerMove(){
      let computerGuess = Math.random();
      if(computerGuess>=0 && computerGuess <1/3){
        computerGuess = 'Rock';
      }else if(computerGuess >=1/3 && computerGuess<2/3){
        computerGuess = 'Paper';
      }else if(computerGuess>=2/3 && computerGuess <1){
        computerGuess = 'Scissors';
      }
      return computerGuess;
    }