 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var losses = 0
 var wins = 0
 var guesses = 10
 //-gage only use dot notation when you're finding something nested in an object, use just [] for arrays
 var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
 console.log("Computer Choice: " + computerChoice)
 // This function is run whenever the user presses a key.
 document.onkeypress = function(event) {

     // Determines which key was pressed.
     var userGuess = event.key;
     document.getElementById("YourGuessesSoFar").append(userGuess + " , ")

     console.log(userGuess)
     if (userGuess === computerChoice) {
         wins++;
         document.getElementById("Wins").innerHTML = "Wins : " + wins
         guesses = 10;
         document.getElementById("YourGuessesSoFar").innerHTML = " Your Guesses So Far : " 
         console.log(" wins " + wins)
     } else if (guesses != 0) {
         guesses--;
         document.getElementById("GuessesLeft").innerHTML = "Guesses : " + guesses
         console.log(" guesses " + guesses)
     } else {
         losses++
         document.getElementById("Losses").innerHTML = "Losses : " + losses
         guesses = 10;
         document.getElementById("YourGuessesSoFar").innerHTML = " Your Guesses So Far : " 
         console.log(" losses " + losses)
     }

 }