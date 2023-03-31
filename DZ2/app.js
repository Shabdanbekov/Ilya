let block = document.querySelector(".block");
let positionX = 0;
let positionY = 0;
let positionZ = 0;

block.style.top = "0px";

const moveblock = () => {
  if (positionX < 400) {
    positionX += 16;
    block.style.left = `${positionX}px`;
  } else if (positionX >= 400 && positionY < 400 && positionZ === 0) {
    positionY += 16;
    block.style.top = `${positionY}px`;
  } else if (positionX >= 400 && positionY >= 400 && positionZ < 400) {
    positionZ += 16;
    block.style.left = `${400 - positionZ}px`;
    block.style.top = `${400 - positionZ}px`;
  } else {
    positionX = 0;
    positionY = 0;
    positionZ = 0;
    block.style.left = "0";
    block.style.top = "0";
  }
  setTimeout(moveblock, 80);
};

moveblock();
