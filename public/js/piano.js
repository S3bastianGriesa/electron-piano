var piano = {};

piano.initialize = function initialize(x, y, width, height, keys, audioNoteMap) {
  piano.x = x;
  piano.y = y;
  piano.width = width;
  piano.height = height;
  piano.keys = keys;
  piano.pushedBlack = [(piano.keys/ (7 * 5))];
  piano.pushed = [piano.keys.length];
  piano.clearPushedKeys();
  piano.audioNoteMap = audioNoteMap;
}

piano.draw = function draw() {
  graphics.clearScreen();
  graphics.drawPiano(piano.x, piano.y, piano.width, piano.height, piano.keys, piano.pushed, piano.pushedBlack);
}

piano.refresh = function refresh() {
  piano.draw();
  //piano.play();
}

piano.pushWhiteKey = function pushKey(x) {
  if (!piano.pushed[x]) {
    piano.playWhiteKey(x);
  }
  piano.pushed[x] = true;
}

piano.pushBlackKey = function pushBlackKey(x) {
  if (!piano.pushedBlack[x]) {
    piano.playBlackKey(x);
  }
  piano.pushedBlack[x] = true;
}

piano.playWhiteKey = function playKey(x) {
  var key = null;

  switch (x) {

    case 0:
      key = piano.audioNoteMap.C3;
      break;
    case 1:
      key = piano.audioNoteMap.D3;
      break;
    case 2:
      key = piano.audioNoteMap.E3;
      break;
    case 3:
      key = piano.audioNoteMap.F3;
      break;
    case 4:
      key = piano.audioNoteMap.G3;
      break;
    case 5:
      key = piano.audioNoteMap.A3;
      break;
    case 6:
      key = piano.audioNoteMap.B3;
      break;

  }

  if (key !== null) {
    key.currentTime = 0;
    key.play();
  }
}

piano.playBlackKey = function playBlackKey(x) {
  var key = null;
}

piano.play = function play() {
  for (var i = 0; i < piano.pushed.length; i++) {

    if (piano.pushed[i]) {

      switch (i) {

        case 0:
          var key = piano.audioNoteMap.C3;
          key.currentTime = 0;
          key.play();
          break;
        case 1:
          var key = piano.audioNoteMap.D3;
          key.currentTime = 0;
          key.play();
          break;

      }

    }

  }
}

piano.clearPushedKeys = function clearPushedKeys() {
  for (var i = 0; i < piano.pushed.length; i++) {
    piano.pushed[i] = false;
  }
  for (var i = 0; i < piano.pushedBlack.length; i++) {
    piano.pushedBlack[i] = false;
  }
}