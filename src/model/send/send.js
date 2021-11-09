const db = require("../database/connect");
const { v4: uuidv4 } = require("uuid");
const Verify = require("./verify");

class Send {
  constructor() {
    this.verify = new Verify();
  }

  async sendToDatabase(name, image) {
    const date = new Date();
    const id = await this.randomIdFile();
    const locate = __dirname + "/../../../public/img/" + id;

    return new Promise((resolve, reject) => {
      if (!this.verify.image(image)) return reject("problem with image");
      if (!this.verify.name(name)) return reject("problem with name");

      image.mv(locate, (err) => {
        if (err) throw `error in uploading the file: ${err}`;
      });
      db.send(name, id, date);
      resolve();
    });
  }

  async randomIdFile() {
    let id = uuidv4() + ".jpg";
    const result = await this.verify.duplicate(id);

    if (!result) return id;
    else this.randomIdFile();
  }
}

module.exports = Send;
