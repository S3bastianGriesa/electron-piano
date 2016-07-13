var piano = {};

piano.initialize = function initialize(x, y, width, height, keys, audioNoteMap) {
  piano.x = x;
  piano.y = y;
  piano.width = width;
  piano.height = height;
  piano.keys = keys;
  piano.pushed = [piano.keys];
  piano.clearPushedKeys();
  piano.audioNoteMap = audioNoteMap;
  piano.minOctave = 1;
  piano.maxOctave = 6;
  piano.currentOctave = 3;
}

piano.draw = function draw() {
  graphics.clearScreen();
  graphics.drawPiano(piano.x, piano.y, piano.width, piano.height, piano.keys, piano.pushed);
}

piano.refresh = function refresh() {
  piano.draw();
}

piano.pushKey = function pushKey(x) {
  if (!piano.pushed[x]) {
    piano.playKey(x);
  }
  piano.pushed[x] = true;
}

piano.playWhiteKey = function playWhiteKey(key) {

  var keySound = null;

  switch(key) {
    case 0:
    case 7:
    keySound = 'C';
    break;
    case 1:
    case 8:
    keySound = 'D';
    break;
    case 2:
    case 9:
    keySound = 'E';
    break;
    case 3:
    case 10:
    keySound = 'F';
    break;
    case 4:
    case 11:
    keySound = 'G';
    break;
    case 5:
    case 12:
    keySound = 'A';
    break;
    case 6:
    case 13:
    keySound = 'B';
    break;
  }

  if(key < 8) {
    keySound = keySound + piano.currentOctave;
  } else {
    keySound = keySound + piano.currentOctave + 1;
  }

  if(keySound !== null) {
    key.currentTime = 0;
    key.play();
  }
}

piano.playBlackKey = function playBlackKey(key) {

  var keySound = null;

  switch(key) {
    case 0:
    case 5:
    keySound = 'Db';
    break;
    case 1:
    case 6:
    keySound = 'Eb';
    break;
    case 2:
    case 7:
    keySound = 'Gb';
    break;
    case 3:
    case 8:
    keySound = 'Ab';
    break;
    case 4:
    case 9:
    keySound = 'Bb';
    break;
  }

  if(key < 5) {
    keySound = keySound + piano.currentOctave;
  } else {
    keySound = keySound + piano.currentOctave + 1;
  }

  if(keySound !== null) {
    key.currentTime = 0;
    key.play();
  }
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
}