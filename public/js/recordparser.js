const fs = require('fs');
const dao = {};
const directory = __dirname + '/records/';

dao.save = function print(record) {
  fs.writeFile(directory + record.name, JSON.stringify(record));
}

dao.getAllRecords = function getAllRecords() {
  const dirs = fs.readdirSync(directory);
  const records = [];
  dirs.forEach(function (file) {
    records.push(dao.loadRecord(file));
  }, this);
  return records;
}

dao.loadRecord = function loadRecord(name) {
  const data = JSON.parse(fs.readFileSync(directory + name));
  const record = new Record(data.name, data.length, data.notes);
  return record;
}

