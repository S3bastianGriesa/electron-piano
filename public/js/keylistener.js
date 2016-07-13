window.onkeydown = function (e) {
  console.log('we have a key pressed: ');
  console.log(e);
  var id = getIdForWhiteKey(e.key);
  if (id !== -1) {
    piano.pushWhiteKey(id);
  } 
  else {
    piano.pushBlackKey(getIdForBlackKey(e.key));
  }
  piano.refresh();
}

window.onkeyup = function (e) {
  console.log('we have a key released: ');
  console.log(e);
  var id = getIdForWhiteKey(e.key);
  if (id !== -1) {
    piano.pushed[id] = false;
  }
  else {
    piano.pushedBlack[getIdForBlackKey(e.key)] = false;
  }
  piano.refresh();
}

function getIdForWhiteKey(key) {
  switch (key){
    case 'q': return 0;
    case 'w': return 1;
    case 'e': return 2;
    case 'r': return 3;
    case 't': return 4;
    case 'z': return 5;
    case 'u': return 6;
    case 'y': return 7;
    case 'x': return 8;
    case 'c': return 9;
    case 'v': return 10;
    case 'b': return 11;
    case 'n': return 12;
    case 'm': return 13;
    case ',': return 14;
    default: return -1;
  }
}

function getIdForBlackKey(key) {
  switch (key) {
    case '2': return 0;
    case '3': return 1;
    case '5': return 2;
    case '6': return 3;
    case '7': return 4;
    case 's': return 5;
    case 'd': return 6;
    case 'g': return 7;
    case 'h': return 8;
    case 'j': return 9;
  }
}