window.onkeydown = function (e) {
  console.log('we have a key pressed: ');
  console.log(e);
  piano.pushKey(getIdForKey(e.key));
  piano.refresh();
}

window.onkeyup = function (e) {
  console.log('we have a key released: ');
  console.log(e);
    piano.pushed[getIdForKey(e.key)] = false;
  piano.refresh();
}

function getIdForKey(key) {
  switch (key){
    case 'q': return 0;
    case 'w': return 1;
    case 'e': return 2;
    case 'r': return 3;
    case 't': return 4;
    case 'z': return 5;
    case 'u': return 6;
    case 'i': return 7;
    case 'y': return 8;
    case 'x': return 9;
    case 'c': return 10;
    case 'v': return 11;
    case 'b': return 12;
    case 'n': return 13;
    case 'm': return 14;
    case ',': return 15;
  }
}