// Drum sound through click
const drumButtons = document.querySelectorAll(".drums").length;

// for (i = 0; i < drumButtons; i++) {
//   let drumButtonIteration = document.querySelectorAll(".drums")[i];
//   drumButtonIteration.addEventListener("click", function () {
//     drumSoundPress(this.textContent.toLowerCase());
//   });
// }

// Drum sound through keypress
document.addEventListener("keydown", function (event) {
  return drumSoundPress(event.key);
});

// Function that plays sound of pressed key
function drumSoundPress(key) {
  switch (key) {
    case "a":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "f":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "g":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "h":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
  }
}

const drumButtonQuantity = document.querySelectorAll(".button-wrapper").length;

for (i = 0; i < drumButtonQuantity; i++) {
  document.querySelectorAll(".button-wrapper")[i].addEventListener("click", function () {
    let divLetter = this.children[1].textContent;
    drumSoundPress(divLetter.toLowerCase());
  });
}

// let buttonLetter = document.querySelectorAll(".drums")[i].textContent;
// drumSoundPress(buttonLetter.toLowerCase());
// let drumButtonKey = document.querySelectorAll(".drums")[i];
// alert(document.querySelectorAll(".drums")[0].textContent);
