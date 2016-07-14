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
  piano.minOctave = 1;
  piano.maxOctave = 6;
  piano.currentOctave = 3;
}

piano.draw = function draw() {
  graphics.clearScreen();
  graphics.drawPiano(piano.x, piano.y, piano.width, piano.height, piano.keys, piano.pushed, piano.pushedBlack);
}

piano.refresh = function refresh() {
  piano.draw();
}

piano.pushWhiteKey = function pushKey(x, c) {
  if (!piano.pushed[x]) {
    piano.playWhiteKey(x);
    recorder.addNoteToRecord(c);
  }
  piano.pushed[x] = true;
}

piano.pushBlackKey = function pushBlackKey(x, c) {
  if (!piano.pushedBlack[x]) {
    piano.playBlackKey(x);
    recorder.addNoteToRecord(c);
  }
  piano.pushedBlack[x] = true;
}

piano.playWhiteKey = function playWhiteKey(key) {

  var note = '';

  switch(key) {
    case 0:
    case 7:
    note = 'C';
    break;
    case 1:
    case 8:
    note = 'D';
    break;
    case 2:
    case 9:
    note = 'E';
    break;
    case 3:
    case 10:
    note = 'F';
    break;
    case 4:
    case 11:
    note = 'G';
    break;
    case 5:
    case 12:
    note = 'A';
    break;
    case 6:
    case 13:
    note = 'B';
    break;
  }

  if(key < 7) {
    note = note + piano.currentOctave;
  } else {
    note = note + (piano.currentOctave + 1);
  }

  var audio = piano.audioNoteMap[note];

  if(audio !== null && audio !== undefined) {
    audio.currentTime = 0;
    audio.play();
  }
}

piano.playBlackKey = function playBlackKey(key) {

  var note = '';

  switch(key) {
    case 0:
    case 5:
    note = 'Db';
    break;
    case 1:
    case 6:
    note = 'Eb';
    break;
    case 2:
    case 7:
    note = 'Gb';
    break;
    case 3:
    case 8:
    note = 'Ab';
    break;
    case 4:
    case 9:
    note = 'Bb';
    break;
  }

  if(key < 5) {
    note = note + piano.currentOctave;
  } else {
    note = note + (piano.currentOctave + 1);
  }

  var audio = piano.audioNoteMap[note];

  if(audio !== null && audio !== undefined) {
    audio.currentTime = 0;
    audio.play();
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
  for (var i = 0; i < piano.pushedBlack.length; i++) {
    piano.pushedBlack[i] = false;
  }
}