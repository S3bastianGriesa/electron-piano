var piano = {};

piano.initialize = function initialize(x, y, width, height, keys) {
  piano.x = x;
  piano.y = y;
  piano.width = width;
  piano.height = height;
  piano.keys = keys;
  piano.pushed = [piano.keys];
  piano.clearPushedKeys();
}

piano.draw = function draw() {
  graphics.clearScreen();
  graphics.drawPiano(piano.x, piano.y, piano.width, piano.height, piano.keys, piano.pushed);
}

piano.refresh = function refresh() {
  piano.draw();
  piano.play();
}

piano.play = function play() {

}

piano.clearPushedKeys = function clearPushedKeys() {
  for (var i = 0; i < piano.pushed.length; i++) {
    piano.pushed[i] = false;
  }
}