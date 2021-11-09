const mongoose = require("mongoose");
const uriJson = require("./mongodb.json");

class PetDatabase {
  constructor(url) {
    this.uri = uriJson.uri;
    this.petSchema = new mongoose.Schema({
      name: String,
      file: String,
      date: Date,
    });
    this.Pet = mongoose.model("pet", this.petSchema);
  }

  connect() {
    return new Promise((resolve, reject) => {
      mongoose.connect(this.uri, (err) => {
        if (!err) resolve(true);
        else throw `error in connecting to the server:  ${err}`;
      });
    });
  }

  send(name, file, date) {
    const toSave = new this.Pet({
      name: name,
      file: file,
      date: date,
    });
    return new Promise((resolve, reject) => {
      toSave.save((err) => {
        if (!err) resolve(true);
        else throw `error in sending a document to the database: ${err}`;
      });
    });
  }

  delete(document) {
    return new Promise((resolve, reject) => {
      this.Pet.findOneAndRemove(document, (err) => {
        if (!err) resolve(true);
        else throw `error in deleting a document from the database: ${err}`;
      });
    });
  }

  find(doc) {
    return Promise.resolve(this.Pet.find(doc).exec());
  }

  async random() {
    const list = await this.find();
    const num = Math.floor(Math.random() * list.length);
    return Promise.resolve(list[num]);
  }
}

module.exports = PetDatabase;
