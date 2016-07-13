var graphics = {};

graphics.initializeGraphics = function initializeGraphics(width, height) {
  graphics.canvas = document.getElementById('main');
  graphics.ctx = graphics.canvas.getContext('2d');
  graphics.width = width;
  graphics.height = height;
}

graphics.drawPiano = function drawPiano(x, y, width, height, keys, pushed) {
  graphics.drawRectangleBorder(x, y, width, height);
  var whiteKeyWidth = Math.ceil(width / keys);
  var delta = Math.ceil(whiteKeyWidth * (3 / 4));
  for (var i = 0; i < keys; i++) {
    //draw white keys
      graphics.drawWhiteKey(x, y, whiteKeyWidth, height, i, pushed[i]);
  }

  for (var i = 0; i < keys; i++) {
    //draw black keys
    graphics.drawBlackKey(x, y, whiteKeyWidth, delta, height, i);
  }
  

}

graphics.clearScreen = function clearScreen() {
  graphics.fillRect(0, 0, graphics.width, graphics.height, 'white');
}

graphics.drawRectangleBorder = function drawRectangleBorder(x, y, width, height) {
  graphics.ctx.moveTo(x, y);
  graphics.ctx.lineTo(x + width, y);
  graphics.ctx.lineTo(x + width, y + height);
  graphics.ctx.lineTo(x, y + height);
  graphics.ctx.lineTo(x, y);
  graphics.ctx.stroke();
}

graphics.drawWhiteKey = function drawWhiteKey(x, y, width, height, pos, pushed) {
  var keyX = Math.ceil(x + pos * width);
  if (pushed) {
    graphics.drawKey(keyX, y, width, height, 'yellow');
  }
  else {
    graphics.drawKey(keyX, y, width, height, 'white');
  }
}

graphics.drawBlackKey = function drawBlackKey(x, y, width, delta, height, pos) {
   if ((((pos + 1) % 7) % 3) !== 0 || ((pos + 1) % 7) == 6) { //<--- determines if we need a black key on current whitekeyposition
     graphics.drawKey(Math.ceil(x + pos * width + delta), y, width / 2, Math.ceil(height * 0.7), 'black');
    }
}

graphics.drawKey = function drawKey(x, y, width, height, color) {
  graphics.fillRect(x, y, width, height, color);
  graphics.drawRectangleBorder(x, y, width, height);
}

graphics.fillRect = function fillRectBlack(x, y, width, height) {
  graphics.ctx.beginPath();
  graphics.ctx.rect(x, y, width, height);
  graphics.ctx.fillStyle = "black";
  graphics.ctx.fill();
}

graphics.fillRect = function fillRect(x, y, width, height, color) {
  graphics.ctx.beginPath();
  graphics.ctx.rect(x, y, width, height);
  graphics.ctx.fillStyle = color;
  graphics.ctx.fill();
}
