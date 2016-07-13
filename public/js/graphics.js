var graphics = {};

graphics.initializeGraphics = function initializeGraphics() {
  graphics.canvas = document.getElementById('main');
  graphics.ctx = graphics.canvas.getContext('2d');
}

graphics.drawPiano = function drawPiano(x, y, width, height, keys) {
  graphics.drawRectangleBorder(x, y, width, height);
  for (var i = 0; i < keys; i++) {
    //draw white keys
    graphics.drawRectangleBorder(Math.ceil(x + i * Math.ceil(width / keys)), y, Math.ceil(width / keys), height);
    //draw black keys
    if ((((i + 1) % 7) % 3) !== 0 || ((i + 1) % 7) == 6) { //<--- determines if we need a black key on current whitekeyposition
      graphics.ctx.fillRect(Math.ceil(x + i * Math.ceil(width / keys) + Math.ceil(width / (keys * (4/3)))), y, Math.ceil(width / (keys * 2)), Math.ceil(height * 0.7));
    }
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

graphics.drawBlackKey = function drawBlackKey() {
  graphics.ctx.fillStyle = '#000000';
  graphics.ctx.fillRect(0, 0, 20, 100);
}
