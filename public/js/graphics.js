var graphics = {};

graphics.initializeGraphics = function initializeGraphics() {
  graphics.canvas = document.getElementById('main');
  graphics.ctx = graphics.canvas.getContext('2d');
}

graphics.drawPiano = function drawPiano(x, y, width, length) {
  graphics.drawRectangleBorder(x, y, width, length);
}

graphics.drawRectangleBorder = function drawRectangleBorder(x, y, width, length) {
  graphics.ctx.moveTo(x, y);
  graphics.ctx.lineTo(x + width, y);
  graphics.ctx.lineTo(x + width, y + length);
  graphics.ctx.lineTo(x, y + length);
  graphics.ctx.lineTo(x, y);
  graphics.ctx.stroke();
}

graphics.drawBlackKey = function drawBlackKey() {
  graphics.ctx.fillStyle = '#000000';
  graphics.ctx.fillRect(0, 0, 20, 100);
}
