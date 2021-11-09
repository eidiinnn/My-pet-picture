const express = require("express");
const routes = express.Router();
const db = require("../model/database/connect");
const Send = require("../model/send/send");

const views = __dirname + "/../views/";
const upload = new Send();

routes.get("/", async (req, res) => {
  const pet = await db.random();
  res.render(views + "index", { pet });
});

routes.post("/upload", (req, res) => {
  if (req.files === null) return res.send("empty image");
  upload
    .sendToDatabase(req.body.name, req.files.image)
    .then(() => {
      res.send("sent");
    })
    .catch((value) => {
      res.send(value);
    });
});

module.exports = routes;
