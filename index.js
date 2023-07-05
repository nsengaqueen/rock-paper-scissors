  
  
   
    function getComputerChoice() {
      const choices = ['Rock', 'Paper', 'Scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
    
    // Test the function
    console.log(getComputerChoice());
    
    function playRound(playerSelection, computerSelection) {
      // Convert playerSelection to lowercase for case-insensitive comparison
      playerSelection = playerSelection.toLowerCase();
    
      // Determine the winner based on the selections
      if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
      } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
      ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
      } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
      }
    }
    
    // Test the function
    const playerSelection = 'Rock';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    function game() {
      let playerScore = 0;
      let computerScore = 0;
    
      for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt('Enter your choice (Rock/Paper/Scissors):');
        const computerSelection = getComputerChoice();
    
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);
    
        if (result.startsWith("You Win!")) {
          playerScore++;
        } else if (result.startsWith("You Lose!")) {
          computerScore++;
        }
      }
    
      console.log(`Game over! Final score: Player ${playerScore} - Computer ${computerScore}`);
    
      if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
      } else if (playerScore < computerScore) {
        console.log("Sorry! You lose the game.");
      } else {
        console.log("It's a tie! The game ends in a draw.");
      }
    }
    
    // Start the game
    game();
    
    