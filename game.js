//create the right number
var rightNumber = 4;


//ask user to have a guess
//have to add Number below to correct typeof from string to number
// var stringGuess = prompt("Guess the number	between	1 and 20?");
// var guess = Number(stringGuess);

// instead of above, i can simply put the following
var guess = Number(prompt("Guess the number between 1 and 20?"));
 
//check if users guess is right
if(guess === rightNumber) {
	alert("You guessed the right number! Great job!");
}

//if users guess is wrong
// else {
// 	alert("You guessed wrong!");
// }

//check if guess is higher than the rightNumber
else if(guess > rightNumber) {
	alert("Your guess is to high!");
}

//check if guess is lower than the rightNumber
//don't forget else doesnt need conditions like above does.
else {
	alert("Your guess is to low!");
}