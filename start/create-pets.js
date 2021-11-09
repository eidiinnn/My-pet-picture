const { set } = require("mongoose");
const db = require("../src/model/database/connect");
const toSend = [
  ["Claudio", "72d22436-64bb-441e-b658-da7213d15d96.jpg", new Date()],
  ["Roberto", "57593cea-3d61-4503-bdb0-43b0ab012429.jpg", new Date()],
  ["Juninho", "0bba5219-89c4-4e8f-a89a-10e47a370772.jpg", new Date()],
  ["Gabriel", "d37e7c06-e9e2-444a-8d6a-14e111585bfc.jpg", new Date()],
];

async function install() {
  for (value in toSend) {
    const result = await db.find({ file: toSend[value][1] });

    if (result.length >= 1)
      return `error: have the same file name in the database, please use an empty database`;
    else console.log(`"${toSend[value][0]}" accepted in the database`);
  }
  for (value in toSend) {
    await db
      .send(toSend[value][0], toSend[value][1], toSend[value][2])
      .then((verify) => {
        if (verify === true)
          console.log(`"${toSend[value][0]}" sent to the database`);
      });
  }
  console.log("completed, leaving in 5 seconds");
  setTimeout(() => {
    process.exit();
  }, 5000);
}

install();
