



/*----- constants -----*/
const myButton = document.querySelector("#Q");
const container = document.getElementById("alphabetButtons")
  /*----- state variables -----*/

let guess ;  // -- current guess
let guesses = []; // -- how many guesses are left
let lives = 10 ; // -- how many lives are left
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let dictionary = ["toyota", "honda", "subaru", "mazda"];
let selectedWord; 
let rndmNum;
let word = dictionary[Math.floor(Math.random() * dictionary.length)];
let winWordArray = [];
let myButtons;
let letters;
  /*----- cached elements  -----*/
let livesLeftEl = document.getElementById("lives");
let lettersEl = document.getElementById("letters");
let p = document.getElementById("ip");
let space = document.getElementById("space");
let del = document.getElementById("del");
let q = document.getElementsByClassName("Q");
let charArray = word.split("");
let dashes = document.getElementsByClassName("dashes");
let answer = document.getElementById("blanks")

// switch pics each time you lose a life
let hangmanPic = function() {
if (lives === 5 ) {
//<img src="https://hangman.doncolton.com/play/hang0.png"></img>
}
}



// dynamically rendering elements

  /*----- event listeners -----*/
myButton.addEventListener('click', () => {
  console.log('Button Clicked!');
});

  /*----- functions -----*/
  
function generateButton() {
   let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
   .split("")
   .map(
     (letter) =>
     `<button class = "alphabetButtonJS"
     id="${letter}"
     >
      ${letter}
     </button>`
   )
   .join("");
return buttonsHTML;
}
let rndmWordArray = Array.from(word);
function handleClick(event) {
   const isButton = event.target.nodeName === "BUTTON";
   if (isButton) {

      if (rndmWordArray.includes(event.target.id)) {
          guesses.push(event.target.id);
          winWordArray.push(event.target.id);
      console.log('match detected', event.target.id)
      } else {
       guesses.push(event.target.id);
       lives--;
       console.log('lives =', lives)
      }

const buttonId = document.getElementById(event.target.id);
buttonId.classList.add("selected");

   }
return;
}











  console.log(rndmWordArray);


function refreshPage(){
    window.location.reload();
} 

let displayItem = word.replace(/./g, '<span class="dashes">_</span>)'


// array.from

)

console.log(word);



//function guessHandle() {
//if (rndmWordArray.contains(userInput)) {
  //  guesses.push(userInput);
    //winWordArray.push(userInput);

// } else {
//  guesses.push(userInput);
//  lives--;
//  console.log(lives)
// }




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

container.innerHTML = generateButton();
container.addEventListener("click", handleClick);

