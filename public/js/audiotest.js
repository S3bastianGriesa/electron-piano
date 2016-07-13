window.$ = window.jQuery = require('./js/jquery.min.js');

$(document).ready(function () {
  var audioFilesUrl = './soundfont/acoustic_grand_piano-mp3/';
  var noteLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Ab', 'Bb', 'Db', 'Eb', 'Gb'];
  var ignoredNotes = ['C0', 'D0', 'E0', 'F0', 'G0', 'Ab0', 'Db0', 'Eb0', 'Gb0'];
  var notes = 8;
  var audioNoteMap = {};

  for (var noteLetterIndex = 0; noteLetterIndex < noteLetters.length; noteLetterIndex++) {

    for (var noteIndex = 0; noteIndex < notes; noteIndex++) {

      var noteLetter = noteLetters[noteLetterIndex];
      var noteNumber = noteIndex;
      var note = noteLetter + noteNumber;

      if (!ignoredNotes.includes(note)) {
        var url = audioFilesUrl + note;

        var audioFile = new Audio(url + '.mp3');

        audioNoteMap[note] = audioFile;
      }
    }
  }

  var file = audioNoteMap.C5;
  file.currentTime = 0;
  file.play();
});