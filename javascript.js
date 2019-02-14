"use strict";

function createBox() {
  const klon = document.querySelector("#boxtemplate").content.cloneNode(true);
  console.log(klon);
  const box = klon.querySelector("#box");
  const boxContainer = document.querySelector(".container").appendChild(klon);

  box.style.height = getRandomNr() + "px";
}

function getRandomNr() {
  const nr = Math.random() * 100;
  return nr;
}

let counter = 0;

function moreBoxes() {
  createBox();
  counter++;

  if (counter > 10) {
    //stop
  } else {
    moreBoxes();
  }
}
