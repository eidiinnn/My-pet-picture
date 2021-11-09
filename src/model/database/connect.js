const PetDatabase = require("./petDatabase");

const db = new PetDatabase();
db.connect();

module.exports = db;
