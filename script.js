const Game = {
    randomNumber: 0, // Assuming you fetch the random number asynchronously
    numberOfTries: 0,
    previousGuesses: [],
  
    // Simulating an asynchronous operation with a Promise
    fetchRandomNumber: function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.randomNumber = Math.floor(Math.random() * 10) + 1;
          resolve();
        }, 1000); // Simulating a delay of 1 second
      });
    },
  
    checkGuess: function() {
      const guessInput = document.getElementById('guessInput');
      const userGuess = parseInt(guessInput.value);
  
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        this.setMessage('Please enter a valid number between 1 and 10');
        return;
      }
  
      this.numberOfTries++;
      this.previousGuesses.push(userGuess);
  
      // Simulating an asynchronous operation using the Promise
      this.fetchRandomNumber()
        .then(() => {
          if (userGuess === this.randomNumber) {
            this.setMessage(`Congratulations! You guessed the correct number in ${this.numberOfTries} tries.`);
          } else {
            this.setMessage(`Incorrect guess. Previous guesses: ${this.previousGuesses.join(', ')}. Try again.`);
          }
        })
        .catch(error => {
          console.error('Error fetching random number:', error);
        });
    },
  
    setMessage: function(message) {
      const messageElement = document.getElementById('message');
      messageElement.textContent = message;
    }
  };
  
  function checkGuess() {
    Game.checkGuess();
  }
  