const express = require("express");
const server = express();
const routes = require("../controller/routes");
const fileUpload = require("express-fileupload");

server.set("view engine", "ejs");
server.use(fileUpload());
server.use(express.static("public"));
server.use(routes);
server.listen(8080, () => console.log("running"));