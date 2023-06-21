/*----- constants -----*/
const myButton = document.querySelector("#Q");
const container = document.getElementById("alphabetButtons")
/*----- state variables -----*/
let guess = '';  // -- current guess
let guesses = []; // -- how many guesses are left
let lives = 6; // -- how many lives are left
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let dictionary = ["toyota", "honda", "subaru", "mazda"];
let rndmNum;
let word = dictionary[Math.floor(Math.random() * dictionary.length)];
let winWordArray = [];
let letters;
/*----- cached elements  -----*/
let livesLeftEl = document.getElementById("lives");
let lettersEl = document.getElementById("letters");
let p = document.getElementById("ip");
let q = document.getElementsByClassName("Q");
let answer = document.getElementById("blanks")
let underscore = '';
// switch pics each time you lose a life
let hangmanPic = function () {
  if (lives === 5) {
    //<img src="https://hangman.doncolton.com/play/hang0.png"></img>
  }
}
/*----- event listeners -----*/
for (let i = 0; i < word.length; i++) {
  underscore += '_' 
}
answer.textContent = underscore
guess = underscore;

myButton.addEventListener('click', () => {
  alert("NO HINTS AVAILABLE! FIGURE THIS ONE OUT ON YOUR OWN!")

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
  {
    if (rndmWordArray.includes(event.target.id)) {
      guesses.push(event.target.id);
      winWordArray.push(event.target.id);
      console.log('match detected', event.target.id)
    } else {
      guesses.push(event.target.id);
      lives--;
      console.log('lives =', lives)
    }
    if (lives === 0) {
      loseCondition();
    } else {
      winConditon();

      let newString = '';
      for (let i = 0; i < word.length; i++) {

        if (word[i] === event.target.innerText) {
          newString += event.target.innerText
        } else {
          newString += guess[i]


        }
      }
      answer.textContent = newString;
      guess = newString

      console.log(event.target.innerText)
    }
 const buttonId = document.getElementById(event.target.id);
    buttonId.classList.add("selected");

  }
  return;
}
console.log(rndmWordArray);


function refreshPage() {
  window.location.reload();
}
console.log(word);

function loseCondition() {
  if (lives === 0) {
    return alert('YOU HAVE LOST! TRY AGAIN.');
  }

}
function winConditon() {
  if (rndmWordArray.length === winWordArray.length) { return alert('YOU HAVE WON!!! CONGRATS!') }

}
// if lives === (certain number, add picture to hangman)

// 

container.innerHTML = generateButton();
container.addEventListener("click", handleClick);
