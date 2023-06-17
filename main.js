



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
let getHintEl = document.getElementById("hints");


//switch pics each time you lose a life
var hangmanPic = function() {
if (lives === 5 ) {
<img src="https://hangman.doncolton.com/play/hang0.png"></img>
}
}

var buttons = function () {
  myButtons = document.getElementById('buttons');
  letters = document.createElement('ul');

  for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }
}
// dynamically rendering elements


// why doesnt my buttons element render in the browser
var dashes = function () {
  myDashes = document.getElementById('buttons');
  spaces = document.createElement('ul');

  for (var i = 0; i < rndmWordArray.length; i++) {
    letters.id = '';
    list = document.createElement('li');
    list.id = '';
    list.innerHTML = rndmWordArray[i];
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }
}


  /*----- event listeners -----*/
buttons();

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

function wordReveal() {
if(guesses.includes(userInput))


}


// if lives === (certain number, add picture to hangman)

// 