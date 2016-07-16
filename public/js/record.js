class Record {

  constructor(name, length, notes) {
    this.name = name;
    this.length = length;
    this.notes = notes;
  }

  toJSON() {
  return {name: this.name, length: this.length, notes: this.notes};
  }

}