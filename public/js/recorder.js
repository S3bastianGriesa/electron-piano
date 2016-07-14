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

recorder.addNoteToRecord = function addNoteToRecord(note) {
  var newNote = {
    value: note,
    key: recorder.lastKey,
    time: new Date().getTime() - recorder.currentRecord.startTime
  };
  if(recorder.isRecording)
  recorder.currentRecord.notes.push(newNote);
}

recorder.finishRecord = function finishRecord() {
  console.log('stop recording');
  recorder.currentRecord.finishTime = new Date().getTime();
  recorder.currentRecord.time = recorder.currentRecord.finishTime - recorder.currentRecord.startTime;
  recorder.records.push(recorder.currentRecord);
  recorder.isRecording = false;
}

recorder.play = function play() {
  recorder.isPlaying = true;
  for (var i = 0; i < recorder.currentRecord.notes.length; i++) {
    window.setTimeout(function (note) {
      var audio = piano.audioNoteMap[note.value];
      if (audio !== null && audio !== undefined) {
        audio.currentTime = 0;
        audio.play();
        console.log(note);
        jQuery.event.trigger({ type: 'keydown', which: note.key.charCodeAt(0), key: note.key });
        window.setTimeout(function (key) {
          jQuery.event.trigger({ type: 'keyup', which: key.charCodeAt(0), key: key });
        }, 200, note.key);   
      }
    }, recorder.currentRecord.notes[i].time, recorder.currentRecord.notes[i]);

  }  
  recorder.isPlaying = false;
}
    