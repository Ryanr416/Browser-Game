



/*----- constants -----*/


  /*----- state variables -----*/
 
let guess ;  // -- current guess
let guesses = []; // -- how many guesses are left
let lives = 10 ; // -- how many lives are left
let blank ; // -- the blank space used for the correct letters
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let dictionary = ["toyota", "honda", "subaru", "mazda"];
var selectedWord; 
var rndmNum;
var word = dictionary[Math.floor(Math.random() * dictionary.length)];
var winWordArray = [];
var myButtons;
var letters;
  /*----- cached elements  -----*/
let livesLeftEl = document.getElementById("lives");
let lettersEl = document.getElementById("letters");
let p = document.getElementById("ip")
let space = document.getElementById("space")
let del = document.getElementById("del")

// switch pics each time you lose a life
 var hangmanPic = function() {
if (lives === 5 ) {
//<img src="https://hangman.doncolton.com/play/hang0.png"></img>
}
}

// dynamically rendering elements

  /*----- event listeners -----*/



  /*----- functions -----*/
function refreshPage(){
    window.location.reload();
} 

// array.from

let rndmWordArray = Array.from(word);

console.log(word);
console.log(rndmWordArray);


function guessHandle() {
if (rndmWordArray.contains(userInput)) {
    guesses.push(userInput);
    winWordArray.push(userInput);

} else {
 guesses.push(userInput);
 lives--;
 console.log(lives)
}


}

function loseCondition(lives) {
if (lives === 0){
return alert('YOU HAVE LOST!');
}

}

function winConditon() {
if (rndmWordArray.length === winWordArray.length) 
{ return alert('YOU HAVE WON!!! CONGRATS!')}

}




// if lives === (certain number, add picture to hangman)

// 