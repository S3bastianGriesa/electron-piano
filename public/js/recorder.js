var recorder = {};

recorder.initialize = function initialize() {
  recorder.records = [];
  recorder.currentRecord = null;
  recorder.isRecording = false;
  recorder.isPlaying = false;
}

recorder.isBusy = function isBusy() {
  return recorder.isPlaying || recorder.isRecording;
}

recorder.startNewRecord = function startNewRecord() {
  console.log('start recording');
  recorder.currentRecord = {
    startTime: new Date().getTime(),
    notes: []
  };
  recorder.isRecording = true;
}

recorder.addNoteToRecord = function addNoteToRecord(key) {
  if (recorder.isRecording) {
    var newNote = {
      key: key,
      time: new Date().getTime() - recorder.currentRecord.startTime
    };
    recorder.currentRecord.notes.push(newNote);
  }
}

recorder.finishRecord = function finishRecord() {
  console.log('stop recording');
  recorder.currentRecord.finishTime = new Date().getTime();
  recorder.currentRecord.time = recorder.currentRecord.finishTime - recorder.currentRecord.startTime;
  recorder.records.push(recorder.currentRecord);
  recorder.isRecording = false;
}

recorder.play = function play() {
  for (var i = 0; i < recorder.currentRecord.notes.length; i++) {
    window.setTimeout(function (note, final) {
      if (recorder.isPlaying) {
        recorder.throwKeyEvent(note.key);
        if (final) {
          stopPlay();
        }
      }  
    }, recorder.currentRecord.notes[i].time, recorder.currentRecord.notes[i], (i === recorder.currentRecord.notes.length -1));

  }  
}

recorder.throwKeyEvent = function throwKeyEvent(key) {
  jQuery.event.trigger({ type: 'keydown', which: key.charCodeAt(0), key: key });
  window.setTimeout(function (key) {
    jQuery.event.trigger({ type: 'keyup', which: key.charCodeAt(0), key: key });
  }, 200, key);   
}
    