"use strict";

let counterBox = 0;
const arr = [];
let counter = 0;
createBox();

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

function moreBoxes() {
  createBox();
  counterBox++;
  counter++;
  arr.unshift(counter);

  if (counterBox > 10) {
    //stop
  } else {
    moreBoxes();
    arr.pop();
  }
  setTimeout(moreBoxes, 1000);
}
