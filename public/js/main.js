window.$ = window.jQuery = require('./js/jquery.min.js');

function updateCurrentOctaveSpan (currentOctave) {
  $('#currentOctave').empty().html(currentOctave);
}

function createAudioNoteMap (instrument) {

  var pianoInstrument = 'acoustic_grand_piano-mp3';
  var guitarInstrument = 'acoustic_guitar_nylon-mp3';
  var bassInstrument = 'synth_bass_1-mp3';
  var instrumentUrl = pianoInstrument;

  switch(instrument) {
    case 'piano':
    instrumentUrl = pianoInstrument;
    break;
    case 'guitar':
    instrumentUrl = guitarInstrument;
    break;
    case 'bass':
    instrumentUrl = bassInstrument;
    break;
  }

  var audioFilesUrl = './soundfont/' + instrumentUrl + '/';
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

  return audioNoteMap;
}

  function startRecord() {
    var rec = $('#record');
    rec.text('Stop(f)');
    recorder.startNewRecord();
  }

  function stopRecord() {
    var rec = $('#record');
    rec.text('Record(a)');
    recorder.finishRecord();
  }

  function play() {
    var play = $('#play');
    if (!recorder.isPlaying) {
      play.text('Stop');
      recorder.play();
      recorder.isPlaying = true;
    }
  }

  function stopPlay() {
    var play = $('#play');
    play.text('Play(k)');
    recorder.isPlaying = false;
  }

$(document).ready(function () {
  
  var audioNoteMap = createAudioNoteMap('piano');

  graphics.initializeGraphics(1220, 580);
  recorder.initialize();
  piano.initialize(40, 200, 1110, 250, 14, audioNoteMap);
  piano.draw();
  
  $('#record').click(function(event) {
    if (!recorder.isRecording) {
      startRecord();
    }
    else {
      stopRecord();
    }
  });

    $('#play').click(function(event) {
    if (!recorder.isPlaying) {
      play();
    }
    else {
      stopPlay();
    }
  });

  $('#nextOctave').click(function(event) {
    var nextOctave = piano.currentOctave + 1;

    if(nextOctave <= piano.maxOctave) {
      piano.currentOctave = nextOctave;
      updateCurrentOctaveSpan(piano.currentOctave);
    }
  });

  $('#previousOctave').click(function(event) {
    var previousOctave = piano.currentOctave - 1;

    if(piano.minOctave <= previousOctave) {
      piano.currentOctave = previousOctave;
      updateCurrentOctaveSpan(piano.currentOctave);
    }
  });

  $('#instrumentList').change(function(evt) {
    var instrument = $('#instrumentList option:selected').val();
    var audioNoteMap = createAudioNoteMap(instrument);
    piano.audioNoteMap = audioNoteMap;
  });

});