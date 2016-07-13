var graphics = {};

graphics.initializeGraphics = function initializeGraphics() {
  graphics.canvas = document.getElementById('main');
  graphics.ctx = graphics.canvas.getContext('2d');
}

graphics.drawPiano = function drawPiano(x, y, width, height, keys) {
  graphics.drawRectangleBorder(x, y, width, height);
  var whiteKeyWidth = Math.ceil(width / keys);
  var delta = Math.ceil(whiteKeyWidth * (3 / 4));
  for (var i = 0; i < keys; i++) {
    //draw white keys
    graphics.drawWhiteKey(x, y, whiteKeyWidth, height, i);
    //draw black keys
    graphics.drawBlackKey(x, y, whiteKeyWidth, delta, height, i);
  }
  

}

graphics.drawRectangleBorder = function drawRectangleBorder(x, y, width, height) {
  graphics.ctx.moveTo(x, y);
  graphics.ctx.lineTo(x + width, y);
  graphics.ctx.lineTo(x + width, y + height);
  graphics.ctx.lineTo(x, y + height);
  graphics.ctx.lineTo(x, y);
  graphics.ctx.stroke();
}

graphics.drawWhiteKey = function drawWhiteKey(x, y, width, height, pos) {
  graphics.drawRectangleBorder(Math.ceil(x + pos * width), y, width, height);
}

graphics.drawBlackKey = function drawBlackKey(x, y, width, delta, height, pos) {
   if ((((pos + 1) % 7) % 3) !== 0 || ((pos + 1) % 7) == 6) { //<--- determines if we need a black key on current whitekeyposition
      graphics.ctx.fillRect(Math.ceil(x + pos * width + delta), y, width/2, Math.ceil(height * 0.7));
    }
}
