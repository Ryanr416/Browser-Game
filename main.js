/*----- constants -----*/


  /*----- state variables -----*/
 
let guess ;  // -- current guess
let guesses = []; // -- how many guesses are left
let lives ; // -- how many lives are left
let blank ; // -- the blank space used for the correct letters
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let dictionary = ["toyota", "honda", "subaru", "mazda"];
var selectedWord;
var rndmNum;
var word = dictionary[Math.floor(Math.random() * dictionary.length)];
  /*----- cached elements  -----*/
let livesLeftEl = document.getElementById("lives");
let lettersEl = document.getElementById("letters");
let getHintEl = document.getElementById("hints");


  /*----- event listeners -----*/


  /*----- functions -----*/
function refreshPage(){
    window.location.reload();
} 



console.log(word);
