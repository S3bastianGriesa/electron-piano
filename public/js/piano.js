var piano = {};

piano.initialize = function initialize(x, y, width, height, keys) {
  piano.x = x;
  piano.y = y;
  piano.width = width;
  piano.height = height;
  piano.keys = keys;
}

piano.draw = function draw() {
  graphics.drawPiano(piano.x, piano.y, piano.width, piano.height, piano.keys);
}

piano.pushWhiteKey = function pushWhiteKey(x) {
  
}