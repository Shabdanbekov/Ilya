let block = document.getElementById("block");

function moveObject() {
  let currentLeft = parseInt(block.style.left) || 0;
  let maxLeft = document.documentElement.scrollWidth - block.offsetWidth;
  if (currentLeft < maxLeft) {
    block.style.left = currentLeft + 10 + "px";
    moveObject();
  }
}

moveObject();

// let block = document.getElementById("block");
// let path = [
//   { x: 100, y: 100 },
//   { x: 200, y: 200 },
//   { x: 300, y: 150 },
//   { x: 400, y: 300 },
//   { x: 500, y: 100 },
//   { x: 600, y: 200 },
//   { x: 700, y: 150 },
//   { x: 800, y: 300 },
// ];

// function moveObject(index) {
//   index = index || 0;
//   let point = path[index];
//   let currentLeft = parseInt(block.style.left) || 0;
//   let currentTop = parseInt(block.style.top) || 0;
//   let deltaX = point.x - currentLeft;
//   let deltaY = point.y - currentTop;
//   let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
//   let angle = Math.atan2(deltaY, deltaX);
//   let duration = (distance / 50) * 1000; // 50 pixels per second
//   block.style.transform = "rotate(" + angle + "rad)";
//   block.style.transition = "transform " + duration + "ms linear";
//   block.style.left = point.x + "px";
//   block.style.top = point.y + "px";
//   index++;
//   if (index >= path.length) {
//     setTimeout(function () {
//       block.style.transform = "rotate(0rad)";
//       block.style.transition = "";
//       block.style.left = "0";
//       block.style.top = "0";
//       moveObject();
//     }, duration);
//   } else {
//     setTimeout(function () {
//       moveObject(index);
//     }, duration);
//   }
// }

// moveObject();
