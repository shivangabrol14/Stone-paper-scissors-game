const game = () => {
  let pScore = 0;
  let cpuScore = 0;
  
   

  const playRound = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const choices = ["rock", "paper", "scissors"];
    const computerHand = document.querySelector('.computer-hand');
  
      options.forEach(option => {
        option.addEventListener("click", function(){
          //computer choice
          const computerSelection = choices[Math.floor(Math.random() * choices.length)];
          console.log(computerSelection);
          

         //compare selections
          compareSelections(this.textContent, computerSelection);
           console.log(this.textContent);
          //update hand images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src =`./assets/${computerSelection}.png`;

      
        })
      });
  };
  const updateScores = () =>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.cpu-score p');

    playerScore.textContent = pScore;
    computerScore.textContent = cpuScore;

  };

  const compareSelections = (playerSelection, computerSelection) => {
 
    const winner = document.querySelector('.winner')

    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      updateScores();
      cpuScore ++;
      winner.textContent = "Computer wins this round"
      return;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      updateScores();
      pScore++;
      winner.textContent = "Player wins this round"
      return;
    } else{
      
      pScore == cpuScore;
      winner.textContent = "It's a tie!"
    return;
    };
  }; 

  const playFiveRounds = () => {
    const winner = document.querySelector('.winner');
    
    for(let i=0; i<5; i++){
      let round = playRound();
      console.log(round);

      if(pScore > 3 ){
        winner.textContent = "Whoop whoop! You won the match";
        return;
      }else if(cpuScore > 3){
        winner.textContent = "Better luck next time! The CPU whooped your a$$";
        return;
      }else{
        winner.textContent = "It's a draw";
        return;
      }
    };
  };
  
  playFiveRounds();
  
 
  // starts the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };
  startGame();
  
};

//play the game for five rounds


const playerSelection = '';
const computerSelection = '';

game();
