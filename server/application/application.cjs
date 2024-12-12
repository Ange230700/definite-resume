// server\application\application.cjs

const express = require("express");
const path = require("path");

const application = express();
const viteBuildPath = path.join(__dirname, "../../client/build");
const publicFolderPath = path.join(__dirname, "../public");

application.use(express.static(viteBuildPath));

application.get("*.*", express.static(publicFolderPath, { maxAge: "1y" }));
application.get("*", (_, response) => {
  response.sendFile(path.join(viteBuildPath, "index.html"));
});

module.exports = application;
