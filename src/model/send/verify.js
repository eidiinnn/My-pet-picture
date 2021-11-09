const db = require("../database/connect");
const swearjar = require("swearjar-extended2");

swearjar.setLang("en");

class Verify {
  name(name) {
    const number = isNaN(name);
    const badWord = swearjar.profane(name);

    if (
      number === false ||
      badWord === true ||
      !name ||
      name === "" ||
      name.length > 20
    )
      return false;
    if (typeof name === "string") return true;
    else return false;
  }

  image(image) {
    switch (image.mimetype) {
      case "image/png":
        return true;
        break;
      case "image/jpeg":
        return true;
        break;
    }
    return false;
  }

  async duplicate(toVerify) {
    const result = await db.find({ file: toVerify });

    return new Promise((resolve) => {
      if (result.length === 1) resolve(true);
      if (result.length > 1)
        throw `have a duplicate file in the database: ${result}`;
      else resolve(false);
    });
  }
}

module.exports = Verify;
